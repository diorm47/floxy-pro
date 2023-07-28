import { Floxy } from "floxy-web-api"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Modal, ModalHeader } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import HeaderSelected from "../../components/Common/HeaderSelected"
import EventsSettingsItem from "./EventsSettingsItem"

const apis = new Floxy(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"
)

const EventsSettings = () => {
  const [events, setEvents] = useState([])
  const [activeGroup, setActiveGroup] = useState()

  const [filteredBots, setFilteredBots] = useState()
  const [workingBots, setWorkingBots] = useState()
  const [blockedBots, setBlockedBots] = useState()

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState(false)

  const { id } = useParams()

  useEffect(() => {
    const makeRequest = async () => {
      const activeGroupData = await apis.getGroup(Number(id))
      setActiveGroup(activeGroupData)

      const eventsData = await apis.getEvents()
      const filteredEvents = eventsData?.filter(
        event => event.param_id === activeGroupData?.group_id
      )
      setEvents(filteredEvents)

      const botsData = await apis.getBots()
      const filteredBotsData = botsData.filter(bot1 =>
        filteredEvents[0].bots.some(bot2 => bot2.bot_id === bot1._id)
      )

      setFilteredBots(filteredBotsData)

      const workingBotsData = filteredBotsData.filter(bot => {
        return bot.state === "active"
      })
      const blockedBotsData = filteredBotsData.filter(bot => {
        return bot.state === "blocked"
      })

      setWorkingBots(workingBotsData)
      setBlockedBots(blockedBotsData)
    }

    makeRequest()
  }, [])

  const onSwitchClick = async (event: { enabled: any; _id: string }) => {
    console.log(event)

    if (event.enabled) {
      await apis.stopEvent(event._id)
      const activeGroupData = await apis.getGroup(Number(id))
      setActiveGroup(activeGroupData)
      const eventsData = await apis.getEvents()
      const filteredEvents = eventsData?.filter(
        event => event.param_id === activeGroupData?.group_id
      )
      setEvents(filteredEvents)
    } else {
      await apis.startEvent(event._id)
      const activeGroupData = await apis.getGroup(Number(id))
      setActiveGroup(activeGroupData)
      const eventsData = await apis.getEvents()
      const filteredEvents = eventsData?.filter(
        event => event.param_id === activeGroupData?.group_id
      )
      setEvents(filteredEvents)
    }
  }

  const refresh = async () => {
    setEvents()
    const activeGroupData = await apis.getGroup(Number(id))
    setActiveGroup(activeGroupData)
    const eventsData = await apis.getEvents()
    const filteredEvents = eventsData?.filter(
      event => event.param_id === activeGroupData?.group_id
    )
    setEvents(filteredEvents)
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title={"УПРАВЛЕНИЕ РАССЫЛКАМИ"} />
          <p>
            Здесь вы можете смотреть рассылки по каждой группе и
            совершать с ними функциональные действия
          </p>

          <HeaderSelected
            title={activeGroup?.title}
            img={activeGroup?.photo}
          />

          <p>
            Если хотите увидеть рассылки другой группы, чата или
            редиректы нажмите на соответствующий значок
          </p>

          <div className={"bots-wrapper mt-3"}>
            {events?.map(event => (
              <EventsSettingsItem
                activeGroup={activeGroup}
                event={event}
                setIsConfirmationModalOpen={
                  setIsConfirmationModalOpen
                }
                refresh={refresh}
                onSwitchClick={onSwitchClick}
              />
            ))}
          </div>
        </Container>
      </div>

      {/* delete confirmation isConfirmationModalOpen */}
      <Modal
        isOpen={isConfirmationModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsConfirmationModalOpen(!isConfirmationModalOpen)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsConfirmationModalOpen(!isConfirmationModalOpen)
            }}
          >
            <p className={"topup-modal-name"}>
              Вы уверены, что хотите удалить бота?
            </p>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <p className={"confirmation-text"}>
            {/*Удаляемые боты: <span>{activeGroup?.description}</span>*/}
          </p>

          <div className={"topup-modal-footer"}>
            <button
              className={"btn btn-primary"}
              // onClick={onDeleteClick}
            >
              Да
            </button>
            <button
              className={"btn btn-secondary"}
              onClick={() =>
                setIsConfirmationModalOpen(!isConfirmationModalOpen)
              }
            >
              Нет
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default EventsSettings

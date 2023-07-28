import { Floxy, IApi, IWebApi } from "floxy-web-api"
import React, { Key, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
import { Modal, ModalHeader } from "reactstrap"
const apis = new Floxy(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"
)

const GroupsItem = ({
  group,
  events,
  bots,
  setIsConfirmationModalOpen,
  setActiveGroup,
  refetchData,
}) => {
  const [filteredBots, setFilteredBots] = useState()
  const [stopMailing, setStopMailing] = useState(false)
  const [workingBots, setWorkingBots] = useState()
  const [blockedBots, setBlockedBots] = useState()

  const [filteredEvents, setFilteredEvents] = useState()
  const [activeEvents, setActiveEvents] = useState()

  const [eventJobs, setEventJobs] = useState()

  const [isClearModalOpen, setIsClearModalOpen] = useState(false)

  useEffect(() => {
    const makeRequest = async () => {
      const filteredEvent = events?.filter(
        (event: { param_id: any }) =>
          event.param_id === group.group_id
      )
      const filteredActiveevents = filteredEvent?.filter(
        (event: { enabled: any }) => event.enabled === true
      )
      setActiveEvents(filteredActiveevents)
      setFilteredEvents(filteredEvent)

      const eventsJobsData = []

      if (filteredEvent?.length > 0) {
        for await (const x of filteredEvent) {
          eventsJobsData.push([x._id, { onlyLength: true }])
        }
      }

      if (eventsJobsData?.length > 0) {
        const eventJobsFull = await Promise.all(
          apis.getEventJobs.many(eventsJobsData)
        )
        await setEventJobs(eventJobsFull)
      }

      if (filteredEvent && bots) {
        const filteredBotsData = bots.filter((bot1: { _id: any }) =>
          filteredEvent[0].bots.some(
            (bot2: { bot_id: any }) => bot2.bot_id === bot1._id
          )
        )

        setFilteredBots(filteredBotsData)

        const workingBotsData = filteredBotsData.filter(
          (bot: { state: string }) => {
            return bot.state === "active"
          }
        )
        const blockedBotsData = filteredBotsData.filter(
          (bot: { state: string }) => {
            return bot.state === "blocked"
          }
        )

        setWorkingBots(workingBotsData)
        setBlockedBots(blockedBotsData)
      }
    }

    makeRequest()
  }, [bots])

  const onDeleteBtnClick = async () => {
    setActiveGroup(group)
    setIsConfirmationModalOpen(true)
  }

  const onClearClick = async () => {
    const eventsJobsData = []

    if (filteredEvents?.length > 0) {
      for await (const x of filteredEvents) {
        eventsJobsData.push([x._id])
      }
    }

    if (eventsJobsData?.length > 0) {
      await Promise.all(apis.clearEventJobs.many(eventsJobsData))
    }

    await refetchData()

    setIsClearModalOpen(false)
  }

  const toggleMailingGroups = async (group: any) => {
   
  }

  function getBotWord(num: number) {
    const cases = [2, 0, 1, 1, 1, 2]
    const words = ["Бот", "Бота", "Ботов"]
    const index =
      num % 100 > 4 && num % 100 < 20
        ? 2
        : cases[Math.min(num % 10, 5)]
    return `${words[index]}`
  }

  return (
    <>
      <div className={"bots-item"}>
        <div className={"w-100"}>
          <div
            className={
              "bot-header d-flex align-items-center justify-content-between"
            }
          >
            <h4
              className={"bot-name"}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={`${group?.title}`}
              data-tooltip-place="bottom"
            >
              {group.title || "Название отсутствует"}
            </h4>

            <div className="form-check form-switch form-switch-lg">
              <input
                type="checkbox"
                className="form-check-input"
                id="customSwitchsizelg"
                defaultChecked
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`Отключить все рассылки`}
                data-tooltip-place="bottom"
                onClick={() => toggleMailingGroups(group)}
              />
            </div>
          </div>

          <div
            className={
              "group-statistic d-flex align-items-center mb-4"
            }
          >
            <a
              href={`https://vk.com/club${group.group_id}`}
              target="blank"
            >
              <img
                className={"bots-avatar"}
                src={
                  group?.photo
                    ? group?.photo
                    : "https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
                }
                alt={group.title}
              />
            </a>
            <div>
              <p>
                <span>{workingBots?.length || "0"}</span>
              </p>
              <p>{getBotWord(workingBots?.length || 0)} в работе</p>
            </div>

            <div>
              <p>
                <span>{blockedBots?.length || "0"}</span>
              </p>
              <p>{getBotWord(blockedBots?.length || 0)} в бане</p>
            </div>

            <div>
              <p>
                <span>{filteredBots?.length || "0"}</span>
              </p>
              <p>{getBotWord(filteredBots?.length || 0)} всего</p>
            </div>
          </div>
        </div>

        {activeEvents && activeEvents.length >= 1 ? (
          <div className={"w-100"}>
            <p>Включенные рассылки:</p>

            <div className={"group-events w-100"}>
              {activeEvents
                .slice(0, 4)
                .map(
                  (event: {
                    _id: Key | null | undefined
                    description: any
                  }) => (
                    <Link
                      to={`/groups/${group.group_id}/${event?._id}`}
                      key={event._id}
                      className={"group-event-item"}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={`${
                        event.description || "Не указано"
                      }`}
                      data-tooltip-place="bottom"
                    >
                      {event.description || "Не указано"}
                    </Link>
                  )
                )}
            </div>

            <Link
              to={`/groups/${group.group_id}/${filteredEvents[0]?._id}`}
              className={"clean-btn blue-btn m-0"}
            >
              Показать ещё
            </Link>
          </div>
        ) : (
          <div className={"no-events"}>Все рассылки отключены</div>
        )}

        <div className={"group-queue d-flex align-items-center"}>
          <p>
            Заданий в очереди:{" "}
            <span>
              {eventJobs?.reduce(
                (accumulator: number, currentValue: number) => {
                  return accumulator + currentValue
                },
                0
              )}
            </span>
          </p>
          <button
            className={"clean-btn blue-btn"}
            onClick={() => setIsClearModalOpen(true)}
          >
            Очистить очередь
          </button>
        </div>

        <div className={"w-100"}>
          <Link
            to={`/events-settings/${group.group_id}`}
            className={"w-100 btn btn-primary"}
          >
            Управление рассылками
          </Link>

          {filteredEvents && (
            <Link
              to={`/groups/${group.group_id}/${filteredEvents[0]?._id}`}
              className={
                "w-100 groups-settings-btn btn btn-outline-primary"
              }
            >
              Настройки
            </Link>
          )}

          <button className={"bot-delete"} onClick={onDeleteBtnClick}>
            <i className="bx bx-trash"></i>
            <span>Удалить группу</span>
          </button>
        </div>
      </div>

      {/* clear confirmation isConfirmationModalOpen */}
      <Modal
        isOpen={isClearModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsClearModalOpen(!isClearModalOpen)
        }}
      >
        <div className="modal-body">
          <p className={"topup-modal-name"}>Очистить очередь?</p>
          <div className={"topup-modal-footer"}>
            <button
              className={"btn btn-primary modal-btn-footer"}
              onClick={onClearClick}
            >
              Да
            </button>
            <button
              className={"btn btn-secondary modal-btn-footer"}
              onClick={() => setIsClearModalOpen(!isClearModalOpen)}
            >
              Нет
            </button>
          </div>
        </div>
      </Modal>

      <Tooltip id="my-tooltip" />
    </>
  )
}
export default GroupsItem

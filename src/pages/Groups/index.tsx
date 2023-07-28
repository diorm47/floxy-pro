import { Floxy } from "floxy-web-api"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import React from "react"
import { Tooltip } from "react-tooltip"
import { Container, Modal, ModalHeader } from "reactstrap"
import refreshIcon from "../../assets/images/bots/refresh-icon.svg"
import CustomSnackbar from "../../components/Common/costom-snackbar/costom-snackbar"
import "./Groups.scss"
import GroupsItem from "./GroupsItem"
import GroupsModalItem from "./GroupsModalItem"
const apis = new Floxy(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"
)

const Groups = () => {
  const [groups, setGroups] = useState()
  const [events, setEvents] = useState()
  const [bots, setBots] = useState()
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarText, setSnackbarText] = useState("")
  const [activeGroup, setActiveGroup] = useState()
  const [groupToken, setGroupToken] = useState()
  const [addGroupInputValue, setAddGroupInputValue] = useState()

  const [isAddGroupModal, setIsAddGroupModal] = useState(false)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState(false)

  React.useEffect(() => {
    document.title = `Группы | Floxy.pro`
  }, [])
  useEffect(() => {
    const makeRequest = async () => {
      const groupsData = await apis.getGroups()
      setGroups(groupsData)

      const eventsData = await apis.getEvents()
      setEvents(eventsData)

      const botsData = await apis.getBots()
      setBots(botsData)
    }

    makeRequest()
  }, [])

  const onDeleteClick = async () => {
    const returns = await apis.deleteGroup(activeGroup.group_id, true)

    const groupsData = await apis.getGroups()
    setGroups(groupsData)

    const eventsData = await apis.getEvents()
    // const filteredEvents = eventsData.filter(
    //   (event: { event_name: string }) => {
    //     return event.event_name === "group_join"
    //   }
    // )
    setEvents(eventsData)

    const botsData = await apis.getBots()

    setBots(botsData)

    setIsConfirmationModalOpen(!isConfirmationModalOpen)
  }

  const refetchData = async () => {
    const makeRequest = async () => {
      const groupsData = await apis.getGroups()
      setGroups(groupsData)

      const eventsData = await apis.getEvents()
      setEvents(eventsData)

      const botsData = await apis.getBots()
      setBots(botsData)
    }

    makeRequest()
  }
  const refresh = async () => {
    const groups_id = []

    if (groups?.length > 0) {
      for await (const x of groups) {
        groups_id.push([x.group_id])
      }
    }
    if (groups_id?.length > 0) {
      await Promise.all(apis.updateGroupView.many(groups_id))
    }
    await setSnackbarText("Данные обновлены ")
    await setShowSnackbar(true)
    setTimeout(() => {
      setShowSnackbar(false)
    }, 2000)

    await refetchData()
  }

  const getGroupSearch = async (group_id: any) => {
    const token = await apis.reserveTokenStore(group_id)
    setGroupToken(token.storeKey)
    window.open(`${token.authLink}`, "_blank")
  }
  const addGroup = async () => {
    await apis.createGroup(groupToken)

    await setIsAddGroupModal(!isAddGroupModal)
    await setSnackbarText("Группа добавлена ")
    await setShowSnackbar(true)
    refetchData()
  }

  return (
    <>
      <CustomSnackbar
        message={`${snackbarText} !`}
        type="success"
        show={showSnackbar}
      />
      <div className="page-content">
        <Container fluid>
          <div
            className={
              "bots-header wrapper-header d-flex align-items-center justify-content-between"
            }
          >
            <div className={"d-flex align-items-center"}>
              <h2 className={"main-title me-2"}>
                Группы ({groups?.length})
              </h2>

              <button
                className={"btn btn-outline-primary"}
                onClick={() => setIsAddGroupModal(!isAddGroupModal)}
              >
                Добавить группу
              </button>
            </div>

            <button
              className={"bots-refresh btn btn-primary"}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Обновить фото и названия групп"
              data-tooltip-place="bottom"
              onClick={refresh}
            >
              <img src={refreshIcon} alt="refresh icon" />
              Обновить данные
            </button>
          </div>

          <div className={"groups-wrapper"}>
            {groups?.map(
              (group: { group_id: Key | null | undefined }) => (
                <div key={group?.group_id}>
                  <GroupsItem
                    group={group}
                    events={events}
                    bots={bots}
                    setIsConfirmationModalOpen={
                      setIsConfirmationModalOpen
                    }
                    setActiveGroup={setActiveGroup}
                    refetchData={refetchData}
                  />
                </div>
              )
            )}
          </div>
        </Container>
      </div>

      {/* add group modal */}
      <Modal
        isOpen={isAddGroupModal}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        // modalTransitionAppearTimeout={10}
        fadeProps={{ appear: 10 }}
        toggle={() => {
          setIsAddGroupModal(!isAddGroupModal)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsAddGroupModal(!isAddGroupModal)
            }}
          >
            <h4 className={"topup-modal-name"}>
              Выберите группу, которую хотите добавить
            </h4>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <p>
            Вы можете добавить только те группы, в которых вы
            являетесь администратором. При выборе группы, нужно
            подтвердить это действие во ВКонтате
          </p>

          <div className="add_groups">
            <i className="bx bx-search-alt"></i>
            <input
              type="text"
              onChange={e => setAddGroupInputValue(e.target.value)}
              placeholder="Поиск группы"
            />
            <button
              onClick={() => getGroupSearch(addGroupInputValue)}
            >
              Добавить
            </button>
          </div>
          {groupToken ? (
            <button
              className="confirm_gr_add"
              onClick={() => addGroup()}
            >
              Подтвердить добавление группы
            </button>
          ) : (
            ""
          )}

          <div className="add_group_suggest_list">
            {groups?.map(
              (group: { group_id: Key | null | undefined }) => (
                <div
                  className="add_group_suggest_item"
                  key={group?.group_id}
                >
                  <GroupsModalItem group={group} />
                </div>
              )
            )}
          </div>
        </div>
      </Modal>

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
            Удаляемые боты: <span>{activeGroup?.title}</span>
          </p>

          <div className={"topup-modal-footer"}>
            <button
              className={"btn btn-primary"}
              onClick={onDeleteClick}
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

      <Tooltip id="my-tooltip" />
    </>
  )
}
export default Groups

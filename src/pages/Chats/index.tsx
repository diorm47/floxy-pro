import { Floxy } from "floxy-web-api"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import React from "react"
import { Tooltip } from "react-tooltip"
import { Container, Modal, ModalHeader } from "reactstrap"
import refreshIcon from "../../assets/images/bots/refresh-icon.svg"
import CustomSnackbar from "../../components/Common/costom-snackbar/costom-snackbar"
import "../Groups/Groups.scss"
import ChatItem from "./ChatItem"
import "./Chats.scss"
import ChatsModalUtem from "./ChatsModalUtem"
const apis = new Floxy(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"
)

const Chats = () => {
  // const [groups, setGroups] = useState()
  const [chats, setChats] = useState()
  const [events, setEvents] = useState()
  const [bots, setBots] = useState()
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarText, setSnackbarText] = useState("")
  const [activeChat, setactiveChat] = useState()
  const [groupToken, setGroupToken] = useState()
  const [addGroupInputValue, setAddGroupInputValue] = useState()

  const [isAddGroupModal, setIsAddGroupModal] = useState(false)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState(false)

  React.useEffect(() => {
    document.title = `Чаты | Floxy.pro`
  }, [])
  useEffect(() => {
    const makeRequest = async () => {
      // const groupsData = await apis.getGroups()
      // setGroups(groupsData)

      const eventsData = await apis.getEvents()
      const chatLinkMap = {}
      eventsData.forEach(event => {
        if (
          event.invite_chat_link &&
          !chatLinkMap[event.invite_chat_link]
        ) {
          chatLinkMap[event.invite_chat_link] = event
        }
      })
      const filteredChats = Object.values(chatLinkMap)
      // const filteredChats = eventsData.filter(event => {
      //   return event.invite_chat_link
      // })
      setChats(filteredChats)

      setEvents(eventsData)

      const botsData = await apis.getBots()
      setBots(botsData)
    }

    makeRequest()
  }, [])

  const onDeleteClick = async () => {
    const returns = await apis.deleteGroup(activeChat.chat_id, true)

    const groupsData = await apis.getGroups()
    // setGroups(groupsData)

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
        groups_id.push([x.chat_id])
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

  const getGroupSearch = async (chat_id: any) => {
    const token = await apis.reserveTokenStore(chat_id)
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
                Чаты ({chats?.length})
              </h2>
              <Link to={`/chats/new_chat/new_event`}>
                <button
                  className={"btn btn-outline-primary"}
                  // onClick={() => setIsAddGroupModal(!isAddGroupModal)}
                >
                  Добавить чат
                </button>
              </Link>
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
            {chats?.map(
              (chat: {
                invite_chat_link: Key | null | undefined
              }) => (
                <div key={chat?.invite_chat_link}>
                  <ChatItem
                    chat={chat}
                    events={events}
                    bots={bots}
                    setIsConfirmationModalOpen={
                      setIsConfirmationModalOpen
                    }
                    setactiveChat={setactiveChat}
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
            <h4 className={"topup-modal-name"}>Добавление чата</h4>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <p>Введите ссылку на чат:</p>

          <div className="add_groups">
            <i className="bx bx-search-alt"></i>
            <input
              type="text"
              onChange={e => setAddGroupInputValue(e.target.value)}
              placeholder="ссылка"
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
            {chats?.map(
              (chat: { chat_id: Key | null | undefined }) => (
                <div
                  className="add_group_suggest_item"
                  key={chat?.chat_id}
                >
                  <ChatsModalUtem chat={chat} />
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
            Удаляемые боты: <span>{activeChat?.title}</span>
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
export default Chats

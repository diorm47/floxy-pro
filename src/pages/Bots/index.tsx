import { Floxy } from "floxy-web-api"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, Modal, ModalHeader } from "reactstrap"
import refreshIcon from "../../assets/images/bots/refresh-icon.svg"
import Bot from "./Bot"
import "./Bots.scss"
import React from "react"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"

const Bots = () => {
  const [workingBots, setWorkingBots] = useState()
  const [blockedBots, setBlockedBots] = useState()

  const [activeBot, setActiveBot] = useState()

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState(false)
  React.useEffect(() => {
    document.title = `Боты | Floxy.pro`
  }, [])
  useEffect(() => {
    const makeRequest = async () => {
      globalThis.apis = await new Floxy(token)

      const botsData = await apis.getBots()

      const workingBotsData = botsData.filter(bot => {
        return bot.state === "active"
      })
      const blockedBotsData = botsData.filter(bot => {
        return bot.state === "blocked"
      })

      setWorkingBots(workingBotsData)
      setBlockedBots(blockedBotsData)
    }

    makeRequest()
  }, [])

  const onRefreshBtnClick = async () => {
    const botsData = await apis.getBots()

    const workingBotsData = botsData.filter(bot => {
      return bot.state === "active"
    })
    const blockedBotsData = botsData.filter(bot => {
      return bot.state === "blocked"
    })

    setWorkingBots(workingBotsData)
    setBlockedBots(blockedBotsData)
  }

  const onSwitchClick = async bot => {
    if (bot.enabled) {
      await apis.stopBot(bot._id)
    } else {
      await apis.startBot(bot._id)
    }

    const botsData = await apis.getBots()

    const workingBotsData = botsData.filter(bot => {
      return bot.state === "active"
    })
    const blockedBotsData = botsData.filter(bot => {
      return bot.state === "blocked"
    })

    setWorkingBots(workingBotsData)
    setBlockedBots(blockedBotsData)
  }

  const onDeleteClick = async () => {
    const returns = await apis.deleteBot(activeBot._id, true)

    const botsData = await apis.getBots()

    const workingBotsData = botsData.filter(bot => {
      return bot.state === "active"
    })
    const blockedBotsData = botsData.filter(bot => {
      return bot.state === "blocked"
    })

    setWorkingBots(workingBotsData)
    setBlockedBots(blockedBotsData)

    setIsConfirmationModalOpen(!isConfirmationModalOpen)
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <div
            className={
              "bots-header d-flex align-items-center justify-content-between"
            }
          >
            <div className={"d-flex align-items-center"}>
              <h2 className={"main-title me-2"}>
                Боты ({workingBots?.length})
              </h2>
              <Link
                to="/bots/new"
                className={"btn btn-outline-primary"}
              >
                Добавить бота
              </Link>
            </div>

            <button
              className={"bots-refresh btn btn-primary"}
              onClick={onRefreshBtnClick}
            >
              <img src={refreshIcon} alt="refresh icon" />
              Обновить данные
            </button>
          </div>

          <div className={"bots-wrapper"}>
            {workingBots?.map((bot: any) => (
              <div key={bot._id}>
                <Bot
                  bot={bot}
                  onSwitchClick={onSwitchClick}
                  setIsConfirmationModalOpen={
                    setIsConfirmationModalOpen
                  }
                  setActiveBot={setActiveBot}
                />
              </div>
            ))}
          </div>

          {blockedBots?.length > 0 && (
            <div className={"bots-blocked"}>
              <h2 className={"main-title"}>
                заблокированные боты ({blockedBots?.length})
              </h2>
              <div className={"bots-wrapper"}>
                {blockedBots?.map((bot: any) => (
                  <div key={bot._id}>
                    <Bot
                      bot={bot}
                      setIsConfirmationModalOpen={
                        setIsConfirmationModalOpen
                      }
                      setActiveBot={setActiveBot}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
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
            Удаляемые боты: <span>{activeBot?.description}</span>
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
    </>
  )
}
export default Bots

import { Floxy } from "floxy-web-api"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CopyText from "../../components/Common/CopyText"
import CustomSnackbar from "../../components/Common/costom-snackbar/costom-snackbar"

const apis = new Floxy(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"
)
const CustomMailingItem = ({
  event,
  setIsConfirmationModalOpen,
  setIsClearModalOpen,
}) => {
  const [eventJobs, setEventJobs] = useState()
  const [showSnackbar, setShowSnackbar] = useState(false)

  const [workingBots, setWorkingBots] = useState()
  const [blockedBots, setBlockedBots] = useState()

  const [bots, setBots] = useState()
  useEffect(() => {
    const makeRequest = async () => {
      const eventJobsData = await apis.getEventJobs(event._id)
      setEventJobs(eventJobsData)

      const botsData = await apis.getBots()
      setBots(botsData)
   
      
      if (event) {
        const filteredBotsData = bots?.filter((bot1: { _id: any }) =>
          event.bots.some(
            (bot2: { bot_id: any }) => bot2.bot_id === bot1._id
          )
        )

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
  }, [])
  const handleButtonClick = () => {
    setShowSnackbar(true)
  }

  const toggleActivetiy = (event: { enabled: any; _id: string }) => {
    if (!event.enabled) {
      apis.startEvent(event._id)
    } else {
      apis.stopEvent(event._id)
    }
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
    <div className={"bots-item bots-item--custom "}>
      <div
        className={
          "bot-header d-flex align-items-center justify-content-between"
        }
      >
        <h4 className={"bot-name"}>{event.description}</h4>

        <div
          className={
            "d-flex justify-content-between "
          }
          id="custom_block_top"
        >
          <Link to={`/custom-mailing/${event._id}`}>
            <button className={"clean-btn custom-mailing-icon"}>
              <i className="bx bx-cog"></i>
            </button>
          </Link>

          <button className={"clean-btn custom-mailing-icon"}>
            <i className="bx bxs-bar-chart-alt-2"></i>
          </button>

          <div className="form-check form-switch form-switch-lg">
            <input
              type="checkbox"
              className="form-check-input form-check-input--left"
              id="customSwitchsizelg"
              defaultChecked={event.enabled}
              onChange={() => toggleActivetiy(event)}
            />
          </div>
        </div>
      </div>

      <div
        className={
          "custom-mailing-stats d-flex align-items-center justify-content-between"
        }
      >
        <div>
          <p className="fw-semibold">
            <span>{workingBots?.length || "0"}</span>
          </p>
          <p>{getBotWord(workingBots?.length || 0)} в работе</p>
        </div>

        <div>
          <p className="fw-semibold">
            <span>{blockedBots?.length || "0"}</span>
          </p>
          <p>{getBotWord(blockedBots?.length || 0)} в бане</p>
        </div>

        <div>
          <p className="fw-semibold">
            <span>{event.bots?.length || "0"}</span>
          </p>
          <p>{getBotWord(event.bots?.length || 0)} всего</p>
        </div>
      </div>

      <div className={"d-flex align-items-center mailing_quees"}>
        <p>
          Заданий в очереди:{" "}
          <span className="fw-semibold">{eventJobs?.length}</span>
        </p>
        <button
          className={"clean-btn blue_color"}
          onClick={() => setIsClearModalOpen()}
        >
          Очистить очередь
        </button>
      </div>

      <div className="custom_m_delete">
        <CopyText
          value={event._id}
          handleButtonClick={handleButtonClick}
        />
        <CustomSnackbar
          message={`Скопировано !`}
          type="success"
          show={showSnackbar}
        />
        <button
          className={"bot-delete"}
          onClick={() => setIsConfirmationModalOpen(event)}
        >
          <i className="bx bx-trash"></i>
          <span>Удалить рассылку</span>
        </button>
      </div>
    </div>
  )
}
export default CustomMailingItem

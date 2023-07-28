import { Floxy } from "floxy-web-api"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
import CustomSnackbar from "../../components/Common/costom-snackbar/costom-snackbar"
import "./EventsSettings.scss"

const apis = new Floxy(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"
)

const EventsSettingsItem = ({
  activeGroup,
  event,
  setIsConfirmationModalOpen,
  onSwitchClick,
  refresh,
}) => {
  const [eventJobs, setEventJobs] = useState()
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarText, setSnackbarText] = useState("")

  useEffect(() => {
    const makeRequest = async () => {
      const eventJobsData = await apis.getEventJobs(event._id)
      setEventJobs(eventJobsData)
    }

    makeRequest()
  }, [])

  const toggleEnableEvents = (event: { enabled: unknown }) => {
    if (event.enabled) {
      onSwitchClick(event)
      setSnackbarText("Рассылка выключена")
      setShowSnackbar(true)
      setTimeout(() => {
        setShowSnackbar(false)
      }, 2000)
    } else {
      onSwitchClick(event)
      setSnackbarText("Рассылка включена")
      setShowSnackbar(true)
      setTimeout(() => {
        setShowSnackbar(false)
      }, 2000)
    }
  }

  const deleteMailing = async () => {
    await setSnackbarText("Рассылка удалена")

    setShowSnackbar(true)
    setTimeout(() => {
      setShowSnackbar(false)
    }, 2000)
    await apis.deleteEvent(event._id)
    await refresh()
  }

  const testMailing = async () => {
    await apis.sendEventMessage(event._id)
    await setSnackbarText("Отправлено успешно")

    setShowSnackbar(true)
    setTimeout(() => {
      setShowSnackbar(false)
    }, 2000)
  }

  const loadMembers = async () => {
    const res = await apis.loadEventMembers(event._id, 1000)
  }

  return (
    <>
      <CustomSnackbar
        message={`${snackbarText} !`}
        type={"success"}
        show={showSnackbar}
      />
      <div className={"bots-item bots-item--custom"}>
        <div
          className={
            "bot-header d-flex align-items-center justify-content-between"
          }
        >
          <h4
            className={"bot-name"}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${event.description}`}
            data-tooltip-place="top"
          >
            {event.description || "Не указано"}
          </h4>

          <div
            className={
              "d-flex align-items-center justify-content-between gap-2"
            }
          >
            <Link
              to={`/groups/${activeGroup.group_id}/${event?._id}`}
              className={"custom-mailing-icon"}
            >
              <button className={"clean-btn"}>
                <i className="bx bx-cog"></i>
              </button>
            </Link>

            <button className={"clean-btn custom-mailing-icon"}>
              <i className="bx bxs-bar-chart-alt-2"></i>
            </button>

            {event.enabled ? (
              <div className="form-check form-switch form-switch-lg form-switch-lg--padding">
                <input
                  type="checkbox"
                  className="form-check-input form-check-input--left"
                  id="customSwitchsizelg"
                  defaultChecked
                  onClick={() => toggleEnableEvents(event)}
                />
              </div>
            ) : (
              <div className="form-check form-switch form-switch-lg form-switch-lg--padding">
                <input
                  type="checkbox"
                  className="form-check-input form-check-input--left"
                  id="customSwitchsizelg"
                  onClick={() => toggleEnableEvents(event)}
                />
              </div>
            )}
          </div>
        </div>

        <div
          className={
            "custom-mailing-stats events-bots d-flex align-items-center justify-content-between"
          }
        >
          <div>
            <p>
              <span>
                {event.bots && event.bots[0] ? event.bots.length : 0}
              </span>
            </p>
            <p>Ботов в работе</p>
          </div>

          <div>
            <p>
              <span>0</span>
            </p>
            <p>Ботов в бане</p>
          </div>

          <div>
            <p>
              <span>
                {event.bots && event.bots[0] ? event.bots.length : 0}
              </span>
            </p>
            <p>Ботов всего</p>
          </div>
        </div>

        <p className={"event-queue"}>
          Заданий в очереди: <span>{eventJobs?.length}</span>
        </p>

        <div className={"w-100"}>
          <div
            className={"w-100 btn btn-primary"}
            onClick={testMailing}
          >
            Протестировать
          </div>

          <div
            className={
              "w-100 groups-settings-btn btn btn-outline-primary"
            }
            onClick={loadMembers}
          >
            Собрать пользователей
          </div>

          <button className={"bot-delete"} onClick={deleteMailing}>
            <i className="bx bx-trash"></i>
            <span>Удалить рассылку</span>
          </button>
        </div>
      </div>

      <Tooltip id="my-tooltip" />
    </>
  )
}
export default EventsSettingsItem

import React, { FC } from "react"
import { Link } from "react-router-dom"

const Bot = ({
  bot,
  onSwitchClick,
  setIsConfirmationModalOpen,
  setActiveBot,
}) => {
  const dateFromObjectId = function (objectId) {
    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000)
  }

  const formattedDate = dateFromObjectId(bot._id)
    .toISOString()
    .slice(0, 10)

  const proxy = bot?.proxy?.split("@")[1]?.split(":")[0]

  const onDeleteBtnClick = async () => {
    setActiveBot(bot)
    setIsConfirmationModalOpen(true)
  }

  return (
    <div className={"bots-item"} key={bot._id}>
      <div className={"w-100"}>
        <div
          className={
            "bot-header d-flex align-items-center justify-content-between"
          }
        >
          <h4 className={"bot-name"}>{bot.title}</h4>
          <div
            className={
              bot.state === "blocked"
                ? "bot-blocked-text"
                : "bot-working-text"
            }
          >
            {bot.state === "active" ? "Онлайн" : "Заблокирован"}
          </div>
        </div>

        <div className={"group-statistic d-flex align-items-center"}>
          <img
            className={"bots-avatar"}
            src={
              bot?.photo
                ? bot?.photo
                : "https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
            }
            alt={bot.description}
          />

          <div>
            <p className={"fw-semibold"}>{formattedDate}</p>
            <p>Дата добавления</p>
          </div>
        </div>

        <p className={"bot-text"}>
          Используется в <span className="fw-semibold">6 рассылках</span>
        </p>

        {proxy && (
          <p>
            Прокси: <span className="fw-semibold">{proxy}</span>
          </p>
        )}
      </div>

      <div className={"w-100"}>
        <Link
          to={`/bots/${bot._id}`}
          className={"bot-settings btn btn-primary"}
        >
          Настройки
        </Link>

        <button className={"bot-delete"} onClick={onDeleteBtnClick}>
          <i className="bx bx-trash"></i>
          <span>Удалить бота</span>
        </button>
      </div>
    </div>
  )
}
export default Bot

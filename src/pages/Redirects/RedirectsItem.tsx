import React from "react"
import { Link } from "react-router-dom"

const RedirectsItem = ({ event }) => {
  return (
    <div className={"bots-item bots-item--custom"}>
      <div
        className={
          "bot-header d-flex align-items-center justify-content-between"
        }
      >
        <h4 className={"bot-name"}>{event.description}</h4>

        <div
          className={
            "d-flex align-items-center justify-content-between"
          }
        >
          {event.enabled ? (
            <div className="form-check form-switch form-switch-lg">
              <input
                type="checkbox"
                className="form-check-input"
                id="customSwitchsizelg"
                defaultChecked
                // onClick={() => onSwitchClick(bot._id)}
              />
            </div>
          ) : (
            <div className="form-check form-switch form-switch-lg">
              <input
                type="checkbox"
                className="form-check-input"
                id="customSwitchsizelg"
                // onClick={() => onSwitchClick(bot._id)}
              />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          "custom-mailing-stats d-flex align-items-center justify-content-between"
        }
      >
        <img
          className={"bots-avatar"}
          src={
            event?.photo
              ? event?.photo
              : "https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
          }
          alt={event.description}
        />

        <div>
          <p>0</p>
          <p>Ботов в работе</p>
        </div>

        <div>
          <p>0</p>
          <p>Ботов в бане</p>
        </div>

        <div>
          <p>0</p>
          <p>Ботов всего</p>
        </div>
      </div>

      {true ? (
        <div className={"no-events"}>Все рассылки отключены</div>
      ) : (
        <div>
          <p>К каким рассылкам подключен:</p>

          <div></div>

          <button className={"btn clean-btn"}>Показать ещё...</button>
        </div>
      )}

      <div className={"d-flex align-items-center"}>
        <p>Заданий в очереди: 6</p>
        <button className={"clean-btn"}>Очистить очередь</button>
      </div>

      <div className={"w-100"}>
        <Link
          to={`/events-settings`}
          className={"bot-settings btn btn-primary"}
        >
          Управление рассылками
        </Link>

        <Link
          to={`/redirects/${event._id}`}
          className={"bot-settings btn btn-outline-primary"}
        >
          Настройки
        </Link>

        <button
          className={"bot-delete"}
          onClick={() => console.log("helllo")}
        >
          <i className="bx bx-trash"></i>
          <span>Удалить бота</span>
        </button>
      </div>
    </div>
  )
}
export default RedirectsItem

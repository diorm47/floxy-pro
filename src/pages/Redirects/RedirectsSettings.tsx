import { Floxy } from "floxy-web-api"
import Cookies from "js-cookie"
import React, { useEffect, useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"
import Select from "react-select"
import { CardTitle, Container, Modal, ModalHeader } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {
  intervalDays,
  intervalHours,
  intervalMinutes,
  intervalSeconds,
  logic,
} from "../CustomMailing/selectOptions.data"
import { RedirectsFormPayload } from "./Redirects.interface"
import "./Redirects.scss"
import RedirectsSettingsBot from "./RedirectsSettingsBot"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"

const RedirectingSettings = () => {
  const { id } = useParams()

  const [events, setEvents] = useState()
  const [activeEvent, setActiveEvent] = useState()

  const [activeDescription, setActiveDescription] = useState("")

  // const onProxyBtnClicked = () => {
  //   setActiveProxy(activeEvent?.proxy)
  //   proxyRef.current.focus()
  // }
  //
  // const onTokenBtnClicked = () => {
  //   setActiveToken(activeEvent?.token)
  //   tokenRef.current.focus()
  // }

  useEffect(() => {
    const makeRequest = async () => {
      globalThis.apis = await new Floxy(token)

      const activeEventData = await apis.getEvent(id)
      setActiveEvent(activeEventData)

      const eventsData = await apis.getEvents()
      const filteredEvents = eventsData.filter(event => {
        return event.event_name === "custom"
      })
      setEvents(filteredEvents)
      // console.log(filteredEvents)

      setActiveDescription(activeEventData.description)

      // setActiveTimeZone(activeEventData?.active_time?.timezone)
      // setActiveWorkStart(activeEventData?.active_time?.start)
      // setActiveWorkEnd(activeEventData?.active_time?.end)
      // setActiveSendLimit(activeEvent?.day_send_limit)
      // setActiveToken(activeEventData?.token)
      // setActiveProxy(activeEventData?.proxy)
    }

    makeRequest()
  }, [])

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<RedirectsFormPayload>()

  const onSubmit: SubmitHandler<
    RedirectsFormPayload
  > = async data => {
    console.log(data)
    await apis.updateEvent(activeEvent._id, data)

    const eventsData = await apis.getEvents()
    setEvents(eventsData)
  }

  const onCreateBtnClick = async () => {
    await apis.createBot()

    const profileData = await apis.getBots()
    setEvents(profileData)
  }

  const onDeleteBtnClick = async () => {
    const returns = await apis.deleteBot(activeEvent._id)

    const profileData = await apis.getBots()
    setEvents(profileData)
  }

  const onBotClick = () => {
    setTimeout(async () => {
      const currentId = window.location.pathname.substring(11)
      const activeBotData = await apis.getEvent(currentId)
      setActiveEvent(activeBotData)

      const eventsData = await apis.getEvents()
      const filteredEvents = eventsData.filter(event => {
        return event.event_name === "custom"
      })
      setEvents(filteredEvents)

      setActiveDescription(activeBotData.description)

      // setActiveToken(activeBotData?.token)
      // setActiveProxy(activeBotData?.proxy)
    }, 0)
  }

  const [activeModal, setActiveModal] = useState()

  // const onServicesTokenClick = () => {
  //   setActiveModal(tokenServices)
  //   setIsServerModalOpen(true)
  // }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title={"НАСТРОЙКИ РЕДИРЕКТОВ"} />
          <p>
            Здесь вы можете увидеть свои рассылки, редактировать их и
            создавать новые
          </p>

          <div className={"d-flex"}>
            <div className={"redirects-menu"}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg"
                alt="avatar"
              />
              <p>Рецепты для хозяек</p>
              <i className="bx bxs-user-detail"></i>
            </div>

            <button
              className={"btn btn-outline-primary redirects-menu-btn"}
            >
              <i className="bx bxs-user-detail"></i>
            </button>
            <button
              className={"btn btn-outline-primary redirects-menu-btn"}
            >
              <i className="bx bx-share-alt"></i>
            </button>
            <button
              className={"btn btn-outline-primary redirects-menu-btn"}
            >
              <i className="bx bx-chat"></i>
            </button>
          </div>

          <div className={"bots-settings-content d-flex"}>
            <div className={"bots-settings-left"}>
              <div>
                <h4>Список редиректов: </h4>
                <div className={"bots-settings-wrapper"}>
                  {events?.map((bot: any) => (
                    <Link
                      onClick={onBotClick}
                      to={`/redirects/${bot._id}`}
                      key={bot._id}
                    >
                      <RedirectsSettingsBot
                        bot={bot}
                        activeBot={activeEvent}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <button
                className={
                  "bots-settings-create btn btn-primary d-block"
                }
                onClick={onCreateBtnClick}
              >
                + Добавить новый
              </button>
              <button
                className={"btn btn-danger d-block"}
                onClick={onDeleteBtnClick}
              >
                <i className="bx bx-trash"></i> Удалить
              </button>
            </div>

            <form
              className={"bots-settings-right"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className={
                  "d-flex align-items-center justify-content-between"
                }
              >
                <div>
                  <CardTitle className="mb-2">
                    Название рассылки:
                  </CardTitle>
                  <div
                    className={
                      "bots-settings-input-wrapper d-flex w-100"
                    }
                  >
                    <input
                      className={"topup-modal-input w-100"}
                      type="text"
                      placeholder="Название"
                      {...register("description")}
                      value={activeDescription}
                      onChange={e => {
                        setActiveDescription(e.target.value)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <CardTitle className="mb-2">Состояние:</CardTitle>

                  <div className="form-check form-switch form-switch-lg">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitchsizelg"
                      defaultChecked
                      // onClick={() => onSwitchClick(bot._id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitchsizelg"
                    >
                      Вкл
                    </label>
                  </div>
                </div>

                <div>
                  <CardTitle className="mb-2">
                    Отслеживать конверсию:
                  </CardTitle>

                  <div className="form-check form-switch form-switch-lg">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitchsizelg"
                      defaultChecked
                      // onClick={() => onSwitchClick(bot._id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitchsizelg"
                    >
                      Вкл
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div className={"d-flex align-items-center"}>
                  <CardTitle className="mb-2">
                    Интервал реагирования:
                  </CardTitle>

                  <button className={"btn clean-btn"}>
                    Использовать рандом
                  </button>
                </div>

                <div
                  className={"custom-mailing-interval-wrappper w-100"}
                >
                  <Select options={intervalDays} />

                  <Select options={intervalHours} />

                  <Select options={intervalMinutes} />

                  <Select options={intervalSeconds} />
                </div>

                <p>
                  Время, через которое отправлять сообщение при
                  выполнении события
                </p>
              </div>

              <div>
                <CardTitle className="mb-2">Время работы:</CardTitle>

                <div
                  className={
                    "bots-settings-input-wrapper d-flex w-100"
                  }
                >
                  <Select options={intervalDays} />

                  <Select options={intervalHours} />
                </div>
              </div>

              <div>
                <CardTitle className="mb-2 pro-marker">
                  Ручное указание пути ID пользователей:
                </CardTitle>

                <div
                  className={
                    "d-flex align-items-center justify-content-between"
                  }
                >
                  <div>
                    <div className="form-check form-switch form-switch-lg">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        // onClick={() => onSwitchClick(bot._id)}
                      />
                    </div>
                  </div>

                  <div>
                    <input type="text" placeholder={"путь"} />
                    <p>
                      Укажите JSON-путь к объекту с id-пользователя
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <CardTitle className="mb-2 pro-marker">
                  Логика бота:
                </CardTitle>
                <Select options={logic} />
              </div>

              <div>
                <CardTitle className="mb-2 pro-marker">
                  К каким рассылкам подключить:
                </CardTitle>

                <div className={"d-flex align-items-center"}>
                  <Select options={logic} />
                  <Select options={logic} />
                  <button className={"btn clean-btn"}>
                    Добавить
                  </button>
                </div>
              </div>

              <div>
                <CardTitle className="mb-2">
                  Отправлять от имени:
                </CardTitle>

                <Select options={logic} />
              </div>

              <div className={"bots-settings-btn"}>
                <button className={"btn btn-primary"} type={"submit"}>
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  )
}
export default RedirectingSettings

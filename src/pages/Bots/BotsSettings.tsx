import { Floxy } from "floxy-web-api"
import Cookies from "js-cookie"
import React, { FC, useEffect, useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router-dom"
import Select from "react-select"
import { CardTitle, Container, Modal, ModalHeader } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { formattedData, FormPayload } from "./BotsSettings.interface"
import BotsSettingsBot from "./BotsSettingsBot"
import { intervalFormat } from "./format.data"
import { proxyServices, tokenServices } from "./services.data"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"

// @ts-ignore
const BotsSettings: FC<{ boolean }> = ({ isNew }) => {
  const { id } = useParams()

  // bots
  const [bots, setBots] = useState()
  const [activeBot, setActiveBot] = useState()

  // inputs
  const [activeToken, setActiveToken] = useState("")
  const [activeProxy, setActiveProxy] = useState("")
  const [activeDescription, setActiveDescription] = useState("")
  const [activeTimeZone, setActiveTimeZone] = useState("")
  const [activeWorkStart, setActiveWorkStart] = useState("")
  const [activeWorkEnd, setActiveWorkEnd] = useState("")
  const [activeSendLimit, setActiveSendLimit] = useState()
  const [activeSendInterval, setActiveSendInterval] = useState("")
  const [
    activeSendIntervalFormatted,
    setActiveSendIntervalFormatted,
  ] = useState("")

  // modals
  const [isServicesModalOpen, setIsServicesModalOpen] =
    useState(false)
  const [isProxyModalOpen, setIsProxyModalOpen] = useState(false)
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState(false)

  const proxyRef = useRef()
  const tokenRef = useRef()

  const scrollRef = useRef(null)

  const [isCreatingBot, setIsCreatingBot] = useState(isNew)

  // const onProxyBtnClicked = () => {
  //   setActiveProxy(activeBot?.proxy)
  //   proxyRef.current.focus()
  // }
  //
  // const onTokenBtnClicked = () => {
  //   setActiveToken(activeBot?.token)
  //   tokenRef.current.focus()
  // }

  // initial request
  useEffect(() => {
    const makeRequest = async () => {
      globalThis.apis = await new Floxy(token)

      if (isCreatingBot) {
        const botsData = await apis.getBots()
        setBots(botsData)

        const newBot = {
          _id: "631cf28b72a61d43fdsaa1732bcd8",
          enabled: false,
          description: "Новый бот",
        }
        setBots([...botsData, newBot])
        setActiveBot(newBot)
      } else {
        const activeBotData = await apis.getBot(id)
        setActiveBot(activeBotData)

        setActiveDescription(activeBotData.description)
        setActiveTimeZone(activeBotData?.active_time?.timezone)
        setActiveWorkStart(activeBotData?.active_time?.start)
        setActiveWorkEnd(activeBotData?.active_time?.end)
        setActiveSendLimit(activeBotData?.day_send_limit)
        await setActiveSendInterval(activeBotData?.send_interval)
        setActiveToken(activeBotData?.token)
        setActiveProxy(activeBotData?.proxy)

        const botsData = await apis.getBots()
        setBots(botsData)
      }
    }

    makeRequest()
  }, [])

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormPayload>()

  const onSubmit: SubmitHandler<FormPayload> = async data => {
    const formattedData: formattedData = {
      description: activeDescription,
      send_interval: activeSendInterval,
      day_send_limit: activeSendLimit,
      token: activeToken,
      proxy: activeProxy,
    }

    if (data.timeZone || data.start || data.end) {
      formattedData.active_time = {
        timezone: activeTimeZone,
        start: activeWorkStart,
        end: activeWorkEnd,
      }
    }

    if (isCreatingBot) {
      await apis.createBot(formattedData)
      const botsData = await apis.getBots()
      await apis.startBot(botsData[botsData.length - 1]._id)
    } else {
      await apis.updateBot(activeBot?._id, formattedData)
    }

    const botsData = await apis.getBots()
    setBots(botsData)

    if (isCreatingBot) {
      setActiveBot(botsData[botsData.length - 1])
    }
    setIsCreatingBot(false)
  }

  const onCreateBtnClick = async () => {
    setActiveDescription("")
    setActiveTimeZone("")
    setActiveWorkStart("")
    setActiveWorkEnd("")
    setActiveSendLimit("")
    setActiveSendInterval("")
    setActiveSendIntervalFormatted("")
    setActiveToken("")
    setActiveProxy("")
    setIsCreatingBot(true)

    const newBot = {
      _id: "631cf28b72a61d43fdsaa1732bcd8",
      enabled: false,
      description: "Новый бот",
    }
    setBots([...bots, newBot])
    setActiveBot(newBot)
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }

  const navigate = useNavigate()

  const onDeleteClick = async () => {
    const returns = await apis.deleteBot(activeBot._id, true)

    const botsData = await apis.getBots()
    setBots(botsData)

    setActiveBot(botsData[0])
    await navigate(`/bots/${botsData[0]._id}`)

    const currentId = window.location.pathname.substring(6)
    const activeBotData = await apis.getBot(currentId)
    setActiveBot(activeBotData)

    setActiveDescription(activeBotData.description)
    setActiveTimeZone(activeBotData?.active_time?.timezone)
    setActiveWorkStart(activeBotData?.active_time?.start)
    setActiveWorkEnd(activeBotData?.active_time?.end)
    setActiveSendLimit(activeBotData?.day_send_limit)
    await setActiveSendInterval(activeBotData?.send_interval)
    setActiveToken(activeBotData?.token)
    setActiveProxy(activeBotData?.proxy)

    setIsConfirmationModalOpen(false)
  }

  const onBotClick = () => {
    setTimeout(async () => {
      setActiveDescription("")
      setActiveTimeZone("")
      setActiveWorkStart("")
      setActiveWorkEnd("")
      setActiveSendLimit("")
      setActiveSendInterval("")
      setActiveSendIntervalFormatted("")
      setActiveToken("")
      setActiveProxy("")

      const currentId = window.location.pathname.substring(6)
      const activeBotData = await apis.getBot(currentId)
      setActiveBot(activeBotData)

      const profileData = await apis.getBots()
      setBots(profileData)

      setActiveDescription(activeBotData.description)
      setActiveTimeZone(activeBotData?.active_time?.timezone)
      setActiveWorkStart(activeBotData?.active_time?.start)
      setActiveWorkEnd(activeBotData?.active_time?.end)
      setActiveSendLimit(activeBotData?.day_send_limit)
      await setActiveSendInterval(activeBotData?.send_interval)
      setActiveToken(activeBotData?.token)
      setActiveProxy(activeBotData?.proxy)
    }, 0)
  }

  const [activeModal, setActiveModal] = useState()

  const onServicesTokenClick = () => {
    setActiveModal(tokenServices)
    setIsServicesModalOpen(true)
  }

  const onServicesProxyClick = () => {
    setActiveModal(proxyServices)
    setIsServicesModalOpen(true)
  }

  // function convertInterval() {
  //   console.log(activeSendInterval)
  //   if (activeSendInterval) {
  //     switch (localStorage.getItem("intervalFormat")) {
  //       case "seconds":
  //         setActiveSendIntervalFormatted(seconds % 60)
  //         break
  //       case "minutes":
  //         setActiveSendIntervalFormatted(minutes % 60)
  //         break
  //       case "hours":
  //         setActiveSendIntervalFormatted(hours % 24)
  //         break
  //       case "days":
  //         setActiveSendIntervalFormatted(days)
  //         break
  //     }
  //   }
  // }

  // useEffect(() => {
  //   convertInterval()
  // }, [localStorage.getItem("intervalFormat")])
  //
  // const onSendIntervalChange = e => {
  //   setActiveSendInterval(e.target.value)
  //   setActiveSendIntervalFormatted(e.target.value)
  // }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title={"НАСТРОЙКИ БОТОВ"} />
          <p>
            Здесь вы можете увидеть свои боты, редактировать их и
            создавать новые
          </p>

          <div className={"bots-settings-content d-flex"}>
            <div className={"bots-settings-left"}>
              <div>
                <h4>Список ботов:</h4>
                <div
                  ref={scrollRef}
                  className={"bots-settings-wrapper"}
                >
                  {bots?.map((bot: any) => (
                    <Link
                      onClick={onBotClick}
                      to={`/bots/${bot._id}`}
                      key={bot._id}
                    >
                      <BotsSettingsBot
                        bot={bot}
                        activeBot={activeBot}
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
                onClick={() => setIsConfirmationModalOpen(true)}
              >
                <i className="bx bx-trash"></i> Удалить
              </button>
            </div>

            <form
              className={"bots-settings-right"}
              onSubmit={handleSubmit(onSubmit)}
            >
              {isCreatingBot && (
                <h4>Заполните данные для нового бота</h4>
              )}
              <div>
                <CardTitle className="mb-2">Название:</CardTitle>
                <div
                  className={
                    "bots-settings-input-wrapper d-flex w-100"
                  }
                >
                  <input
                    className={"topup-modal-input w-100"}
                    type="text"
                    placeholder="Название"
                    {...register("description", { required: true })}
                    value={activeDescription}
                    onChange={e => {
                      setActiveDescription(e.target.value)
                    }}
                  />
                </div>
                <p className={"form-error-text"}>
                  {errors.description && (
                    <p>Пожалуйста заполните название</p>
                  )}
                </p>
              </div>

              <div>
                <CardTitle className="mb-2">Токен:</CardTitle>
                <div
                  className={
                    "bots-settings-input-wrapper d-flex w-100"
                  }
                >
                  <div className={"w-100"}>
                    <input
                      className={"topup-modal-input w-100"}
                      type="text"
                      placeholder="Токен"
                      {...register("token", { required: true })}
                      value={activeToken}
                      onChange={e => {
                        setActiveToken(e.target.value)
                      }}
                    />

                    <p className={"form-error-text"}>
                      {errors.token && (
                        <p>Пожалуйста заполните токен</p>
                      )}
                    </p>
                  </div>

                  <div className={"bots-settings-btns take_token"}>
                    <button
                      className={
                        "btn btn-outline-primary d-block w-100 take_token"
                      }
                      onClick={() =>
                        setIsTokenModalOpen(!isTokenModalOpen)
                      }
                      type={"button"}
                    >
                      Получить токен
                    </button>
                    {/* <button
                      className={"bots-settings-services d-block"}
                      onClick={onServicesTokenClick}
                      type={"button"}
                    >
                      Сервисы для покупки токена
                    </button> */}
                  </div>
                </div>
              </div>

              <div>
                <CardTitle className="mb-2">Прокси:</CardTitle>
                <div
                  className={
                    "bots-settings-input-wrapper d-flex w-100"
                  }
                >
                  <div className={"w-100"}>
                    <input
                      className={"topup-modal-input w-100"}
                      type="text"
                      placeholder="http://логин:пароль@ip_адрес:порт/"
                      {...register("proxy", { required: true })}
                      value={activeProxy}
                      onChange={e => {
                        setActiveProxy(e.target.value)
                      }}
                    />

                    <p className={"form-error-text"}>
                      {errors.proxy && (
                        <p>Пожалуйста заполните прокси</p>
                      )}
                    </p>
                  </div>

                  <div className={"bots-settings-btns"}>
                    <button
                      className={
                        "btn btn-outline-primary d-block w-100"
                      }
                      onClick={() =>
                        setIsProxyModalOpen(!isProxyModalOpen)
                      }
                      type={"button"}
                    >
                      Получить прокси
                    </button>
                    <button
                      className={"bots-settings-services d-block"}
                      onClick={onServicesProxyClick}
                      type={"button"}
                    >
                      Сервисы для покупки прокси
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={
                  "bots-settings-inputs-wrapper d-flex justify-content-between"
                }
              >
                <div>
                  <CardTitle className="mb-2">
                    Часовая зона:
                  </CardTitle>
                  <input
                    className={"topup-modal-input w-100"}
                    type="text"
                    placeholder={"Екатеринбург(MSK+2)"}
                    {...register("timeZone")}
                    value={activeTimeZone}
                    onChange={e => setActiveTimeZone(e.target.value)}
                  />
                </div>

                <div>
                  <CardTitle className="mb-2">
                    Время работы:
                  </CardTitle>

                  <div className={"d-flex gap-2"}>
                    <input
                      className={"topup-modal-input w-100"}
                      type="text"
                      placeholder={"12:00"}
                      {...register("start")}
                      value={activeWorkStart}
                      onChange={e =>
                        setActiveWorkStart(e.target.value)
                      }
                    />
                    <input
                      className={"topup-modal-input w-100"}
                      type="text"
                      placeholder={"20:00"}
                      {...register("end")}
                      value={activeWorkEnd}
                      onChange={e => setActiveWorkEnd(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div
                className={
                  "bots-settings-inputs-wrapper d-flex justify-content-between"
                }
              >
                <div>
                  <CardTitle className="mb-2">
                    Минимальный интервал отправки 1 сообщения:
                  </CardTitle>

                  <div className={"d-flex gap-2"}>
                    <input
                      className={"topup-modal-input w-100"}
                      type="number"
                      placeholder={"10"}
                      {...register("send_interval")}
                      value={activeSendInterval}
                      onChange={e =>
                        setActiveSendInterval(e.target.value)
                      }
                    />
                    {/*<input*/}
                    {/*  className={"topup-modal-input w-100"}*/}
                    {/*  type="text"*/}
                    {/*  placeholder={"минут"}*/}
                    {/*/>*/}
                    <Select
                      className={"w-100"}
                      options={intervalFormat}
                      defaultValue={
                        intervalFormat.filter(formatItem => {
                          return (
                            formatItem.value ===
                            localStorage.getItem("intervalFormat")
                          )
                        })[0]
                      }
                      onChange={e =>
                        localStorage.setItem(
                          "intervalFormat",
                          e.value
                        )
                      }
                    />
                  </div>
                </div>

                <div>
                  <CardTitle className="mb-2">
                    Сообщений с бота:
                  </CardTitle>
                  <input
                    className={"topup-modal-input w-100"}
                    type="number"
                    min={"1"}
                    max={"50"}
                    placeholder={"10"}
                    {...register("day_send_limit")}
                    value={activeSendLimit}
                    onChange={e => setActiveSendLimit(e.target.value)}
                  />
                  <p className={"bots-settings-additional-text"}>
                    Макс. кол-во: 20 (рекомендуем 15)
                  </p>
                </div>
              </div>
              <div className={"bots-settings-btn"}>
                <button className={"btn btn-primary"} type={"submit"}>
                  {isCreatingBot ? "Добавить" : "Сохранить"}
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>

      {/* services modal */}
      <Modal
        isOpen={isServicesModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsServicesModalOpen(!isServicesModalOpen)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsServicesModalOpen(!isServicesModalOpen)
            }}
          >
            <h4 className={"topup-modal-name"}>
              {activeModal?.title}
            </h4>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <ol>
            {activeModal?.services.map((service: any, id: number) => (
              <li key={id}>
                <a href={service.link}>{service.name}</a>
              </li>
            ))}
          </ol>
        </div>
      </Modal>

      {/* get proxy modal */}
      <Modal
        isOpen={isProxyModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsProxyModalOpen(!isProxyModalOpen)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsProxyModalOpen(!isProxyModalOpen)
            }}
          >
            <h4 className={"topup-modal-name"}>Покупка прокси</h4>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <p>Стоимость прокси: 50 рублей</p>

          <div className={"topup-modal-footer"}>
            <button className={"btn btn-primary"}>К оплате</button>
          </div>
        </div>
      </Modal>

      {/* get token modal */}
      <Modal
        isOpen={isTokenModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsTokenModalOpen(!isTokenModalOpen)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsTokenModalOpen(!isTokenModalOpen)
            }}
          >
            <h4 className={"topup-modal-name"}>Получение Токена</h4>
          </ModalHeader>
        </div>
        <div className="modal-body">
          Для того чтобы получить токен. Вы должны перейти по этой
          ссылке: <br />
          <a
            href="https://oauth.vk.com/authorize?client_id=6121396&scope=135773406&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1"
            target={"_blank"}
          >
            <b>Получить токен VK</b>
          </a>
          <br />
          Cогласиться с разрешением от ВК. <br />
          Далее скопировать адресную строку из браузера и вставить её
          в поле "Токен" на нашем сайте.
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
export default BotsSettings

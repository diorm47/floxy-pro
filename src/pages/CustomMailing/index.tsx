import { Floxy } from "floxy-web-api"
import React, { useEffect, useState } from "react"
import { Container, Modal, ModalHeader } from "reactstrap"
import CustomSnackbar from "../../components/Common/costom-snackbar/costom-snackbar"
import "./CustomMailing.scss"
import CustomMailingItem from "./CustomMailingItem"

import delGreyBtn from "../../assets/images/del-grey-btn.svg"
const apis = new Floxy(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"
)
const CustomMailing = () => {
  const [isServersUpdated, setServersUpdated] = useState(false)
  const [events, setEvents] = useState()
  const [servers, setServers] = useState()
  const [crNameServer, setCrNameServer] = useState("")
  const [snackbarText, setSnackbarText] = useState("")
  const [createServerBlock, setCreateServer] = useState(false)
  const [secretKey, setSecretKey] = useState("")
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [isServersModalOpen, setIsServersModalOpen] = useState(false)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState(false)
  const [isClearModalOpen, setIsClearModalOpen] = useState(false)
  React.useEffect(() => {
    document.title = `Кастомные рассылки | Floxy.pro`
  }, [])

  useEffect(() => {
    const makeRequest = async () => {
      const eventsData = await apis.getEvents()
      const filteredEvents = eventsData.filter(event => {
        return event.event_name === "custom"
      })
      setEvents(filteredEvents)

      const serversData = await apis.getCustomServers()
      setServers(serversData)
    }

    makeRequest()
  }, [])
  const refreshServers = async () => {
    const serversData = await apis.getCustomServers()
    setServers(serversData)
  }

  const [fieldss, setFieldss] = useState([""])
  const handleChange = (i, event) => {
    const values = [...fieldss]
    values[i] = event.target.value
    const isValid = /^(\d{1,3}\.){0,3}\d{0,3}$/.test(values[i])
    if (isValid) {
      setFieldss(values)
    }
  }

  const handleAdd = () => {
    setFieldss([...fieldss, ""])
  }

  const handleRemove = i => {
    setFieldss(fieldss.filter((field, idx) => idx !== i))
  }

  const removeServer = async (server: { _id: string }) => {
    await setSnackbarText("Сервер удалён")
    await setShowSnackbar(true)
    await apis.deleteCustomServer(server._id)
    setTimeout(() => {
      setShowSnackbar(false)
    }, 2000)
    refreshServers()
  }
  const handleIPChange = (
    serverId: any,
    idx: number,
    value: string
  ) => {
    const isValid = /^(\d{1,3}\.){0,3}\d{0,3}$/.test(value)
    if (isValid) {
      setServers(
        servers.map((server: { _id: any; ips: any }) => {
          if (server._id === serverId) {
            const newIPs = [...server.ips]
            newIPs[idx] = value
            return { ...server, ips: newIPs }
          }
          return server
        })
      )
    }
    setServersUpdated(true)
  }

  const handleRemoveIP = (serverId: any, idx: number) => {
    // Удаляем IP-адрес
    setServers(
      servers.map(server => {
        if (server._id === serverId) {
          const newIPs = [...server.ips]
          newIPs.splice(idx, 1)
          return { ...server, ips: newIPs }
        }
        return server
      })
    )
  }
  const handleInputChange = (
    serverId: any,
    field: string,
    value: string
  ) => {
    // Обновляем значения полей сервера
    setServers(
      servers.map((server: { _id: any }) => {
        if (server._id === serverId) {
          return { ...server, [field]: value }
        }
        return server
      })
    )
    setServersUpdated(true)
  }
  const saveServers = async () => {
    const updatePromises = servers.map(
      (server: {
        _id: string
        description: any
        secret: any
        ips: any
      }) => {
        return apis.updateCustomServer(server._id, {
          description: server.description,
          secret: server.secret,
          ips: server.ips,
        })
      }
    )

    await Promise.all(updatePromises)
    await refreshServers()
    await setSnackbarText("Сервер обновлён")
    await setShowSnackbar(true)
    setTimeout(() => {
      setShowSnackbar(false)
    }, 2000)
  }
  const generateKey = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let key = ""

    for (let i = 0; i < 64; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length
      )
      key += characters[randomIndex]
    }

    setSecretKey(key)
  }
  const createServer = async () => {
    const server_data = {
      description: crNameServer,
      secret: secretKey,
      ips: fieldss,
    }
    await setSnackbarText("Сервер создан")
    await setShowSnackbar(true)
    await apis.createCustomServer(server_data)
    setTimeout(() => {
      setShowSnackbar(false)
    }, 2000)
  }
  const createServerClick = async () => {
    if (crNameServer || secretKey) {
      await createServer()
    }

    if (isServersUpdated) {
      await saveServers()
    }
    setCrNameServer("")
    setSecretKey("")
    setCreateServer(false)

    await refreshServers()
    setServersUpdated(false)
  }
  const generateServersKey = (serverId: any) => {
    setServersUpdated(true)
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let key = ""

    for (let i = 0; i < 64; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length
      )
      key += characters[randomIndex]
    }

    // Здесь обновляем ключ для определенного сервера
    setServers(
      servers.map(server => {
        if (server._id === serverId) {
          return { ...server, secret: key }
        }
        return server
      })
    )
  }
  const handleServerAddIP = (serverId: any) => {
    setServersUpdated(true)
    setServers(
      servers.map(server => {
        if (server._id === serverId) {
          return { ...server, ips: [...server.ips, ""] }
        }
        return server
      })
    )
  }

  const handleServerRemoveIP = (serverId: any, index: any) => {
    setServersUpdated(true)
    setServers(
      servers.map(server => {
        if (server._id === serverId) {
          return {
            ...server,
            ips: server.ips.filter((_, idx) => idx !== index),
          }
        }
        return server
      })
    )
  }
  return (
    <>
      <CustomSnackbar
        message={`${snackbarText} !`}
        type={"success"}
        show={showSnackbar}
      />
      <div className="page-content">
        <Container fluid>
          <div
            className={
              "bots-header d-flex align-items-center justify-content-between"
            }
          >
            <div>
              <h2 className={"main-title me-2"}>
                Кастомные рассылки ({events?.length})
              </h2>
              <p className="main_p">
                Здесь вы можете смотреть свои кастомные рассылки
              </p>
            </div>
            <button
              className={"btn btn-primary"}
              onClick={() => setIsServersModalOpen(true)}
            >
              Список серверов
            </button>
          </div>

          <div className={"customs-wrapper"}>
            {events?.map(
              (event: unknown, index: Key | null | undefined) => (
                <CustomMailingItem
                  key={index}
                  event={event}
                  setIsConfirmationModalOpen={
                    setIsConfirmationModalOpen
                  }
                  setIsClearModalOpen={setIsClearModalOpen}
                />
              )
            )}
          </div>
        </Container>
      </div>

      {/* servers modal */}
      <Modal
        isOpen={isServersModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsServersModalOpen(!isServersModalOpen)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsServersModalOpen(!isServersModalOpen)
            }}
          >
            <p className={"topup-modal-name"}>Список серверов</p>
          </ModalHeader>
        </div>

        <div className="modal-body">
          {servers?.map((server: any) => (
            <div key={server._id} className="create_server_block">
              <img
                className="delete_server_btn"
                src={delGreyBtn}
                onClick={() => removeServer(server)}
                alt=""
              />
              <div
                className={
                  "d-flex align-items-center create_server_input_1"
                }
              >
                <p>Название: </p>
                <input
                  type="text"
                  placeholder="название"
                  className="create_server_input "
                  defaultValue={server.description}
                  onChange={e =>
                    handleInputChange(
                      server._id,
                      "description",
                      e.target.value
                    )
                  }
                />
              </div>

              <div
                className={
                  "d-flex align-items-center create_server_input_2"
                }
              >
                <p>Секрет-ключ: </p>
                <input
                  type="text"
                  placeholder="ключ"
                  className="create_server_input"
                  value={server.secret}
                />
                <button
                  className={"btn clean-btn blue_col"}
                  type={"button"}
                  onClick={() => generateServersKey(server._id)}
                >
                  Сгенерировать
                </button>
              </div>

              <p className="m_top_25">
                IP-адреса, которым разрешено отправлять события:
              </p>
              <div className={"d-flex  create_server_input_3"}>
                {server.ips.map((field, idx) => {
                  return (
                    <div className="server_adress_input" key={idx}>
                      <input
                        placeholder="адресс"
                        type="text"
                        value={server.ips[idx] || ""}
                        onChange={e =>
                          handleIPChange(
                            server._id,
                            idx,
                            e.target.value
                          )
                        }
                      />

                      {server.ips.length > 1 && (
                        <img
                          className="del_img_serv_input"
                          src={delGreyBtn}
                          onClick={() =>
                            handleServerRemoveIP(server._id, idx)
                          }
                          alt=""
                        />
                      )}

                      <button
                        className={"btn clean-btn blue_col"}
                        type="button"
                        onClick={() => handleServerAddIP(server._id)}
                      >
                        Добавить
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {!createServerBlock || (
            <div className="create_server_block">
              <img
                className="delete_server_btn"
                src={delGreyBtn}
                onClick={() => setCreateServer(false)}
                alt=""
              />
              <div
                className={
                  "d-flex align-items-center create_server_input_1"
                }
              >
                <p>Название: </p>
                <input
                  type="text"
                  placeholder="название"
                  className="create_server_input"
                  value={crNameServer}
                  onChange={e => setCrNameServer(e.target.value)}
                />
              </div>

              <div
                className={
                  "d-flex align-items-center create_server_input_2"
                }
              >
                <p>Секрет-ключ: </p>
                <input
                  type="text"
                  placeholder="ключ"
                  value={secretKey}
                  className="create_server_input"
                />
                <button
                  className={"btn clean-btn blue_col"}
                  type={"button"}
                  onClick={generateKey}
                >
                  Сгенерировать
                </button>
              </div>

              <p className="ip_adresses">
                IP-адреса, которым разрешено отправлять события:
              </p>
              <div className={"d-flex create_server_input_3"}>
                {fieldss.map((field, idx) => {
                  return (
                    <div className="server_adress_input" key={idx}>
                      <input
                        placeholder="адресс"
                        type="text"
                        value={field || ""}
                        onChange={e => handleChange(idx, e)}
                      />
                      {fieldss.length > 1 ? (
                        <img
                          className="del_img_serv_input"
                          src={delGreyBtn}
                          onClick={() => handleRemove(idx)}
                          alt=""
                        />
                      ) : null}
                      <button
                        className={"btn clean-btn blue_col"}
                        type="button"
                        onClick={() => handleAdd()}
                      >
                        Добавить
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div>
            <input
              type="button"
              onClick={() => setCreateServer(true)}
              value="Создать новый сервер"
              className="bot-settings btn btn-outline-primary"
            />
          </div>

          <div className={"topup-modal-footer"}>
            <button
              className={"btn btn-primary"}
              onClick={createServerClick}
            >
              Сохранить
            </button>
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
            Удаляемые боты: <span>hello</span>
          </p>

          <div className={"topup-modal-footer"}>
            <button
              className={"btn btn-primary"}
              // onClick={onDeleteClick}
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
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsClearModalOpen(!isClearModalOpen)
            }}
          >
            <p className={"topup-modal-name"}>Очистить очередь?</p>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <div className={"topup-modal-footer"}>
            <button
              className={"btn btn-primary"}
              // onClick={onDeleteClick}
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
export default CustomMailing

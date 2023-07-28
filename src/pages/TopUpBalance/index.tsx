import { FC, useState } from "react"
import { Container, Modal, ModalHeader } from "reactstrap"
import { paymentServices, rates } from "./TopUpBalance.data"
import "./TopUpBalance.scss"
import React from "react"

const TopUpBalance = () => {
  const [topupModal, setTopupModal] = useState(false)
  const [rate, setRate] = useState(false)

  const [activeRate, setActiveRate] = useState()
  const [activeButton, setActiveButton] = useState()
  React.useEffect(() => {
    document.title = `Пополнение баланса | Floxy.pro`
  }, [])
  const onRateClick = (e: any) => {
    const filter = rates.filter(rate => {
      return e.target.innerText === rate.buttonText
    })

    setActiveRate(filter[0])
    setRate(true)
  }

  const onPaymentMethodClick = (e: any) => {
    e.target.classList.add("active")
  }


  return (
    <>
      <div className={"topup-navbar"}>
        <p>
          <span className={"topup-navbar-bold"}>
            Ваш тариф: <span>Pro</span>.
          </span>{" "}
          <span>
            Действует до: <span>12.12.2022</span>
          </span>
        </p>

        <div
          className={"topup-navbar-right d-flex align-items-center"}
        >
          <div className={"d-flex align-items-center"}>
            <p className={"topup-navbar-text"}>
              Ваш баланс прокси: <span>25000 Р</span>
            </p>
            <button
              className={"topup-navbar-btn"}
              onClick={() => setTopupModal(true)}
            >
              Пополнить
            </button>
          </div>

          <p className={"topup-navbar-text"}>
            Сумма оплат в месяц за прокси: <span>5000₽</span>
          </p>

          <p className={"topup-navbar-text"}>
            Баланса хватит на: <span>150 дней</span>
          </p>
        </div>
      </div>

      <div className="page-content" style={{ paddingTop: "24px" }}>
        <Container fluid>
          <h4 className="mb-0">Тарифы:</h4>
          <p>
            Здесь вы можете сменить тариф и оплатить все ваши прокси
          </p>

          <div className={"topup-wrapper d-flex align-items-start"}>
            {rates.map(rate => (
              <div className={"topup-item"} key={rate.id}>
                <div
                  className={"topup-header"}
                  style={{ background: rate.color }}
                >
                  <h4 className={"rate-title"}>{rate.title}</h4>
                </div>

                <div className={"topup-content"}>
                  <ul className={"topup-ul"}>
                    {rate.description.map(
                      (descriptionItem, descriptionId) => (
                        <li key={descriptionId}>{descriptionItem}</li>
                      )
                    )}
                  </ul>

                  <button
                    className={"btn btn-primary w-100"}
                    onClick={e => onRateClick(e)}
                  >
                    {rate.buttonText}
                  </button>

                  <p className={"rate-additional"}>
                    {rate?.additionalText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* rate modal */}
      <Modal
        isOpen={rate}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setRate(!rate)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setRate(!rate)
            }}
          >
            <h4 className={"topup-modal-name"}>Оплата тарифа</h4>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <p className={"topup-modal-title"}>
            Сумма к оплате: <span>{activeRate?.price} рублей</span>
          </p>
          <h5 className={"topup-modal-subtitle"}>
            Выберите способ оплаты:
          </h5>
          <div className={"topup-payment-modal"}>
            {paymentServices.map((paymentService, id) => (
              <button
                className={"topup-payment-btn"}
                key={id}
                onClick={e => onPaymentMethodClick(e)}
              >
                <img src={paymentService} alt="payment service" />
              </button>
            ))}
          </div>

          <div className={"topup-modal-footer"}>
            <button className={"btn btn-primary"}>Оплатить</button>
          </div>
        </div>
      </Modal>

      {/* topup modal */}
      <Modal
        isOpen={topupModal}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setTopupModal(!topupModal)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setTopupModal(!topupModal)
            }}
          >
            <h4 className={"topup-modal-name"}>
              Пополнение прокси-баланса
            </h4>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <p className={"topup-modal-title"}>
            Введите сумму пополнения:
          </p>
          <input
            className={"topup-modal-input"}
            type="number"
            placeholder={"сумма"}
          />
          <h5 className={"topup-modal-subtitle"}>
            Выберите способ оплаты:
          </h5>
          <div className={"topup-payment-modal"}>
            {paymentServices.map((paymentService, id) => (
              <button
                className={"topup-payment-btn"}
                key={id}
                onClick={e => onPaymentMethodClick(e)}
              >
                <img src={paymentService} alt="payment service" />
              </button>
            ))}
          </div>

          <div className={"topup-modal-footer"}>
            <button className={"btn btn-primary"}>Оплатить</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default TopUpBalance

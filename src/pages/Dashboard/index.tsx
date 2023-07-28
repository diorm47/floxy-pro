import classNames from "classnames"

import Cookies from "js-cookie"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

//i18n
import { withTranslation } from "react-i18next"

//redux
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap"
import "../../api/webApi"

// Images
import reportIcon1 from "../../assets/images/main/report1.svg"
import reportIcon2 from "../../assets/images/main/report2.svg"
import reportIcon3 from "../../assets/images/main/report3.svg"
import modalimage2 from "../../assets/images/product/img-4.png"

import modalimage1 from "../../assets/images/product/img-7.png"
import avatar1 from "../../assets/images/users/avatar-1.jpg"

import MiniWidget from "../Dashboard-saas/mini-widget"
import SalesAnalytics from "../Dashboard-saas/sales-analytics"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//import action
import { getChartsData as onGetChartsData } from "../../store/actions"
import LatestTranaction from "./LatestTranaction"
import MonthlyEarning from "./MonthlyEarning"

//import Charts
import StackedColumnChart from "./StackedColumnChart"

// Pages Components
import WelcomeComp from "./WelcomeComp"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"

const Dashboard = () => {
  const [modal, setModal] = useState(false)
  const [subscribeModal, setSubscribeModal] = useState(false)

  const [groups, setGroups] = useState()
  const [profile, setProfile] = useState()

  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "Сообщений отправлено сегодня",
      value: "1,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "Учитывая все группы и чаты",
    },
    {
      icon: "bx bx-archive-in",
      title: "Посещения групп",
      value: "$ 28,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "Учитывая все группы",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Подписки за всё время",
      value: "$ 16.2",
      badgeValue: "0%",
      color: "warning",
      desc: "Учитывая все группы и чаты",
    },
  ]

  useEffect(() => {
    const auth = async () => {
      let authRequest = await Api.auth(token)
      await Cookies.set("access_token", authRequest.token)

      let apis = new window.Api(authRequest.token)

      const groupsData = await apis.getGroups()
      const profileData = await apis.getProfile()

      const newDate = new Date()

      const handledUsersData = await apis.getHandledUsers(
        {
          onlyLength: false,
          event_id: "631f4c769310f40841319cd0",
        },
        ["sended"],
        {
          period: {
            start: new Date("2023-01-26T21:09:39.257Z"),
            end: newDate,
          },
          useFirstSendDate: false,
          pageIndex: 0,
          pageLength: 10000,
        }
      )

      console.log(handledUsersData)

      setGroups(groupsData)
      setProfile(profileData)
    }

    auth()
  }, [])

  const { chartsData } = useSelector((state: any) => ({
    chartsData: state.Dashboard.chartsData,
  }))

  const [periodData, setPeriodData] = useState([])
  const [periodType, setPeriodType] = useState("yearly")

  useEffect(() => {
    setPeriodData(chartsData)
  }, [chartsData])

  const onChangeChartPeriod = (pType: any) => {
    setPeriodType(pType)
    dispatch(onGetChartsData(pType))
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(onGetChartsData("yearly"))
  }, [dispatch])

  //meta title
  document.title = "Floxy - Админ панель"

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title={"Общая статистика"} />

          <div className="main-header-stats d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="mb-0">
                <img
                  src={avatar1}
                  alt=""
                  className="img-thumbnail rounded-circle main-header-avatar"
                />
              </div>

              <div className={"main-header-info"}>
                <p className={"gray-text"}>
                  Добро пожаловать в Floxy
                </p>
                <p className={"main-header-name"}>
                  {profile?.account?.Name}
                </p>
                <p className={"gray-text"}>Россия / Ижевск</p>
              </div>
            </div>

            <div
              className={
                "main-header-statistics d-flex align-items-center"
              }
            >
              <div
                className={"d-flex flex-column align-items-center"}
              >
                <p className={"gray-text mb-2"}>Кол-во чатов</p>
                <h5 className="font-size-15">48</h5>
              </div>

              <div
                className={"d-flex flex-column align-items-center"}
              >
                <p className={"gray-text mb-2"}>Кол-во групп</p>
                <h5 className="font-size-15">{groups?.length}</h5>
              </div>

              <div
                className={"d-flex flex-column align-items-center"}
              >
                <p className={"gray-text mb-2"}>
                  Сообщений за всё время
                </p>
                <h5 className="font-size-16">18</h5>
              </div>
            </div>

            <div>
              <button type="button" className="btn btn-primary ">
                <i className="bx bxs-cog align-middle me-2" />{" "}
                Настройки
              </button>
            </div>
          </div>

          <Row>
            <Col xl="5" className={"d-flex flex-column"}>
              <WelcomeComp />
              {/* sales anytics */}
              <SalesAnalytics dataColors='["--bs-primary", "--bs-success", "--bs-danger"]' />
              {/*<MonthlyEarning />*/}
            </Col>
            <Col xl="7">
              <Row>
                {/*mimi widgets */}
                <MiniWidget reports={reports} />
              </Row>

              <Card>
                <CardBody>
                  <div className="d-sm-flex flex-wrap">
                    <h4 className="card-title mb-4">
                      Статистика за период времени
                    </h4>
                    <div className="ms-auto">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <Link
                            to="#"
                            className={classNames(
                              { active: periodType === "weekly" },
                              "nav-link"
                            )}
                            onClick={() => {
                              onChangeChartPeriod("weekly")
                            }}
                            id="one_month"
                          >
                            Неделя
                          </Link>{" "}
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            className={classNames(
                              { active: periodType === "monthly" },
                              "nav-link"
                            )}
                            onClick={() => {
                              onChangeChartPeriod("monthly")
                            }}
                            id="one_month"
                          >
                            Месяц
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            className={classNames(
                              { active: periodType === "yearly" },
                              "nav-link"
                            )}
                            onClick={() => {
                              onChangeChartPeriod("yearly")
                            }}
                            id="one_month"
                          >
                            Год
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="clearfix"></div> */}
                  <StackedColumnChart
                    periodData={periodData}
                    dataColors='["--bs-primary", "--bs-warning", "--bs-success"]'
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/*<Row>*/}
          {/*  <Col xl="4">*/}
          {/*    <SocialSource />*/}
          {/*  </Col>*/}
          {/*  <Col xl="4">*/}
          {/*    <ActivityComp />*/}
          {/*  </Col>*/}

          {/*  <Col xl="4">*/}
          {/*    <TopCities />*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          <Row>
            <Col lg="12">
              <LatestTranaction />
            </Col>
          </Row>
        </Container>
      </div>

      {/* subscribe ModalHeader */}
      <Modal
        isOpen={subscribeModal}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setSubscribeModal(!subscribeModal)
        }}
      >
        <div>
          <ModalHeader
            className="border-bottom-0"
            toggle={() => {
              setSubscribeModal(!subscribeModal)
            }}
          ></ModalHeader>
        </div>
        <div className="modal-body">
          <div className="text-center mb-4">
            <div className="avatar-md mx-auto mb-4">
              <div className="avatar-title bg-light  rounded-circle text-primary h1">
                <i className="mdi mdi-email-open"></i>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <h4 className="text-primary">Subscribe !</h4>
                <p className="text-muted font-size-14 mb-4">
                  Subscribe our newletter and get notification to stay
                  update.
                </p>

                <div className="input-group rounded bg-light">
                  <Input
                    type="email"
                    className="form-control bg-transparent border-0"
                    placeholder="Enter Email address"
                  />
                  <Button
                    color="primary"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="bx bxs-paper-plane"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={() => {
          setModal(!modal)
        }}
      >
        <div>
          <ModalHeader
            toggle={() => {
              setModal(!modal)
            }}
          >
            Order Details
          </ModalHeader>
          <ModalBody>
            <p className="mb-2">
              Product id:{" "}
              <span className="text-primary">#SK2540</span>
            </p>
            <p className="mb-4">
              Billing Name:{" "}
              <span className="text-primary">Neal Matthews</span>
            </p>

            <div className="table-responsive">
              <Table className="table table-centered table-nowrap">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src={modalimage1}
                          alt=""
                          className="avatar-sm"
                        />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">
                          Wireless Headphone (Black)
                        </h5>
                        <p className="text-muted mb-0">$ 225 x 1</p>
                      </div>
                    </td>
                    <td>$ 255</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src={modalimage2}
                          alt=""
                          className="avatar-sm"
                        />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">
                          Hoodie (Blue)
                        </h5>
                        <p className="text-muted mb-0">$ 145 x 1</p>
                      </div>
                    </td>
                    <td>$ 145</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-end">Sub Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-end">Shipping:</h6>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-end">Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setModal(!modal)
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}

export default withTranslation()(Dashboard)

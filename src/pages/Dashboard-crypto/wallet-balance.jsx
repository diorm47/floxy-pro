import React, { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"
import { Link } from "react-router-dom"
import { Card, CardBody, Col, Row } from "reactstrap"

//actions
import { getWalletbalanceData } from "../../store/actions"

//redux
import { useDispatch, useSelector } from "react-redux"

import getChartColorsArray from "../../components/Common/ChartsDynamicColor"

const WalletBalance = ({ dataColors }) => {
  const dispatch = useDispatch()

  const { walletbalanceData } = useSelector(state => ({
    walletbalanceData: state.DashboardCrypto.walletbalanceData,
  }))

  const walletBalanceChartColors = getChartColorsArray(dataColors)

  const series = walletbalanceData.chartdata || []
  const availablebalance = walletbalanceData.availablebalance
  const income = walletbalanceData.income
  const Expense = walletbalanceData.Expense
  const Ethereumvalue = walletbalanceData.Ethereum
  const Bitcoinvalue = walletbalanceData.Bitcoin
  const Litecoinvalue = walletbalanceData.Litecoin
  const [seletedMonth, setSeletedMonth] = useState("march")

  /*
call api action to receive data
*/
  useEffect(() => {
    dispatch(getWalletbalanceData("jan"))
  }, [dispatch])

  const onChangeMonth = month => {
    setSeletedMonth(month)
    dispatch(getWalletbalanceData(month))
  }

  const walletOptions = {
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "35%",
          background: "transparent",
          image: void 0,
        },
        track: {
          show: !0,
          startAngle: void 0,
          endAngle: void 0,
          background: "#f2f2f2",
          strokeWidth: "97%",
          opacity: 1,
          margin: 12,
          dropShadow: {
            enabled: !1,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        dataLabels: {
          name: {
            show: !0,
            fontSize: "16px",
            fontWeight: 600,
            offsetY: -10,
          },
          value: {
            show: !0,
            fontSize: "14px",
            offsetY: 4,
            formatter: function (e) {
              return e + "%"
            },
          },
          total: {
            show: !0,
            label: "Total",
            color: "#373d3f",
            fontSize: "16px",
            fontFamily: void 0,
            fontWeight: 600,
            formatter: function (e) {
              return (
                e.globals.seriesTotals.reduce(function (e, t) {
                  return e + t
                }, 0) + "%"
              )
            },
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    colors: walletBalanceChartColors,
    labels: ["Ethereum", "Bitcoin", "Ethereum"],
    legend: { show: !1 },
  }

  return (
    <>
      <Col xl="8">
        <Card>
          <CardBody>
            <div className="float-end">
              <select
                value={seletedMonth}
                className="form-select form-select-sm ms-2"
                onChange={e => {
                  onChangeMonth(e.target.value)
                }}
              >
                <option value="march">March</option>
                <option value="feb">February</option>
                <option value="jan">January</option>
                <option value="dec">December</option>
              </select>
            </div>
            <h4 className="card-title mb-3">Wallet Balance</h4>

            <Row>
              <Col lg="4">
                <div className="mt-4">
                  <p>Available Balance</p>
                  <h4>$ {availablebalance}</h4>

                  <p className="text-muted mb-4">
                    {" "}
                    + 0.0012.23 ( 0.2 % ){" "}
                    <i className="mdi mdi-arrow-up ms-1 text-success" />
                  </p>

                  <Row>
                    <Col xs="6">
                      <div>
                        <p className="mb-2">Income</p>
                        <h5>$ {income}</h5>
                      </div>
                    </Col>
                    <Col xs="6">
                      <div>
                        <p className="mb-2">Expense</p>
                        <h5>$ {Expense}</h5>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary btn-sm">
                      View more{" "}
                      <i className="mdi mdi-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg="4" sm="6">
                <div>
                  <div id="wallet-balance-chart">
                    <ReactApexChart
                      options={walletOptions}
                      series={series}
                      type="radialBar"
                      height={300}
                      className="apex-charts"
                    />
                  </div>
                </div>
              </Col>

              <Col lg="4" sm="6" className="align-self-center">
                <div>
                  <p className="mb-2">
                    <i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary" />{" "}
                    Ethereum
                  </p>
                  <h5>
                    {Ethereumvalue ? Ethereumvalue["ETH"] : ""} ETH ={" "}
                    <span className="text-muted font-size-14">
                      $ {Ethereumvalue ? Ethereumvalue["Dollar"] : ""}
                    </span>
                  </h5>
                </div>

                <div className="mt-4 pt-2">
                  <p className="mb-2">
                    <i className="mdi mdi-circle align-middle font-size-10 me-2 text-warning" />{" "}
                    Bitcoin
                  </p>
                  <h5>
                    {Bitcoinvalue ? Bitcoinvalue["BTC"] : ""} BTC ={" "}
                    <span className="text-muted font-size-14">
                      $ {Bitcoinvalue ? Bitcoinvalue["Dollar"] : ""}
                    </span>
                  </h5>
                </div>

                <div className="mt-4 pt-2">
                  <p className="mb-2">
                    <i className="mdi mdi-circle align-middle font-size-10 me-2 text-info" />{" "}
                    Litecoin
                  </p>
                  <h5>
                    {Litecoinvalue ? Litecoinvalue["LTC"] : ""} LTC ={" "}
                    <span className="text-muted font-size-14">
                      $ {Litecoinvalue ? Litecoinvalue["Dollar"] : ""}
                    </span>
                  </h5>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default WalletBalance

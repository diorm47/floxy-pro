import classnames from "classnames"
import PropTypes from "prop-types"
import React, { useEffect, useMemo, useState } from "react"
import { connect } from "react-redux"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"
import withRouter from "../../../components/Common/withRouter"

import {
  Coin,
  Pdate,
  Status,
  Type,
  Value,
  ValueinUSD,
} from "./CryptoCol"

import TableContainer from "../../../components/Common/TableContainer"

//Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import "/src/assets/scss/datatables.scss"

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb"
import { getCryptoOrders } from "/src/store/crypto/actions"

const CryptoOrders = props => {
  //meta title
  document.title =
    "Orders | Skote - Vite React Admin & Dashboard Template"

  const { orders, onGetOrders } = props
  const [activeTab, setActiveTab] = useState("1")

  useEffect(() => {
    onGetOrders()
  }, [onGetOrders])

  const handleChange = date => {
    // setStartDate(date)
  }

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  // Table Data
  const productData = [
    {
      id: 1,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      value: "1.00952 BTC",
      valueInUsd: "$ 9067.62",
      status: "Completed",
    },
    {
      id: 2,
      pdate: "04 Mar, 2020",
      type: "Sell",
      coin: "Ethereum",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Completed",
    },
    {
      id: 3,
      pdate: "04 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      value: "0.00321 BTC",
      valueInUsd: "$ 1802.62",
      status: "Pending",
    },
    {
      id: 4,
      pdate: "05 Mar, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
      status: "Completed",
    },
    {
      id: 5,
      pdate: "06 Mar, 2020",
      type: "Buy",
      coin: "Ethereum",
      value: "1.04321 ETH",
      valueInUsd: "$ 9423.73",
      status: "Failed",
    },
    {
      id: 6,
      pdate: "07 Mar, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Completed",
    },
    {
      id: 7,
      pdate: "07 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      value: "1.00952 BTC",
      valueInUsd: "$ 9067.62",
      status: "Pending",
    },
    {
      id: 8,
      pdate: "08 Mar, 2020",
      type: "Sell",
      coin: "Ethereum",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Completed",
    },
    {
      id: 9,
      pdate: "09 Mar, 2020",
      type: "Sell",
      coin: "Litecoin",
      value: "1.00952 LTC",
      valueInUsd: "$ 9067.62",
      status: "Completed",
    },
    {
      id: 10,
      pdate: "10 Mar, 2020",
      type: "Buy",
      coin: "Ethereum",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Pending",
    },
    {
      id: 11,
      pdate: "11 Mar, 2020",
      type: "Buy",
      coin: "Ethereum",
      value: "1.04321 ETH",
      valueInUsd: "$ 9423.73",
      status: "Completed",
    },
    {
      id: 12,
      pdate: "12 Mar, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Completed",
    },
    {
      id: 13,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      value: "1.00952 BTC",
      valueInUsd: "$ 9067.62",
      status: "Completed",
    },
    {
      id: 14,
      pdate: "04 Mar, 2020",
      type: "Sell",
      coin: "Ethereum",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Completed",
    },
    {
      id: 15,
      pdate: "04 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      value: "0.00321 BTC",
      valueInUsd: "$ 1802.62",
      status: "Pending",
    },
    {
      id: 16,
      pdate: "05 Mar, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
      status: "Completed",
    },
    {
      id: 17,
      pdate: "06 Mar, 2020",
      type: "Buy",
      coin: "Ethereum",
      value: "1.04321 ETH",
      valueInUsd: "$ 9423.73",
      status: "Failed",
    },
    {
      id: 18,
      pdate: "07 Mar, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Completed",
    },
    {
      id: 19,
      pdate: "07 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      value: "1.00952 BTC",
      valueInUsd: "$ 9067.62",
      status: "Pending",
    },
    {
      id: 20,
      pdate: "08 Mar, 2020",
      type: "Sell",
      coin: "Ethereum",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Completed",
    },
    {
      id: 21,
      pdate: "09 Mar, 2020",
      type: "Sell",
      coin: "Litecoin",
      value: "1.00952 LTC",
      valueInUsd: "$ 9067.62",
      status: "Completed",
    },
    {
      id: 22,
      pdate: "10 Mar, 2020",
      type: "Buy",
      coin: "Ethereum",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Pending",
    },
    {
      id: 23,
      pdate: "11 Mar, 2020",
      type: "Buy",
      coin: "Ethereum",
      value: "1.04321 ETH",
      valueInUsd: "$ 9423.73",
      status: "Completed",
    },
    {
      id: 24,
      pdate: "12 Mar, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.00413 ETH",
      valueInUsd: "$ 2123.01",
      status: "Completed",
    },
  ]

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "pdate",
        filterable: true,
        Cell: cellProps => {
          return <Pdate {...cellProps} />
        },
      },
      {
        Header: "Type",
        accessor: "type",
        filterable: true,
        Cell: cellProps => {
          return <Type {...cellProps} />
        },
      },
      {
        Header: "Coin",
        accessor: "coin",
        filterable: true,
        Cell: cellProps => {
          return <Coin {...cellProps} />
        },
      },
      {
        Header: "Value",
        accessor: "value",
        filterable: true,
        Cell: cellProps => {
          return <Value {...cellProps} />
        },
      },
      {
        Header: "Value in USD",
        accessor: "valueInUsd",
        filterable: true,
        Cell: cellProps => {
          return <ValueinUSD {...cellProps} />
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: cellProps => {
          return <Status {...cellProps} />
        },
      },
    ],
    []
  )

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Crypto" breadcrumbItem="Orders" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-3">Orders</h4>

                  <ul
                    className="nav nav-tabs nav-tabs-custom"
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggleTab("1")
                        }}
                      >
                        All Orders
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggleTab("2")
                        }}
                      >
                        Processing
                      </NavLink>
                    </NavItem>
                  </ul>

                  <TabContent activeTab={activeTab} className="p-3">
                    <TabPane tabId="1" id="all-order">
                      <Form>
                        <Row className="mb-4">
                          <div className="col-xl col-sm-6">
                            <FormGroup className="mt-3 mb-0">
                              <Label>Date :</Label>
                              <DatePicker
                                onChange={handleChange}
                                className="form-control"
                                placeholderText="Select date"
                              />
                            </FormGroup>
                          </div>

                          <div className="col-xl col-sm-6">
                            <FormGroup className="mt-3 mb-0">
                              <Label>Coin</Label>
                              <select className="form-control select2-search-disable">
                                <option value="BTC" defaultValue>
                                  Bitcoin
                                </option>
                                <option value="ETH">Ethereum</option>
                                <option value="LTC">litecoin</option>
                              </select>
                            </FormGroup>
                          </div>

                          <div className="col-xl col-sm-6">
                            <FormGroup className="mt-3 mb-0">
                              <Label>Type</Label>
                              <select className="form-control select2-search-disable">
                                <option value="BU" defaultValue>
                                  Buy
                                </option>
                                <option value="SE">Sell</option>
                              </select>
                            </FormGroup>
                          </div>

                          <div className="col-xl col-sm-6">
                            <FormGroup className="mt-3 mb-0">
                              <Label>Status</Label>
                              <select className="form-control select2-search-disable">
                                <option value="CO" defaultValue>
                                  Completed
                                </option>
                                <option value="PE">Pending</option>
                              </select>
                            </FormGroup>
                          </div>

                          <div className="col-xl col-sm-6 align-self-end">
                            <div className="mb-3">
                              <Button
                                type="button"
                                color="primary"
                                className="w-md"
                              >
                                Filter
                              </Button>
                            </div>
                          </div>
                        </Row>
                      </Form>

                      <TableContainer
                        columns={columns}
                        data={productData}
                        isGlobalFilter={false}
                        isAddOptions={false}
                        customPageSize={10}
                      />
                    </TabPane>
                    <TabPane tabId="2" id="processing">
                      <div>
                        <TableContainer
                          columns={columns}
                          data={productData}
                          isGlobalFilter={false}
                          isAddOptions={false}
                          customPageSize={10}
                        />
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

CryptoOrders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
}

const mapStateToProps = ({ crypto }) => ({
  orders: crypto.orders,
})

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getCryptoOrders()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CryptoOrders))

import { isEmpty } from "lodash"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import withRouter from "../../../components/Common/withRouter"
import "/src/assets/scss/datatables.scss"

//Import Breadcrumb
import WalletActivities from "./walletActivities"
import WalletOverView from "./walletOverView"
import WalletStats from "./walletStats"
import Breadcrumbs from "/src/components/Common/Breadcrumb"
import { getWallet as onGetWallet } from "/src/store/actions"

//redux
import { useDispatch, useSelector } from "react-redux"

const CryptoWallet = () => {
  //meta title
  document.title =
    "Wallet | Skote - Vite React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { wallet } = useSelector(state => ({
    wallet: state.crypto.wallet,
  }))

  const [isMenu, setIsMenu] = useState(false)
  const [activeTab, setActiveTab] = useState("1")

  useEffect(() => {
    dispatch(onGetWallet())
  }, [onGetWallet])

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Crypto" breadcrumbItem="Wallet" />
          {!isEmpty(wallet) && (
            <Row>
              <Col xl="4">
                <WalletStats
                  wallet={wallet}
                  isMenu={isMenu}
                  toggleMenu={toggleMenu}
                />
              </Col>
              <Col xl="8">
                <Row>
                  <Col sm="4">
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="me-3 align-self-center">
                            <i className="mdi mdi-bitcoin h2 text-warning mb-0" />
                          </div>
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">
                              Bitcoin Wallet
                            </p>
                            <h5 className="mb-0">
                              1.02356 BTC{" "}
                              <span className="font-size-14 text-muted">
                                = $ 9148.00
                              </span>
                            </h5>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="me-3 align-self-center">
                            <i className="mdi mdi-ethereum h2 text-primary mb-0" />
                          </div>
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">
                              Ethereum Wallet
                            </p>
                            <h5 className="mb-0">
                              0.04121 ETH{" "}
                              <span className="font-size-14 text-muted">
                                = $ 8235.00
                              </span>
                            </h5>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="me-3 align-self-center">
                            <i className="mdi mdi-litecoin h2 text-info mb-0" />
                          </div>
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">
                              litecoin Wallet
                            </p>
                            <h5 className="mb-0">
                              0.00356 BTC{" "}
                              <span className="font-size-14 text-muted">
                                = $ 4721.00
                              </span>
                            </h5>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <WalletOverView dataColors='["--bs-warning", "--bs-primary", "--bs-info"]' />
              </Col>
            </Row>
          )}
          <Row>
            <Col lg="12">
              {!isEmpty(wallet["walletHistory"]) && (
                <WalletActivities
                  walletHistory={wallet["walletHistory"]}
                  activeTab={activeTab}
                  toggleTab={toggleTab}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

CryptoWallet.propTypes = {
  wallet: PropTypes.any,
  onGetWallet: PropTypes.func,
}

export default withRouter(CryptoWallet)

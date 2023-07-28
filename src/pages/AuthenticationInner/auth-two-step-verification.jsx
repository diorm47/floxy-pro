import React from "react"

import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap"

// import images
import logodark from "../../assets/images/full-logo-dark.svg"
import logolight from "../../assets/images/full-logo-light.svg"

const TwostepVerification = () => {
  //meta title
  document.title =
    "Two Step Verification | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5 text-muted">
                <Link to="dashboard" className="d-block auth-logo">
                  <img
                    src={logodark}
                    alt=""
                    height="20"
                    className="auth-logo-dark mx-auto"
                  />
                  <img
                    src={logolight}
                    alt=""
                    height="20"
                    className="auth-logo-light mx-auto"
                  />
                </Link>
                <p className="mt-3">
                  React Admin & Dashboard Template
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody>
                  <div className="p-2">
                    <div className="text-center">
                      <div className="avatar-md mx-auto">
                        <div className="avatar-title rounded-circle bg-light">
                          <i className="bx bxs-envelope h1 mb-0 text-primary"></i>
                        </div>
                      </div>
                      <div className="p-2 mt-4">
                        <h4>Verify your email</h4>
                        <p className="mb-5">
                          Please enter the 4 digit code sent to{" "}
                          <span className="fw-semibold">
                            example@abc.com
                          </span>
                        </p>

                        <Form>
                          <Row>
                            <Col className="col-3">
                              <div className="mb-3">
                                <Label
                                  htmlFor="digit1-input"
                                  className="visually-hidden"
                                >
                                  Dight 1
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control form-control-lg text-center two-step"
                                  maxLength="1"
                                  data-value="1"
                                  id="digit1-input"
                                />
                              </div>
                            </Col>

                            <Col>
                              <div className="mb-3">
                                <Label
                                  htmlFor="digit2-input"
                                  className="visually-hidden"
                                >
                                  Dight 2
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control form-control-lg text-center two-step"
                                  maxLength="1"
                                  data-value="2"
                                  id="digit2-input"
                                />
                              </div>
                            </Col>

                            <Col>
                              <div className="mb-3">
                                <Label
                                  htmlFor="digit3-input"
                                  className="visually-hidden"
                                >
                                  Dight 3
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control form-control-lg text-center two-step"
                                  maxLength="1"
                                  data-value="3"
                                  id="digit3-input"
                                />
                              </div>
                            </Col>

                            <Col>
                              <div className="mb-3">
                                <Label
                                  htmlFor="digit4-input"
                                  className="visually-hidden"
                                >
                                  Dight 4
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control form-control-lg text-center two-step"
                                  maxLength="1"
                                  data-value="4"
                                  id="digit4-input"
                                />
                              </div>
                            </Col>
                          </Row>
                        </Form>

                        <div className="mt-4">
                          <Link
                            to="dashboard"
                            className="btn btn-success w-md"
                          >
                            Confirm
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Did&apos;t receive a code ?{" "}
                  <a href="#" className="fw-medium text-primary">
                    {" "}
                    Resend{" "}
                  </a>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger"></i> by
                  Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default TwostepVerification

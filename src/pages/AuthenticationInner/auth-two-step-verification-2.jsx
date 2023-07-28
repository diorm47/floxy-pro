import React from "react"
import { Link } from "react-router-dom"
import { Col, Form, Input, Label, Row } from "reactstrap"

// import images
import logodark from "../../assets/images/full-logo-dark.svg"
import logolight from "../../assets/images/full-logo-light.svg"
import CarouselPage from "./CarouselPage"

const TwostepVerification2 = () => {
  //meta title
  document.title =
    "Two Step Verification 2 | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <CarouselPage />

            <Col xl={3}>
              <div className="auth-full-page-content p-md-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5">
                      <Link
                        to="dashboard"
                        className="d-block auth-logo"
                      >
                        <img
                          src={logodark}
                          alt=""
                          height="18"
                          className="logo-dark-element"
                        />
                        <img
                          src={logolight}
                          alt=""
                          height="18"
                          className="logo-light-element"
                        />
                      </Link>
                    </div>
                    <div className="my-auto">
                      <div className="text-center">
                        <div className="avatar-md mx-auto">
                          <div className="avatar-title rounded-circle bg-light">
                            <i className="bx bxs-envelope h1 mb-0 text-primary"></i>
                          </div>
                        </div>
                        <div className="p-2 mt-4">
                          <h4>Verify your email</h4>
                          <p>
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

                              <Col className="col-3">
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

                              <Col className="col-3">
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

                              <Col className="col-3">
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
                              to="/dashboard"
                              className="btn btn-success w-md"
                            >
                              Confirm
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()} Skote. Crafted
                        with{" "}
                        <i className="mdi mdi-heart text-danger"></i>{" "}
                        by Themesbrand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwostepVerification2

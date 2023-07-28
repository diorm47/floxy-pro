import React from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"

// import images
import logodark from "../../assets/images/full-logo-dark.svg"
import logolight from "../../assets/images/full-logo-light.svg"
import CarouselPage from "./CarouselPage"

const ConfirmMail2 = () => {
  //meta title
  document.title =
    "Confirm Mail 2 | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div>
        <Container fluid className="p-0">
          <Row className="row g-0">
            <CarouselPage />

            <Col xl={3}>
              <div className="auth-full-page-content p-md-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5">
                      <a href="/" className="d-block auth-logo">
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
                      </a>
                    </div>
                    <div className="my-auto">
                      <div className="text-center">
                        <div className="avatar-md mx-auto">
                          <div className="avatar-title rounded-circle bg-light">
                            <i className="bx bx-mail-send h1 mb-0 text-primary"></i>
                          </div>
                        </div>
                        <div className="p-2 mt-4">
                          <h4>Success !</h4>
                          <p className="text-muted">
                            At vero eos et accusamus et iusto odio
                            dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque
                            corrupti quos dolores et
                          </p>
                          <div className="mt-4">
                            <Link
                              to="dashboard"
                              className="btn btn-success"
                            >
                              Back to Home
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
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ConfirmMail2

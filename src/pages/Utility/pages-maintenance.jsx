import React from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import logodark from "../../assets/images/full-logo-dark.svg"
import logolight from "../../assets/images/full-logo-light.svg"

//Import Images
import maintenance from "../../assets/images/maintenance.svg"

//Import Cards
import CardMaintenance from "./card-maintenance"

const PagesMaintenance = () => {
  //meta title
  document.title =
    "Maintenance | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <section className="my-5 pt-sm-5">
        <Container>
          <Row>
            <Col xs="12" className="text-center">
              <div className="home-wrapper">
                <div className="mb-5">
                  <Link to="/dashboard" className="d-block auth-logo">
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

                <Row className="justify-content-center">
                  <Col sm={4}>
                    <div className="maintenance-img">
                      <img
                        src={maintenance}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                </Row>
                <h3 className="mt-5">Site is Under Maintenance</h3>
                <p>Please check back in sometime.</p>

                <Row>
                  <CardMaintenance>
                    <i className="bx bx-broadcast mb-4 h1 text-primary" />
                    <h5 className="font-size-15 text-uppercase">
                      Why is the Site Down?
                    </h5>
                    <p className="text-muted mb-0">
                      There are many variations of passages of Lorem
                      Ipsum available, but the majority have suffered
                      alteration.
                    </p>
                  </CardMaintenance>

                  <CardMaintenance>
                    <i className="bx bx-time-five mb-4 h1 text-primary" />
                    <h5 className="font-size-15 text-uppercase">
                      What is the Downtime?
                    </h5>
                    <p className="text-muted mb-0">
                      Contrary to popular belief, Lorem Ipsum is not
                      simply random text. It has roots in a piece of
                      classNameical.
                    </p>
                  </CardMaintenance>

                  <CardMaintenance>
                    <i className="bx bx-envelope mb-4 h1 text-primary" />
                    <h5 className="font-size-15 text-uppercase">
                      Do you need Support?
                    </h5>
                    <p className="text-muted mb-0">
                      If you are going to use a passage of Lorem
                      Ipsum, you need to be sure there isn&apos;t
                      anything embar..
                      <Link
                        to="mailto:no-reply@domain.com"
                        className="text-decoration-underline"
                      >
                        no-reply@domain.com
                      </Link>
                    </p>
                  </CardMaintenance>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default PagesMaintenance

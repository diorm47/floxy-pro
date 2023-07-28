import React from "react"

//Import Countdown
import Countdown from "react-countdown"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import maintanence from "../../assets/images/coming-soon.svg"

//Import Images
import logodark from "../../assets/images/full-logo-dark.svg"
import logolight from "../../assets/images/full-logo-light.svg"

const PagesComingsoon = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>
    } else {
      return (
        <>
          <div className="coming-box">
            {days} <span>Days</span>
          </div>{" "}
          <div className="coming-box">
            {hours} <span>Hours</span>
          </div>{" "}
          <div className="coming-box">
            {minutes} <span>Minutes</span>
          </div>{" "}
          <div className="coming-box">
            {seconds} <span>Seconds</span>
          </div>
        </>
      )
    }
  }

  //meta title
  document.title =
    "Coming Soon | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-white">
          <i className="fas fa-home h2" />
        </Link>
      </div>

      <div className="my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center">
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
                <Row className="justify-content-center mt-5">
                  <Col sm="4">
                    <div className="maintenance-img">
                      <img
                        src={maintanence}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                </Row>
                <h4 className="mt-5">
                  Let&apos;s get started with Skote
                </h4>
                <p className="text-muted">
                  It will be as simple as Occidental in fact it will
                  be Occidental.
                </p>

                <Row className="justify-content-center mt-5">
                  <Col md="8">
                    <div className="counter-number">
                      <Countdown
                        date="2023/12/31"
                        renderer={renderer}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default PagesComingsoon

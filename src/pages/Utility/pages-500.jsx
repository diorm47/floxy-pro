import React from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"

//Import Images
import error from "../../assets/images/error-img.png"

const Pages500 = () => {
  //meta title
  document.title =
    "500 Error Page | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1 className="display-2 fw-medium">
                  5
                  <i className="bx bx-buoy bx-spin text-primary display-3" />
                  0
                </h1>
                <h4 className="text-uppercase">
                  Internal Server Error
                </h4>
                <div className="mt-5 text-center">
                  <Link className="btn btn-primary " to="/dashboard">
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="8" xl="6">
              <div>
                <img src={error} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Pages500

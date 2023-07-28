import React from "react"
import { Card, CardBody, Col, Container, Row } from "reactstrap"

//import images
import avatar from "../../../assets/images/users/avatar-6.jpg"
import AboutUs from "./AboutUs"
import Sidebar from "./Sidebar"

const CandidateOverview = () => {
  document.title =
    "Candidate Overview | Skote - Vite React Admin & Dashboard Template"
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card className="mx-n4 mt-n4 bg-info bg-soft">
                <CardBody>
                  <div className="text-center mb-4">
                    <img
                      src={avatar}
                      alt=""
                      className="avatar-md rounded-circle mx-auto d-block"
                    />
                    <h5 className="mt-3 mb-1">Steven Franklin</h5>
                    <p className="text-muted mb-3">UI/UX Designer</p>
                    <div className="mx-auto">
                      <span className="badge me-1 text-bg-info">
                        Freelance
                      </span>
                      <span className="badge me-1 text-bg-success">
                        Active
                      </span>
                      <span className="badge me-1 text-bg-warning">
                        Adobe XD
                      </span>
                      <span className="badge me-1 text-bg-warning">
                        Figma
                      </span>
                      <span className="badge text-bg-warning">
                        Sketch
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <ul className="list-unstyled hstack gap-3 mb-0 flex-grow-1">
                      <li>
                        <i className="bx bx-map align-middle"></i>{" "}
                        California
                      </li>
                      <li>
                        <i className="bx bx-money align-middle"></i>{" "}
                        $87 / hrs
                      </li>
                      <li>
                        <i className="bx bx-time align-middle"></i> 5
                        days working
                      </li>
                    </ul>
                    <div className="hstack gap-2">
                      <button
                        type="button"
                        className="btn btn-primary"
                      >
                        Download CV{" "}
                        <i className="bx bx-download align-baseline ms-1"></i>
                      </button>
                      <button type="button" className="btn btn-light">
                        <i className="bx bx-bookmark align-baseline"></i>
                      </button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Sidebar />
            <AboutUs />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CandidateOverview

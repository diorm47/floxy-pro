import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

const Sidebar = () => {
  return (
    <>
      <Col lg={3}>
        <Card>
          <CardBody>
            <ul className="list-unstyled vstack gap-3 mb-0">
              <li>
                <div className="d-flex">
                  <i className="bx bx-calendar font-size-18 text-primary"></i>
                  <div className="ms-3">
                    <h6 className="mb-1 fw-semibold">Experience:</h6>
                    <span className="text-muted">2+ Years</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <i className="bx bx-money font-size-18 text-primary"></i>
                  <div className="ms-3">
                    <h6 className="mb-1 fw-semibold">
                      Current Salary:
                    </h6>
                    <span className="text-muted">$ 3451</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <i className="bx bx-money font-size-18 text-primary"></i>
                  <div className="ms-3">
                    <h6 className="mb-1 fw-semibold">
                      Expected Salary:
                    </h6>
                    <span className="text-muted">$ 4000+</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <i className="bx bx-user font-size-18 text-primary"></i>
                  <div className="ms-3">
                    <h6 className="mb-1 fw-semibold">Gender:</h6>
                    Male
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <i className="mdi mdi-book-education font-size-18 text-primary"></i>
                  <div className="ms-3">
                    <h6 className="mb-1 fw-semibold">
                      Qualification:
                    </h6>
                    <span className="text-muted">Master Degree</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <i className="mdi mdi-google-translate font-size-18 text-primary"></i>
                  <div className="ms-3">
                    <h6 className="mb-1 fw-semibold">Languages:</h6>
                    <span className="text-muted">
                      English, France
                    </span>
                  </div>
                </div>
              </li>
              <li className="hstack gap-2 mt-3">
                <Link to="#!" className="btn btn-soft-primary w-100">
                  Hire Now
                </Link>
                <Link to="#!" className="btn btn-soft-danger w-100">
                  Contact Us
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default Sidebar

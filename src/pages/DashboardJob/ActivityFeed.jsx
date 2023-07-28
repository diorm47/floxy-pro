import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

//import images
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"

const ActivityFeed = () => {
  return (
    <>
      <Col lg={4}>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Activity Feed</h4>
            <SimpleBar style={{ maxHeight: "376px" }}>
              <ul className="verti-timeline list-unstyled">
                <li className="event-list">
                  <div className="event-timeline-dot">
                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src={avatar5}
                        alt=""
                        className="avatar-xs rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <b>Charles Brown</b> applied for the job{" "}
                        <b>Sr.frontend Developer</b>
                        <p className="mb-0 text-muted">3 min ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="event-list">
                  <div className="event-timeline-dot">
                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <div className="avatar-title bg-primary text-primary bg-soft rounded-circle">
                          <i className="bx bx-revision font-size-14"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        Your subscription expires today{" "}
                        <Link to="#">Renew Now</Link>
                        <p className="text-muted mb-0">53 min ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="event-list">
                  <div className="event-timeline-dot">
                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <div className="avatar-title bg-primary text-primary bg-soft rounded-circle">
                          JA
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <b>Jennifer Alexandar</b> created a new
                        account as a <b>Freelance</b>.
                        <p className="text-muted mb-0">1 hrs ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="event-list">
                  <div className="event-timeline-dot">
                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src={avatar2}
                        alt=""
                        className="avatar-xs rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <b>Mark Ellison</b> applied for the job{" "}
                        <b>Project Manager</b>
                        <p className="mb-0 text-muted">3 hrs ago</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="event-list">
                  <div className="event-timeline-dot">
                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <div className="avatar-title bg-primary text-primary bg-soft rounded-circle">
                          AZ
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <b>Acolin Zelton</b> created a new account as
                        a <b>Freelance</b>.
                        <p className="text-muted mb-0">1 hrs ago</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="text-center mt-4">
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light btn-sm"
                >
                  View More{" "}
                  <i className="mdi mdi-arrow-right ms-1"></i>
                </Link>
              </div>
            </SimpleBar>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default ActivityFeed

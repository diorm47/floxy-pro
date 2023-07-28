import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle } from "reactstrap"

const ActivityComp = () => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-5">Activity</CardTitle>
          <ul className="verti-timeline list-unstyled">
            <li className="event-list">
              <div className="event-timeline-dot">
                <i className="bx bx-right-arrow-circle font-size-18" />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    22 Nov{" "}
                    <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div>Responded to need “Volunteer Activities</div>
                </div>
              </div>
            </li>

            <li className="event-list">
              <div className="event-timeline-dot">
                <i className="bx bx-right-arrow-circle font-size-18" />
              </div>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <h5 className="font-size-14">
                    17 Nov{" "}
                    <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div id="activitytext">
                    Everyone realizes why a new common language would
                    be desirable...<Link to="#">Read More</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="event-list active">
              <div className="event-timeline-dot">
                <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right" />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    15 Nov{" "}
                    <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div>Joined the group “Boardsmanship Forum”</div>
                </div>
              </div>
            </li>
            <li className="event-list active">
              <div className="event-timeline-dot">
                <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right" />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    22 Nov{" "}
                    <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div>Responded to need “In-Kind Opportunity”</div>
                </div>
              </div>
            </li>
          </ul>
          <div className="text-center mt-4">
            <Link to="" className="btn btn-primary  btn-sm">
              View More <i className="mdi mdi-arrow-right ms-1" />
            </Link>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default ActivityComp

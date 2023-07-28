import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"
import { jobVacancyData } from "../../common/data/dashboard-job"

const JobVacancy = () => {
  return (
    <>
      <Col lg={12}>
        <div className="d-flex">
          <h4 className="card-title mb-4 flex-grow-1">
            New Job Vacancy
          </h4>
          <div>
            <Link to="/job-list" className="btn btn-primary btn-sm">
              View All <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
        </div>
      </Col>
      {(jobVacancyData || []).map((item, key) => (
        <Col lg={2} key={key}>
          <Card>
            <CardBody className="p-4">
              <div className="text-center mb-3">
                <img src={item.img} alt="" className="avatar-sm" />
                <Link to="/job-details" className="text-body">
                  <h5 className="mt-4 mb-2 font-size-15">
                    {item.title}
                  </h5>
                </Link>
                <p className="mb-0 text-muted">Themesbrand</p>
              </div>

              <div className="d-flex">
                <p className="mb-0 flex-grow-1 text-muted">
                  <i className="bx bx-map text-body"></i>{" "}
                  {item.country}
                </p>
                <p className="mb-0 text-muted">
                  <b>{item.vacancy}</b> Vacancy
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default JobVacancy

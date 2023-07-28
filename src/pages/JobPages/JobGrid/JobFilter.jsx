import React, { useState } from "react"
import {
  Card,
  CardBody,
  Col,
  Collapse,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap"

//Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const JobFilter = () => {
  const [selectDate, setSelectDate] = useState()
  const dateChange = date => {
    setSelectDate(date)
  }
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card className="job-filter">
            <CardBody>
              <Form>
                <Row className="g-3">
                  <Col xxl={4} lg={4}>
                    <div className="position-relative">
                      <Input
                        type="text"
                        className="form-control"
                        id="searchJob"
                        placeholder="Search your job"
                      />
                    </div>
                  </Col>

                  <Col xxl={2} lg={4}>
                    <div className="position-relative">
                      <Input
                        type="text"
                        className="form-control"
                        id="locationInput"
                        placeholder="San Francisco, LA"
                      />
                    </div>
                  </Col>

                  <Col xxl={2} lg={4}>
                    <div className="position-relative">
                      <Input
                        type="text"
                        className="form-control"
                        id="jobCategories"
                        placeholder="Job Categories"
                      />
                    </div>
                  </Col>

                  <Col xxl={2} lg={6}>
                    <div className="position-relative">
                      <div id="datepicker1">
                        <DatePicker
                          className="form-control"
                          selected={selectDate}
                          onChange={dateChange}
                        />
                      </div>
                    </div>
                  </Col>

                  <Col xxl={2} lg={6}>
                    <div className="position-relative h-100 hstack gap-3">
                      <button
                        type="button"
                        className="btn btn-primary h-100 w-100"
                      >
                        <i className="bx bx-search-alt align-middle"></i>{" "}
                        Find Jobs
                      </button>
                      <a
                        href="#"
                        onClick={toggle}
                        className="btn btn-secondary h-100 w-100"
                      >
                        <i className="bx bx-filter-alt align-middle"></i>{" "}
                        Advance
                      </a>
                    </div>
                  </Col>

                  <Collapse isOpen={isOpen} id="collapseExample">
                    <div>
                      <Row className="g-3">
                        <Col xxl={4} lg={6}>
                          <div>
                            <Label
                              htmlFor="experience"
                              className="form-label fw-semibold"
                            >
                              Experience
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="inlineCheckbox1"
                            >
                              All
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox2"
                              value="option1"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="inlineCheckbox2"
                            >
                              Fresher
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox3"
                              value="option2"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="inlineCheckbox3"
                            >
                              1-2
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox4"
                              value="option2"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="inlineCheckbox4"
                            >
                              2-3
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox5"
                              value="option3"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="inlineCheckbox5"
                            >
                              4+
                            </Label>
                          </div>
                        </Col>
                        <Col xxl={4} lg={6}>
                          <div>
                            <Label
                              htmlFor="jobType"
                              className="form-label fw-semibold"
                            >
                              Job Type
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox6"
                              value="option3"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="inlineCheckbox6"
                            >
                              Full Time
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox7"
                              value="option3"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="inlineCheckbox7"
                            >
                              Part Time
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox8"
                              value="option3"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="inlineCheckbox8"
                            >
                              Freelance
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox9"
                              value="option3"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="inlineCheckbox9"
                            >
                              Internship
                            </Label>
                          </div>
                        </Col>
                        <Col xxl={4} lg={4}>
                          <div className="position-relative">
                            <Label
                              htmlFor="qualificationInput"
                              className="form-label fw-semibold"
                            >
                              Qualification
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="qualificationInput"
                              autoComplete="off"
                              placeholder="Qualification"
                            />
                            <i className="ri-government-line filter-icon"></i>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Collapse>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default JobFilter

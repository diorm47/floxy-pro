import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col, Row } from "reactstrap"

//import images
import img1 from "../../../assets/images/companies/img-1.png"
import img4 from "../../../assets/images/companies/img-4.png"
import img5 from "../../../assets/images/companies/img-5.png"
import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../../assets/images/users/avatar-5.jpg"

const AboutUs = () => {
  return (
    <>
      <Col lg={9}>
        <Card>
          <CardBody>
            <h5 className="mb-3">About Us</h5>
            <p className="text-muted">
              Very well thought out and articulate communication.
              Clear milestones, deadlines and fast work. Patience.
              Infinite patience. No shortcuts. Even if the client is
              being careless. Some quick example text to build on the
              card title and bulk the card's content Moltin gives you
              platform.
            </p>
            <p className="text-muted mb-4">
              As a highly skilled and successfull product development
              and design specialist with more than 4 Years of My
              experience lies in successfully conceptualizing,
              designing, and modifying consumer products specific to
              interior design and home furnishings.
            </p>

            <h5 className="mb-3">Education</h5>
            <ul className="verti-timeline list-unstyled">
              <li className="event-list">
                <div className="event-timeline-dot">
                  <i className="bx bx-right-arrow-circle"></i>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <div>
                      <h6 className="font-size-14 mb-1">
                        BCA - Bachelor of Computer Applications
                      </h6>
                      <p className="text-muted">
                        International University - (2004-2010)
                      </p>

                      <p className="text-muted mb-0">
                        There are many variations of passages of
                        available, but the majority alteration in some
                        form. As a highly skilled and successfull
                        product development and design specialist with
                        more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="event-list">
                <div className="event-timeline-dot">
                  <i className="bx bx-right-arrow-circle"></i>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <div>
                      <h6 className="font-size-14 mb-1">
                        MCA - Master of Computer Application
                      </h6>
                      <p className="text-muted">
                        International University - (2010-2012)
                      </p>

                      <p className="text-muted mb-0">
                        There are many variations of passages of
                        available, but the majority alteration in some
                        form. As a highly skilled and successfull
                        product development and design specialist with
                        more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="event-list">
                <div className="event-timeline-dot">
                  <i className="bx bx-right-arrow-circle"></i>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <div>
                      <h6 className="font-size-14 mb-1">
                        Design Communication Visual
                      </h6>
                      <p className="text-muted">
                        International University - (2012-2015)
                      </p>

                      <p className="text-muted mb-0">
                        There are many variations of passages of
                        available, but the majority alteration in some
                        form. As a highly skilled and successfull
                        product development and design specialist with
                        more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Row>
          <Col lg={12}>
            <h5 className="mb-3">Projects</h5>
          </Col>
          <Col xl={4}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-4">
                    <div className="avatar-md">
                      <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                        <img src={img1} alt="" height="30" />
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow-1 overflow-hidden">
                    <h5 className="text-truncate font-size-15">
                      <Link to="#" className="text-dark">
                        New admin Design
                      </Link>
                    </h5>
                    <p className="text-muted mb-4">
                      It will be as simple as Occidental
                    </p>
                    <div className="avatar-group">
                      <div className="avatar-group-item">
                        <Link to="#" className="d-inline-block">
                          <img
                            src={avatar4}
                            alt=""
                            className="rounded-circle avatar-xs"
                          />
                        </Link>
                      </div>
                      <div className="avatar-group-item">
                        <Link to="#" className="d-inline-block">
                          <img
                            src={avatar5}
                            alt=""
                            className="rounded-circle avatar-xs"
                          />
                        </Link>
                      </div>
                      <div className="avatar-group-item">
                        <Link to="#" className="d-inline-block">
                          <div className="avatar-xs">
                            <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                              A
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="avatar-group-item">
                        <Link to="#" className="d-inline-block">
                          <img
                            src={avatar2}
                            alt=""
                            className="rounded-circle avatar-xs"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
              <div className="px-4 py-3 border-top">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-3">
                    <span className="badge bg-success">
                      Completed
                    </span>
                  </li>{" "}
                  <li className="list-inline-item me-3">
                    <i className="bx bx-calendar me-1"></i> 15 Oct, 22
                  </li>{" "}
                  <li className="list-inline-item me-3">
                    <i className="bx bx-comment-dots me-1"></i> 214
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col xl={4}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-4">
                    <div className="avatar-md">
                      <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                        <img src={img4} alt="" height="30" />
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow-1 overflow-hidden">
                    <h5 className="text-truncate font-size-15">
                      <Link to="#" className="text-dark">
                        App Landing UI
                      </Link>
                    </h5>
                    <p className="text-muted mb-4">
                      To achieve it would be necessary
                    </p>
                    <div className="avatar-group">
                      <div className="avatar-group-item">
                        <Link to="#" className="d-inline-block">
                          <div className="avatar-xs">
                            <span className="avatar-title rounded-circle bg-pink text-white font-size-16">
                              L
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="avatar-group-item">
                        <Link to="#" className="d-inline-block">
                          <img
                            src={avatar2}
                            alt=""
                            className="rounded-circle avatar-xs"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
              <div className="px-4 py-3 border-top">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-3">
                    <span className="badge bg-success">
                      Completed
                    </span>
                  </li>{" "}
                  <li className="list-inline-item me-3">
                    <i className="bx bx-calendar me-1"></i> 11 Oct, 22
                  </li>{" "}
                  <li className="list-inline-item me-3">
                    <i className="bx bx-comment-dots me-1"></i> 185
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col xl={4}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-4">
                    <div className="avatar-md">
                      <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                        <img src={img5} alt="" height="30" />
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow-1 overflow-hidden">
                    <h5 className="text-truncate font-size-15">
                      <Link to="#" className="text-dark">
                        Skote Dashboard UI
                      </Link>
                    </h5>
                    <p className="text-muted mb-4">
                      Separate existence is a myth
                    </p>
                    <div className="avatar-group">
                      <div className="avatar-group-item">
                        <Link to="#" className="d-inline-block">
                          <img
                            src={avatar1}
                            alt=""
                            className="rounded-circle avatar-xs"
                          />
                        </Link>
                      </div>
                      <div className="avatar-group-item">
                        <Link to="#" className="d-inline-block">
                          <img
                            src={avatar3}
                            alt=""
                            className="rounded-circle avatar-xs"
                          />
                        </Link>
                      </div>
                      <div className="avatar-group-item">
                        <Link to="#" className="d-inline-block">
                          <div className="avatar-xs">
                            <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                              3+
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
              <div className="px-4 py-3 border-top">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-3">
                    <span className="badge bg-success">
                      Completed
                    </span>
                  </li>{" "}
                  <li className="list-inline-item me-3">
                    <i className="bx bx-calendar me-1"></i> 13 Oct, 22
                  </li>{" "}
                  <li className="list-inline-item me-3">
                    <i className="bx bx-comment-dots me-1"></i> 194
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody className="border-bottom">
                <h5 className="mb-3">Social Media</h5>
                <div className="hstack gap-2">
                  <Link to="#!" className="btn btn-soft-primary">
                    <i className="bx bxl-facebook align-middle me-1"></i>{" "}
                    Facebook{" "}
                  </Link>
                  <Link to="#!" className="btn btn-soft-info">
                    <i className="bx bxl-twitter align-middle me-1"></i>{" "}
                    Twitter
                  </Link>
                  <Link to="#!" className="btn btn-soft-pink">
                    <i className="bx bxl-instagram align-middle me-1"></i>{" "}
                    Instagram
                  </Link>
                  <Link to="#!" className="btn btn-soft-success">
                    <i className="bx bxl-whatsapp align-middle me-1"></i>{" "}
                    Whatsapp
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default AboutUs

import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Pagination,
  Row,
} from "reactstrap"

//import images
import adobephotoshop from "../../../assets/images/companies/adobe-photoshop.svg"
import adobe from "../../../assets/images/companies/adobe.svg"
import airbnb from "../../../assets/images/companies/airbnb.svg"
import amazon from "../../../assets/images/companies/amazon.svg"
import flutter from "../../../assets/images/companies/flutter.svg"
import line from "../../../assets/images/companies/line.svg"
import mailchimp from "../../../assets/images/companies/mailchimp.svg"
import reddit from "../../../assets/images/companies/reddit.svg"
import sass from "../../../assets/images/companies/sass.svg"
import spotify from "../../../assets/images/companies/spotify.svg"
import upwork from "../../../assets/images/companies/upwork.svg"
import wordpress from "../../../assets/images/companies/wordpress.svg"

const JobData = () => {
  const [modal, setModal] = useState(false)

  const jobsGridData = [
    {
      id: 1,
      img: adobe,
      title: "Magento Developer",
    },
    {
      id: 2,
      img: adobephotoshop,
      title: "Product Designer",
    },
    {
      id: 3,
      img: airbnb,
      title: "Marketing Director",
    },
    {
      id: 4,
      img: amazon,
      title: "Project Manager",
    },
    {
      id: 5,
      img: flutter,
      title: "HTML Developer",
    },
    {
      id: 6,
      img: mailchimp,
      title: "Business Associate",
    },
    {
      id: 7,
      img: line,
      title: "Product Sales Specialist",
    },
    {
      id: 8,
      img: spotify,
      title: "Magento Developer",
    },
    {
      id: 9,
      img: wordpress,
      title: "Magento Developer",
    },
    {
      id: 10,
      img: upwork,
      title: "Magento Developer",
    },
    {
      id: 11,
      img: sass,
      title: "Magento Developer",
    },
    {
      id: 12,
      img: reddit,
      title: "Magento Developer",
    },
  ]
  return (
    <>
      <Row>
        {(jobsGridData || []).map((item, key) => (
          <Col xl={3} md={6} key={key}>
            <Card>
              <CardBody>
                <div className="favorite-icon">
                  <Link to="#">
                    <i className="uil uil-heart-alt fs-18"></i>
                  </Link>
                </div>
                <img
                  src={item.img}
                  alt=""
                  height="50"
                  className="mb-3"
                />
                <h5 className="fs-17 mb-2">
                  <Link to="/job-details" className="text-dark">
                    {item.title}
                  </Link>{" "}
                  <small className="text-muted fw-normal">
                    (0-2 Yrs Exp.)
                  </small>
                </h5>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <p className="text-muted fs-14 mb-1">
                      Skote Technology Pvt.Ltd
                    </p>
                  </li>{" "}
                  <li className="list-inline-item">
                    <p className="text-muted fs-14 mb-0">
                      <i className="mdi mdi-map-marker"></i>{" "}
                      California
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted fs-14 mb-0">
                      <i className="uil uil-wallet"></i> $250 - $800 /
                      month
                    </p>
                  </li>
                </ul>
                <div className="mt-3 hstack gap-2">
                  <span className="badge rounded-1 badge-soft-success">
                    Full Time
                  </span>
                  <span className="badge rounded-1 badge-soft-warning">
                    Urgent
                  </span>
                  <span className="badge rounded-1 badge-soft-info">
                    Private
                  </span>
                </div>
                <div className="mt-4 hstack gap-2">
                  <Link
                    to="/job-details"
                    className="btn btn-soft-success w-100"
                  >
                    View Profile
                  </Link>
                  <Link
                    to="#applyJobs"
                    onClick={() => setModal(true)}
                    className="btn btn-soft-primary w-100"
                  >
                    Apply Now
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="justify-content-between align-items-center mb-3">
        <div className="col-auto me-auto">
          <p className="text-muted mb-0">
            Showing <b>1</b> to <b>12</b> of <b>45</b> entries
          </p>
        </div>
        <div className="col-auto">
          <Card className="d-inline-block ms-auto mb-0">
            <CardBody className="p-2">
              <nav
                aria-label="Page navigation example"
                className="mb-0"
              >
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      ...
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      12
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <span aria-hidden="true">&raquo;</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </CardBody>
          </Card>
        </div>
      </Row>

      {/* Modal */}
      <Modal
        isOpen={modal}
        toggle={() => {
          setModal()
        }}
        id="applyJobs"
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => setModal()}
            id="applyJobsLabel"
            className="modal-header"
          >
            Apply For This Job
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col lg={12}>
                <div className="mb-3">
                  <Label
                    htmlFor="fullnameInput"
                    className="form-label"
                  >
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="fullnameInput"
                    placeholder="Enter your name"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <Label htmlFor="emailInput" className="form-label">
                    Email
                  </Label>
                  <Input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Enter your email"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <Label
                    htmlFor="phoneNumberInput"
                    className="form-label"
                  >
                    Phone Number
                  </Label>
                  <Input
                    type="email"
                    className="form-control"
                    id="phoneNumberInput"
                    placeholder="Enter your number"
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Label
                    htmlFor="uploadResume"
                    className="form-label"
                  >
                    Upload Resume
                  </Label>
                  <Input
                    type="file"
                    className="form-control"
                    id="uploadResume"
                    placeholder="Upload resume"
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-4">
                  <Label
                    htmlFor="messageInput"
                    className="form-label"
                  >
                    Message
                  </Label>
                  <textarea
                    className="form-control"
                    id="messageInput"
                    rows="3"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
              </Col>
              <Col lg={12}>
                <div className="text-end">
                  <button className="btn btn-success me-1">
                    Send Application{" "}
                    <i className="bx bx-send align-middle"></i>
                  </button>
                  <button className="btn btn-outline-secondary">
                    Cancel
                  </button>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </div>
      </Modal>
    </>
  )
}

export default JobData

import React from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

//import images
import { Link } from "react-router-dom"
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"
import adobe from "../../assets/images/companies/adobe.svg"
import airbnb from "../../assets/images/companies/airbnb.svg"
import flutter from "../../assets/images/companies/flutter.svg"
import mailchimp from "../../assets/images/companies/mailchimp.svg"
import reddit from "../../assets/images/companies/reddit.svg"
import sass from "../../assets/images/companies/sass.svg"
import spotify from "../../assets/images/companies/spotify.svg"
import wechat from "../../assets/images/companies/wechat.svg"

const AddedJobs = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4">Recent Added Jobs</h4>
            <SimpleBar style={{ maxHeight: "376px" }}>
              <div className="vstack gap-4">
                <div className="d-flex">
                  <img
                    src={wechat}
                    alt=""
                    height="40"
                    className="rounded"
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-1 font-size-15">
                      <Link to="/job-details" className="text-body">
                        Marketing Director
                      </Link>
                    </h6>
                    <p className="text-muted mb-0">
                      Themesbrand, USA - <b>53</b> sec ago
                    </p>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn btn-light"
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <DropdownItem href="job-details">
                        View Details
                      </DropdownItem>
                      <DropdownItem href="#">Apply Now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>

                <div className="d-flex">
                  <img
                    src={sass}
                    alt=""
                    height="40"
                    className="rounded"
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-1 font-size-15">
                      <Link to="/job-details" className="text-body">
                        Frontend Developer
                      </Link>
                    </h6>
                    <p className="text-muted mb-0">
                      Themesbrand, Hong-Kong - <b>47</b> min ago
                    </p>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn btn-light"
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <DropdownItem href="job-details">
                        View Details
                      </DropdownItem>
                      <DropdownItem href="#">Apply Now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>

                <div className="d-flex">
                  <img
                    src={adobe}
                    alt=""
                    height="40"
                    className="rounded"
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-1 font-size-15">
                      <Link to="/job-details" className="text-body">
                        React Developer
                      </Link>
                    </h6>
                    <p className="text-muted mb-0">
                      Creative Agency, Danemark - <b>1</b> hrs ago
                    </p>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn btn-light"
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <DropdownItem href="job-details">
                        View Details
                      </DropdownItem>
                      <DropdownItem href="#">Apply Now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <div className="d-flex">
                  <img
                    src={airbnb}
                    alt=""
                    height="40"
                    className="rounded"
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-1 font-size-15">
                      <Link to="/job-details" className="text-body">
                        NodeJs Developer
                      </Link>
                    </h6>
                    <p className="text-muted mb-0">
                      Skote Themes, Louisiana - <b>2</b> hrs ago
                    </p>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn btn-light"
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <DropdownItem href="job-details">
                        View Details
                      </DropdownItem>
                      <DropdownItem href="#">Apply Now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <div className="d-flex">
                  <img
                    src={flutter}
                    alt=""
                    height="40"
                    className="rounded"
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-1 font-size-15">
                      <Link to="/job-details" className="text-body">
                        Digital Marketing
                      </Link>
                    </h6>
                    <p className="text-muted mb-0">
                      Web Technology pvt.Ltd, Danemark - <b>8</b> hrs
                      ago
                    </p>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn btn-light"
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <DropdownItem href="job-details">
                        View Details
                      </DropdownItem>
                      <DropdownItem href="#">Apply Now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <div className="d-flex">
                  <img
                    src={mailchimp}
                    alt=""
                    height="40"
                    className="rounded"
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-1 font-size-15">
                      <Link to="/job-details" className="text-body">
                        Marketing Director
                      </Link>
                    </h6>
                    <p className="text-muted mb-0">
                      Skote Technology, Dominica - <b>1</b> days ago
                    </p>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn btn-light"
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <DropdownItem href="job-details">
                        View Details
                      </DropdownItem>
                      <DropdownItem href="#">Apply Now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <div className="d-flex">
                  <img
                    src={spotify}
                    alt=""
                    height="40"
                    className="rounded"
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-1 font-size-15">
                      <Link to="/job-details" className="text-body">
                        Business Associate
                      </Link>
                    </h6>
                    <p className="text-muted mb-0">
                      Themesbrand, Russia - <b>2</b> days ago
                    </p>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn btn-light"
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <DropdownItem href="job-details">
                        View Details
                      </DropdownItem>
                      <DropdownItem href="#">Apply Now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <div className="d-flex">
                  <img
                    src={reddit}
                    alt=""
                    height="40"
                    className="rounded"
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-1 font-size-15">
                      <Link to="/job-details" className="text-body">
                        Backend Developer
                      </Link>
                    </h6>
                    <p className="text-muted mb-0">
                      Adobe Agency, Malaysia - <b>3</b> days ago
                    </p>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn btn-light"
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <DropdownItem href="job-details">
                        View Details
                      </DropdownItem>
                      <DropdownItem href="#">Apply Now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </SimpleBar>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddedJobs

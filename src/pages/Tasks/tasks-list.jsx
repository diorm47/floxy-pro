import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"
import withRouter from "../../components/Common/withRouter"
//Import Breadcrumb
import ReactApexChart from "react-apexcharts"
import Breadcrumbs from "/src/components/Common/Breadcrumb"

//Import Images
//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"
import avatar7 from "../../assets/images/users/avatar-7.jpg"
import avatar8 from "../../assets/images/users/avatar-8.jpg"

import { options, series } from "/src/common/data/tasks"
import { getTasks as onGetTasks } from "/src/store/tasks/actions"

//redux
import { useDispatch, useSelector } from "react-redux"

const TasksList = () => {
  //meta title
  document.title =
    "Task List | Skote - Vite React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { tasks } = useSelector(state => ({
    tasks: state.tasks.tasks,
  }))

  useEffect(() => {
    dispatch(onGetTasks())
  }, [dispatch])

  const recentTasks = tasks.find(
    task => task.title === "Recent Tasks"
  )

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Tasks" breadcrumbItem="Task List" />
          {/* Render Breadcrumbs */}
          <Row>
            <Col lg={8}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Upcoming</h4>
                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <td style={{ width: "40px" }}>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="upcomingtaskCheck01"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="upcomingtaskCheck01"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Create a Skote Dashboard UI
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar5}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <span className="badge rounded-pill badge-soft-secondary font-size-11">
                                Waiting
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="upcomingtaskCheck02"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="upcomingtaskCheck02"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Create a New Landing UI
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                      A
                                    </span>
                                  </div>
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar6}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <span className="badge rounded-pill badge-soft-primary font-size-11">
                                Approved
                              </span>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="upcomingtaskCheck03"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="upcomingtaskCheck03"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Create a Skote Logo
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar3}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-warning text-white font-size-16">
                                      R
                                    </span>
                                  </div>
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar5}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <span className="badge rounded-pill badge-soft-secondary font-size-11">
                                Waiting
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">In Progress</h4>
                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <td style={{ width: "40px" }}>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inprogresstaskCheck01"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inprogresstaskCheck01"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Brand logo design
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar5}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <span className="badge rounded-pill badge-soft-success font-size-11">
                                Complete
                              </span>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inprogresstaskCheck02"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inprogresstaskCheck02"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Create a Blog Template UI
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                      A
                                    </span>
                                  </div>
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <span className="badge rounded-pill badge-soft-warning font-size-11">
                                Pending
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Completed</h4>
                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <td style={{ width: "40px" }}>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="completedtaskCheck01"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="completedtaskCheck01"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Redesign - Landing page
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar5}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                      K
                                    </span>
                                  </div>
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <span className="badge rounded-pill badge-soft-success font-size-11">
                                Complete
                              </span>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="completedtaskCheck02"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="completedtaskCheck02"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Multipurpose Landing
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar8}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar6}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <span className="badge rounded-pill badge-soft-success font-size-11">
                                Complete
                              </span>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="completedtaskCheck03"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="completedtaskCheck03"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Create a Blog Template UI
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar5}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                      D
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <span className="badge rounded-pill badge-soft-success font-size-11">
                                Complete
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-3">Tasks </CardTitle>
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height={280}
                    className="apex-charts"
                  />
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Recent Tasks</h4>

                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Brand logo design
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar5}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Create a Blog Template UI
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar3}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                      D
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Redesign - Landing page
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar8}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <img
                                    src={avatar7}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link
                                  to="#"
                                  className="d-inline-block"
                                >
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                      P
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default withRouter(TasksList)

import React, { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap"
import { jobApply } from "../../../common/data/job"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import DeleteModal from "../../../components/Common/DeleteModal"
import TableContainer from "../../../components/Common/TableContainer"
import {
  ApplyDate,
  CompanyName,
  JobTitle,
  Status,
  Type,
} from "./ApplyJobsCol"

import {
  deleteApplyJob as OnDeleteApplyJob,
  getApplyJob as OnGetApplyJob,
} from "/src/store/actions"

//redux
import { useDispatch, useSelector } from "react-redux"

const ApplyJobs = () => {
  document.title =
    "Job Apply | Skote - Vite React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { jobApply } = useSelector(state => ({
    jobApply: state.JobReducer.jobApply,
  }))

  const [apply, setApply] = useState(null)
  const [deleteModal, setDeleteModal] = useState(false)

  useEffect(() => {
    dispatch(OnGetApplyJob())
  }, [dispatch])

  useEffect(() => {
    setApply(jobApply)
  }, [jobApply])

  // delete
  const onClickData = apply => {
    setApply(apply)
    setDeleteModal(true)
  }

  const handleDeleteApplyJob = () => {
    if (apply && apply.id) {
      dispatch(OnDeleteApplyJob(apply.id))
      setDeleteModal(false)
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
        filterable: true,
      },
      {
        Header: "Job Title",
        accessor: "jobTitle",
        filterable: true,
        Cell: cellProps => {
          return <JobTitle {...cellProps} />
        },
      },
      {
        Header: "Company Name",
        accessor: "companyName",
        filterable: true,
        Cell: cellProps => {
          return <CompanyName {...cellProps} />
        },
      },
      {
        Header: "Type",
        accessor: "type",
        filterable: true,
        Cell: cellProps => {
          return <Type {...cellProps} />
        },
      },
      {
        Header: "Apply Date",
        accessor: "applyDate",
        filterable: true,
        Cell: cellProps => {
          return <ApplyDate {...cellProps} />
        },
      },
      {
        Header: "Status",
        accessor: "status",
        disableFilters: true,
        Cell: cellProps => {
          return <Status {...cellProps} />
        },
      },
      {
        Header: "Action",
        Cell: cellProps => {
          return (
            <div className="list-unstyled hstack gap-1 mb-0">
              <li>
                <Link
                  to="/job-details"
                  className="btn btn-sm btn-soft-primary"
                >
                  <i
                    className="mdi mdi-eye-outline"
                    id="viewtooltip"
                  />
                  <UncontrolledTooltip
                    placement="top"
                    target="viewtooltip"
                  >
                    View
                  </UncontrolledTooltip>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="btn btn-sm btn-soft-danger"
                  onClick={() => {
                    const userData = cellProps.row.original
                    onClickData(userData)
                  }}
                >
                  <i
                    className="mdi mdi-delete-outline"
                    id="deletetooltip"
                  />
                  <UncontrolledTooltip
                    placement="top"
                    target="deletetooltip"
                  >
                    Delete
                  </UncontrolledTooltip>
                </Link>
              </li>
            </div>
          )
        },
      },
    ],
    []
  )
  return (
    <>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => handleDeleteApplyJob()}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Jobs" breadcrumbItem="Job Apply" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody className="border-bottom">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 card-title flex-grow-1">
                      Applied Jobs
                    </h5>
                    <div className="flex-shrink-0">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="Today" defaultValue>
                          Today
                        </option>
                        <option value="1 Monthly">1 Month</option>
                        <option value="6 Month">6 Month</option>
                        <option value="1 Years">1 Year</option>
                      </select>
                    </div>
                  </div>
                </CardBody>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={jobApply || []}
                    isAddUserList={false}
                    isGlobalFilter={false}
                    customPageSizeOptions={false}
                    customPageSize={10}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ApplyJobs

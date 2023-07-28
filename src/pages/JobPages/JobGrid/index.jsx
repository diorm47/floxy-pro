import React from "react"
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import JobData from "./JobData"
import JobFilter from "./JobFilter"

const JobGrid = () => {
  document.title =
    "Jobs Grid | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Jobs" breadcrumbItem="Jobs Grid" />

          <JobFilter />
          <JobData />
        </Container>
      </div>
    </>
  )
}

export default JobGrid

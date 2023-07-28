import React from "react"
import { Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import DetailsSection from "./DetailsSection"
import Overview from "./Overview"

const JobDetails = () => {
  document.title =
    "Job Details | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Jobs" breadcrumbItem="Job Details" />

          <Row>
            <Overview />
            <DetailsSection />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default JobDetails

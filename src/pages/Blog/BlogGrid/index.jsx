import React from "react"
import { Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import RightBar from "../BlogList/RightBar"
import BlogGrid from "./BlogGrid"

const Index = props => {
  //meta title
  document.title =
    "Blog Grid | Skote - Vite React Admin & Dashboard Template"
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Blog" breadcrumbItem="Blog Grid" />
          <Row>
            <BlogGrid />
            <RightBar />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Index

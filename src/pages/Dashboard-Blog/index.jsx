import React from "react"
import { Container, Row } from "reactstrap"

//import component
import Activity from "./Activity"
import CardUser from "./CardUser"
import Comments from "./Comments"
import PopularPost from "./PopularPost"
import Posts from "./Posts"
import Settings from "./Settings"
import TapVisitors from "./TapVisitors"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const index = () => {
  //meta title
  document.title =
    "Blog Dashboard | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Blog" />
          <Row>
            {/* card user */}
            <CardUser dataColors='["--bs-primary", "--bs-warning"]' />
            <Settings />
          </Row>
          <Row>
            <Posts />
            <Comments />
            <TapVisitors />
          </Row>
          <Row>
            {" "}
            <Activity />
            <PopularPost />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default index

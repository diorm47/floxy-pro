import React, { useEffect } from "react"
import { Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user"
import CardWelcome from "./card-welcome"
import ChatBox from "./chat-box"
import Earning from "./earning"
import MiniWidget from "./mini-widget"
import SalesAnalytics from "./sales-analytics"
import Tasks from "./tasks"
import TotalSellingProduct from "./total-selling-product"

const DashboardSaas = props => {
  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "Orders",
      value: "1,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-archive-in",
      title: "Revenue",
      value: "$ 28,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Average Price",
      value: "$ 16.2",
      badgeValue: "0%",
      color: "warning",
      desc: "From previous period",
    },
  ]

  //meta title
  document.title =
    "Saas Dashboard | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Saas" />

          {/* Card User */}
          <CardUser />

          <Row>
            {/* welcome card */}
            <CardWelcome />

            <Col xl="8">
              <Row>
                {/*mimi widgets */}
                <MiniWidget reports={reports} />
              </Row>
            </Col>
          </Row>

          <Row>
            {/* earning */}
            <Earning dataColors='["--bs-primary"]' />

            {/* sales anytics */}
            <SalesAnalytics dataColors='["--bs-primary", "--bs-success", "--bs-danger"]' />
          </Row>

          <Row>
            {/* total selling product */}
            <TotalSellingProduct />

            {/* tasks */}
            <Tasks />

            {/* chat box */}
            <ChatBox />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default DashboardSaas

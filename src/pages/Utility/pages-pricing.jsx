import React from "react"
import { Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Pricing Cards
import CardPricing from "./card-pricing"

const PagesPricing = () => {
  //meta title
  document.title =
    "Pricing | Skote - Vite React Admin & Dashboard Template"

  const pricings = [
    {
      id: 1,
      title: "Starter",
      description: "Neque quis est",
      icon: "bx-walk",
      price: "19",
      duration: "Per month",
      link: "",
      features: [
        { title: "Free Live Support" },
        { title: "Unlimited User" },
        { title: "No Time Tracking" },
        { title: "Free Setup" },
      ],
    },
    {
      id: 2,
      title: "Professional",
      description: "Quis autem iure",
      icon: "bx-run",
      price: "29",
      duration: "Per month",
      link: "",
      features: [
        { title: "Free Live Support" },
        { title: "Unlimited User" },
        { title: "No Time Tracking" },
        { title: "Free Setup" },
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      description: "Sed ut neque unde",
      icon: "bx-cycling",
      price: "39",
      duration: "Per month",
      link: "",
      features: [
        { title: "Free Live Support" },
        { title: "Unlimited User" },
        { title: "No Time Tracking" },
        { title: "Free Setup" },
      ],
    },
    {
      id: 4,
      title: "Unlimited",
      description: "Itaque earum hic",
      icon: "bx-car",
      price: "49",
      duration: "Per month",
      link: "",
      features: [
        { title: "Free Live Support" },
        { title: "Unlimited User" },
        { title: "No Time Tracking" },
        { title: "Free Setup" },
      ],
    },
  ]
  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="Pricing" />

          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mb-5">
                <h4>Choose your Pricing plan</h4>
                <p className="text-muted">
                  To achieve this, it would be necessary to have
                  uniform grammar, pronunciation and more common words
                  If several languages coalesce
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {pricings.map((pricing, key) => (
              <CardPricing
                pricing={pricing}
                key={"_pricing_" + key}
              />
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}
export default PagesPricing

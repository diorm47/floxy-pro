import React from "react"

import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"
import Vector from "./Vectormap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const MapsVector = () => {
  //meta title
  document.title =
    "Vector Maps | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Maps" breadcrumbItem="Vector Maps" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>World Map</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of vector map.
                  </CardSubtitle>

                  <div
                    id="world-map-markers"
                    className="vector-map-height"
                  >
                    <Vector
                      value="world_mill"
                      width="500"
                      color="rgb(98, 110, 212)"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>USA Map</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of vector map.
                  </CardSubtitle>

                  <div id="usa" className="vector-map-height">
                    <Vector
                      value="us_aea"
                      width="500"
                      color="rgb(98, 110, 212)"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Canada Map</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of vector map.
                  </CardSubtitle>

                  <div id="uk" className="vector-map-height">
                    <Vector
                      value="ca_lcc"
                      width="500"
                      color="rgb(98, 110, 212)"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Asia Vector Map</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of vector map.
                  </CardSubtitle>

                  <div id="chicago" className="vector-map-height">
                    <Vector
                      value="asia_mill"
                      width="500"
                      color="rgb(98, 110, 212)"
                    />
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

export default MapsVector

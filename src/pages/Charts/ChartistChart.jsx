import React from "react"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"

// import charts
import BarChart from "../AllCharts/chartist/barchart"
import ChartBar from "../AllCharts/chartist/chartbar"
import DountChart from "../AllCharts/chartist/dountchart"
import LineAreaChart from "../AllCharts/chartist/lineareachart"
import LineChart from "../AllCharts/chartist/linechart"
import PieChart from "../AllCharts/chartist/piechart"
import SmilAnimationsChart from "../AllCharts/chartist/smilanimations"
import Bar from "../AllCharts/chartist/stackedbarchart"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import "../../../node_modules/chartist/dist/chartist.css"
import "../../assets/scss/chartist.scss"
const ChartistChart = () => {
  //meta title
  document.title =
    "Chartist Charts | Skote - React Admin & Dashboard Template"
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="Charts"
            breadcrumbItem="Chartist Charts"
          />
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Overlapping bars on mobile
                  </CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">86541</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">2541</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">102030</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>
                  <BarChart dataColors='["--bs-primary, --bs-success"]' />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Stacked bar chart
                  </CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">5241</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">65411</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">51654</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>
                  <Bar dataColors='["--bs-warning, --bs-success, --bs-primary"]' />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Animating a Donut with Svg.animate
                  </CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">748949</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">5181</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">101025</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>
                  <DountChart dataColors='["--bs-pink, --bs-primary, --bs-success, --bs-warning, --bs-orange, --bs-cyan"]' />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Simple pie chart
                  </CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">48484</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">48652</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">85412</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>
                  <PieChart dataColors='["--bs-warning, --bs-primary, --bs-success"]' />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Advanced Smil Animations
                  </CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">45410</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">4442</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">3201</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>
                  <SmilAnimationsChart dataColors='["--bs-primary, --bs-danger, --bs-warning, --bs-success"]' />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Simple line chart
                  </CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">44242</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">75221</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">65212</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>

                  <LineChart dataColors='["--bs-primary, --bs-success, --bs-warning"]' />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Bar Diagram</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">5677</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">5542</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">12422</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>

                  <ChartBar dataColors='["--bs-primary"]' />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Line chart with area
                  </CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">4234</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">64521</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">94521</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>
                  <LineAreaChart dataColors='["--bs-primary-rgb, 0.2", "--bs-primary", "--bs-light-rgb, 0.2", "--bs-light"]' />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ChartistChart

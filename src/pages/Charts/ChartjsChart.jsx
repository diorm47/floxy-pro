import React from "react"

import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import chartJs
import BarChart from "../AllCharts/chartjs/barchart"
import DountChart from "../AllCharts/chartjs/dountchart"
import LineChart from "../AllCharts/chartjs/linechart"
import PieChart from "../AllCharts/chartjs/piechart"
import PolarChart from "../AllCharts/chartjs/polarchart"
import RadarChart from "../AllCharts/chartjs/radarchart"

const ChartjsChart = () => {
  //meta title
  document.title =
    "Chartjs Charts | Skote - React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="Charts"
            breadcrumbItem="Chartjs Charts"
          />
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Line Chart</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">86541</h5>
                        <p className="text-muted text-truncate">
                          Activated
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">2541</h5>
                        <p className="text-muted text-truncate">
                          Pending
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">102030</h5>
                        <p className="text-muted text-truncate">
                          Deactivated
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <LineChart dataColors='["--bs-primary-rgb, 0.2", "--bs-primary", "--bs-light-rgb, 0.2", "--bs-light"]' />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Bar Chart</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">2541</h5>
                        <p className="text-muted text-truncate">
                          Activated
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">84845</h5>
                        <p className="text-muted text-truncate">
                          Pending
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">12001</h5>
                        <p className="text-muted text-truncate">
                          Deactivated
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <BarChart dataColors='["--bs-success-rgb, 0.8", "--bs-success"]' />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Pie Chart</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">2536</h5>
                        <p className="text-muted text-truncate">
                          Activated
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">69421</h5>
                        <p className="text-muted text-truncate">
                          Pending
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">89854</h5>
                        <p className="text-muted text-truncate">
                          Deactivated
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <PieChart dataColors='["--bs-success", "#ebeff2"]' />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Donut Chart</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">9595</h5>
                        <p className="text-muted text-truncate">
                          Activated
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">36524</h5>
                        <p className="text-muted text-truncate">
                          Pending
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">62541</h5>
                        <p className="text-muted text-truncate">
                          Deactivated
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <DountChart dataColors='["--bs-primary", "#ebeff2"]' />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Polar Chart</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">4852</h5>
                        <p className="text-muted text-truncate">
                          Activated
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">3652</h5>
                        <p className="text-muted text-truncate">
                          Pending
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">85412</h5>
                        <p className="text-muted text-truncate">
                          Deactivated
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <PolarChart dataColors='["--bs-danger", "--bs-success", "--bs-warning", "--bs-primary"]' />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Radar Chart</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">694</h5>
                        <p className="text-muted text-truncate">
                          Activated
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">55210</h5>
                        <p className="text-muted text-truncate">
                          Pending
                        </p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0">489498</h5>
                        <p className="text-muted text-truncate">
                          Deactivated
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <RadarChart dataColors='["--bs-success-rgb, 0.2", "--bs-success", "--bs-primary-rgb, 0.2", "--bs-primary"]' />
                </CardBody>
              </Card>
            </Col>
          </Row>{" "}
        </Container>
      </div>
    </>
  )
}

export default ChartjsChart

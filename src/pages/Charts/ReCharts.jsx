import React from "react"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import CustomActiveShapePieChart from "../AllCharts/rechart/CustomActiveShapePieChart"
import MixBarChart from "../AllCharts/rechart/MixBarChart"
import SimpleAreaChart from "../AllCharts/rechart/SimpleAreaChart"
import SimpleLineChart from "../AllCharts/rechart/SimpleLineChart"
import SimpleRadialBarChart from "../AllCharts/rechart/SimpleRadialBarChart"
import SpecifiedDomainRadarChart from "../AllCharts/rechart/SpecifiedDomainRadarChart"
import ThreeDimScatterChart from "../AllCharts/rechart/ThreeDimScatterChart"
import VerticalComposedChart from "../AllCharts/rechart/VerticalComposedChart"

const ReCharts = () => {
  //meta title
  document.title =
    "Re Charts | Skote - React Admin & Dashboard Template"

  return (
    <>
      <>
        <div className="page-content">
          <div className="container-fluid">
            <Breadcrumbs title="Charts" breadcrumbItem="Re Chart" />

            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      SimpleLine Chart
                    </CardTitle>
                    <SimpleLineChart />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      SimpleArea Chart
                    </CardTitle>
                    <SimpleAreaChart />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      SimpleLine Chart
                    </CardTitle>
                    <MixBarChart />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      SimpleArea Chart
                    </CardTitle>
                    <VerticalComposedChart />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      ThreeDimScatter Chart
                    </CardTitle>
                    <ThreeDimScatterChart />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      SpecifiedDomain Radar Chart
                    </CardTitle>
                    <SpecifiedDomainRadarChart />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      SimpleRadialBar Chart
                    </CardTitle>
                    <SimpleRadialBarChart />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      CustomActiveShapePie Chart
                    </CardTitle>
                    <CustomActiveShapePieChart />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    </>
  )
}

export default ReCharts

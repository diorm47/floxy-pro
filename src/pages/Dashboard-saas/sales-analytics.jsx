import React from "react"
import ReactApexChart from "react-apexcharts"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
import getChartColorsArray from "../../components/Common/ChartsDynamicColor"

const SalesAnalytics = ({ dataColors }) => {
  const apexsaleschartColors = getChartColorsArray(dataColors)
  const series = [56, 38, 26]
  const options = {
    labels: ["В работе", "Свободно", "Заблокировано"],
    colors: apexsaleschartColors,
    legend: { show: !1 },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  }

  return (
    <>
      <Col>
        <Card>
          <CardBody>
            <CardTitle className="mb-4">Статистика ботов</CardTitle>

            <div>
              <div id="donut-chart">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="donut"
                  height={260}
                  className="apex-charts"
                />
              </div>
            </div>

            <div className="text-center text-muted">
              <Row>
                <Col xs="4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="mdi mdi-circle text-primary me-1" />{" "}
                      В работе
                    </p>
                    <h5>2,132</h5>
                  </div>
                </Col>
                <Col xs="4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="mdi mdi-circle text-success me-1" />{" "}
                      Свободно
                    </p>
                    <h5>1,763</h5>
                  </div>
                </Col>
                <Col xs="4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="mdi mdi-circle text-danger me-1" />{" "}
                      Заблокировано
                    </p>
                    <h5>973</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default SalesAnalytics

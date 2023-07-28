import PropTypes from "prop-types"
import React from "react"
import ReactApexChart from "react-apexcharts"
import { Link } from "react-router-dom"
import { Card, CardBody } from "reactstrap"
import getChartColorsArray from "../../components/Common/ChartsDynamicColor"

const Storage = ({ dataColors }) => {
  const apexfileManagerChartColors = getChartColorsArray(dataColors)
  const series = [76]
  const options = {
    chart: {
      height: 150,
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    colors: apexfileManagerChartColors,
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
        },

        hollow: {
          size: "60%",
        },

        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "16px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    stroke: {
      dashArray: 3,
    },
    labels: ["Storage"],
  }
  return (
    <>
      <Card className="filemanager-sidebar ms-lg-2">
        <CardBody>
          <div className="text-center">
            <h5 className="font-size-15 mb-4">Storage</h5>
            <div>
              <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                height={150}
                className="apex-charts"
              />
            </div>

            <p className="text-muted mt-4">
              48.02 GB (76%) of 64 GB used
            </p>
          </div>

          <div className="mt-4">
            <Card className="border shadow-none mb-2">
              <Link to="#" className="text-body">
                <div className="p-2">
                  <div className="d-flex">
                    <div className="avatar-xs align-self-center me-2">
                      <div className="avatar-title rounded bg-transparent text-success font-size-20">
                        <i className="mdi mdi-image"></i>
                      </div>
                    </div>

                    <div className="overflow-hidden me-auto">
                      <h5 className="font-size-13 text-truncate mb-1">
                        Images
                      </h5>
                      <p className="text-muted text-truncate mb-0">
                        176 Files
                      </p>
                    </div>

                    <div className="ml-2">
                      <p className="text-muted">6 GB</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>

            <div className="card border shadow-none mb-2">
              <Link to="#" className="text-body">
                <div className="p-2">
                  <div className="d-flex">
                    <div className="avatar-xs align-self-center me-2">
                      <div className="avatar-title rounded bg-transparent text-danger font-size-20">
                        <i className="mdi mdi-play-circle-outline"></i>
                      </div>
                    </div>

                    <div className="overflow-hidden me-auto">
                      <h5 className="font-size-13 text-truncate mb-1">
                        Video
                      </h5>
                      <p className="text-muted text-truncate mb-0">
                        45 Files
                      </p>
                    </div>

                    <div className="ml-2">
                      <p className="text-muted">4.1 GB</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="card border shadow-none mb-2">
              <Link to="#" className="text-body">
                <div className="p-2">
                  <div className="d-flex">
                    <div className="avatar-xs align-self-center me-2">
                      <div className="avatar-title rounded bg-transparent text-info font-size-20">
                        <i className="mdi mdi-music"></i>
                      </div>
                    </div>

                    <div className="overflow-hidden me-auto">
                      <h5 className="font-size-13 text-truncate mb-1">
                        Music
                      </h5>
                      <p className="text-muted text-truncate mb-0">
                        21 Files
                      </p>
                    </div>

                    <div className="ml-2">
                      <p className="text-muted">3.2 GB</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="card border shadow-none mb-2">
              <Link to="#" className="text-body">
                <div className="p-2">
                  <div className="d-flex">
                    <div className="avatar-xs align-self-center me-2">
                      <div className="avatar-title rounded bg-transparent text-primary font-size-20">
                        <i className="mdi mdi-file-document"></i>
                      </div>
                    </div>

                    <div className="overflow-hidden me-auto">
                      <h5 className="font-size-13 text-truncate mb-1">
                        Document
                      </h5>
                      <p className="text-muted text-truncate mb-0">
                        21 Files
                      </p>
                    </div>

                    <div className="ml-2">
                      <p className="text-muted">2 GB</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="card border shadow-none">
              <Link to="#" className="text-body">
                <div className="p-2">
                  <div className="d-flex">
                    <div className="avatar-xs align-self-center me-2">
                      <div className="avatar-title rounded bg-transparent text-warning font-size-20">
                        <i className="mdi mdi-folder"></i>
                      </div>
                    </div>

                    <div className="overflow-hidden me-auto">
                      <h5 className="font-size-13 text-truncate mb-1">
                        Others
                      </h5>
                      <p className="text-muted text-truncate mb-0">
                        20 Files
                      </p>
                    </div>

                    <div className="ml-2">
                      <p className="text-muted">1.4 GB</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

Storage.propTypes = {
  options: PropTypes.any,
  series: PropTypes.any,
}

export default Storage

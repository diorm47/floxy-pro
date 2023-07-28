import React, { useEffect, useState } from "react"
import {
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import { StatisticsApplicationsChart } from "./JobCharts"

import { useDispatch, useSelector } from "react-redux"
import { getStatisticData } from "../../store/actions"

const StatisticsApplications = () => {
  const [duration, setDuration] = useState("year")

  const dispatch = useDispatch()
  const changeDuration = duration => {
    setDuration(duration)
    dispatch(getStatisticData(duration))
  }

  useEffect(() => {
    dispatch(getStatisticData(duration))
  }, [dispatch])

  const { statistic_data } = useSelector(state => ({
    statistic_data: state.DashboardJob.statistic_data,
  }))

  return (
    <>
      <Col lg={8}>
        <Card>
          <CardBody>
            <div className="d-sm-flex flex-wrap">
              <h4 className="card-title mb-4">
                Statistics Applications
              </h4>
              <div className="ms-auto">
                <Nav pills>
                  <NavItem>
                    <NavLink
                      className={duration === "week" ? "active" : ""}
                      href="#"
                      onClick={() => changeDuration("week")}
                    >
                      Week
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={duration === "month" ? "active" : ""}
                      href="#"
                      onClick={() => changeDuration("month")}
                    >
                      Month
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={duration === "year" ? "active" : ""}
                      href="#"
                      onClick={() => changeDuration("year")}
                    >
                      Year
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
            <StatisticsApplicationsChart
              seriesData={statistic_data}
              dataColors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]'
              dir="ltr"
            />
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default StatisticsApplications

import React from "react"

import ReactApexChart from "react-apexcharts"

import { Card, CardBody, CardTitle } from "reactstrap"

const apexOptions = {
  series: [2132, 1763, 973],
  options: {
    labels: ["В работе", "Свободно", "Заблокировано"],
    colors: ["#556EE6", "#34C38F", "#F46A6A"],
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400,
          },
        },
      },
    ],
  },
}

const MonthlyEarning = () => {
  return (
    <>
      {" "}
      <Card className={"flex-grow-1"}>
        <CardBody>
          <CardTitle className="mb-4">Статистика ботов</CardTitle>

          <ReactApexChart
            options={apexOptions.options}
            series={apexOptions.series}
            type="donut"
          />

          <div className={"d-flex"}></div>
        </CardBody>
      </Card>
    </>
  )
}

export default MonthlyEarning

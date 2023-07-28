import React from "react"

import { PieChart } from "@toast-ui/react-chart"
import TuiChart from "tui-chart"
import "tui-chart/dist/tui-chart.css"
import "./toastui.scss"

var theme = {
  chart: {
    background: {
      color: "#fff",
      opacity: 0,
    },
  },
  title: {
    color: "#8791af",
  },

  plot: {
    lineColor: "rgba(166, 176, 207, 0.1)",
  },
  legend: {
    label: {
      color: "#8791af",
    },
  },
  series: {
    colors: ["#556ee6", "#34c38f", "#f46a6a", "#50a5f1", "#f1b44c"],
  },
}
TuiChart.registerTheme("skoteTheme", theme)

const PieChartToast = props => {
  const data = {
    categories: ["Browser"],
    series: [
      {
        name: "Chrome",
        data: 46.02,
      },
      {
        name: "IE",
        data: 20.47,
      },
      {
        name: "Firefox",
        data: 17.71,
      },
      {
        name: "Safari",
        data: 5.45,
      },
      {
        name: "Etc",
        data: 10.35,
      },
    ],
  }

  const options = {
    chart: {
      width: props.chartWidth,
      height: 380,
      title: "Usage share of web browsers",
    },
    tooltip: {
      suffix: "%",
    },
  }
  return (
    <>
      <PieChart data={data} options={options} />
    </>
  )
}
export default PieChartToast

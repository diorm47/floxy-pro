import { RadialChart } from "@toast-ui/react-chart"
import React from "react"
import TuiChart from "tui-chart"
import "tui-chart/dist/tui-chart.css"
import "./toastui.scss"

const theme = {
  chart: {
    background: {
      color: "#fff",
      opacity: 0,
    },
  },
  title: {
    color: "#8791af",
  },
  xAxis: {
    title: {
      color: "#8791af",
    },
    label: {
      color: "#8791af",
    },
    tickColor: "#8791af",
  },
  yAxis: {
    title: {
      color: "#8791af",
    },
    label: {
      color: "#8791af",
    },
    tickColor: "#8791af",
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
    colors: ["#556ee6", "#34c38f", "#f1b44c", "#f46a6a"],
  },
}
TuiChart.registerTheme("skoteTheme", theme)

const RadialChartToast = props => {
  const data = {
    categories: ["Jan", "Feb", "Mar", "April", "May", "Jun"],
    series: [
      {
        name: "Budget",
        data: [5000, 3000, 5000, 7000, 6000, 4000],
      },
      {
        name: "Income",
        data: [8000, 8000, 7000, 2000, 5000, 3000],
      },
      {
        name: "Expenses",
        data: [4000, 4000, 6000, 3000, 4000, 5000],
      },
      {
        name: "Debt",
        data: [6000, 3000, 3000, 1000, 2000, 4000],
      },
    ],
  }

  const options = {
    chart: {
      title: "Annual Incomes",
      width: props.chartWidth,
      height: 380,
    },
    series: {
      showDot: false,
      showArea: false,
    },
    plot: {
      type: "circle",
    },
    legend: {
      align: "bottom",
    },
  }
  return (
    <>
      <RadialChart data={data} options={options} theme={theme} />
    </>
  )
}
export default RadialChartToast

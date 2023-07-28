import ReactEcharts from "echarts-for-react"
import React from "react"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const Line = ({ dataColors }) => {
  const lineEChartColors = getChartColorsArray(dataColors)

  const options = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      zlevel: 0,
      x: 50,
      x2: 50,
      y: 30,
      y2: 30,
      borderWidth: 0,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: {
        lineStyle: {
          color: "#8791af",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#8791af",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(166, 176, 207, 0.1)",
        },
      },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
      },
    ],
    color: lineEChartColors,
    textStyle: {
      color: ["#8791af"],
    },
  }
  return (
    <>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </>
  )
}
export default Line

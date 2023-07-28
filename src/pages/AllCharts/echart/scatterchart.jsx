import ReactEcharts from "echarts-for-react"
import React from "react"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const Scatter = ({ dataColors }) => {
  const scatterEChartColors = getChartColorsArray(dataColors)

  const options = {
    grid: {
      zlevel: 0,
      x: 50,
      x2: 50,
      y: 30,
      y2: 30,
      borderWidth: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgba(0,0,0,0)",
    },
    xAxis: {
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
    yAxis: {
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
        symbolSize: 10,
        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68],
        ],
        type: "scatter",
      },
    ],
    color: scatterEChartColors,
  }

  return (
    <>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </>
  )
}
export default Scatter

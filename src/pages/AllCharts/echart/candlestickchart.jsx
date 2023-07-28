import ReactEcharts from "echarts-for-react"
import React from "react"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const Candlestickchart = ({ dataColors }) => {
  const candlestickEChartChartColors = getChartColorsArray(dataColors)
  const data = {
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
    color: candlestickEChartChartColors,
    xAxis: {
      data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
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
        type: "k",
        data: [
          [20, 30, 10, 35],
          [40, 35, 30, 55],
          [33, 38, 33, 40],
          [40, 40, 32, 42],
        ],

        itemStyle: {
          normal: {
            color: "#556ee6",
            color0: "#34c38f",
            borderColor: "#556ee6",
            borderColor0: "#34c38f",
          },
        },
      },
    ],
  }

  return (
    <>
      <ReactEcharts style={{ height: "350px" }} option={data} />
    </>
  )
}

export default Candlestickchart

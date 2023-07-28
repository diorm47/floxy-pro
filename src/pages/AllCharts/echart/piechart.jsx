import ReactEcharts from "echarts-for-react"
import React from "react"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const Pie = ({ dataColors }) => {
  const PieEChartColors = getChartColorsArray(dataColors)
  const options = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["Laptop", "Tablet", "Mobile", "Others", "Desktop"],
      textStyle: {
        color: ["#8791af"],
      },
    },
    color: PieEChartColors,
    series: [
      {
        name: "Total sales",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "Laptop" },
          { value: 310, name: "Tablet" },
          { value: 234, name: "Mobile" },
          { value: 135, name: "Others" },
          { value: 1548, name: "Desktop" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  }
  return (
    <>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </>
  )
}
export default Pie

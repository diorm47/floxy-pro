import ReactEcharts from "echarts-for-react"
import React from "react"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const Doughnut = ({ dataColors }) => {
  const doughnutEChartColors = getChartColorsArray(dataColors)

  const options = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: ["Laptop", "Tablet", "Mobile", "Others", "Desktop"],
      textStyle: {
        color: ["#8791af"],
      },
    },
    color: doughnutEChartColors,
    series: [
      {
        name: "Total sales",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center",
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold",
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 335, name: "Laptop" },
          { value: 310, name: "Tablet" },
          { value: 234, name: "Mobile" },
          { value: 135, name: "Others" },
          { value: 1548, name: "Desktop" },
        ],
      },
    ],
  }

  return (
    <>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </>
  )
}
export default Doughnut

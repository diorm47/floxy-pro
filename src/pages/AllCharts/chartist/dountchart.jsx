import React from "react"
import ChartistGraph from "react-chartist"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const dountchart = ({ dataColors }) => {
  var dountchartColors = getChartColorsArray(dataColors)
  const dountChartData = {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7],
  }
  const dountChartOptions = {
    donut: true,
    showLabel: false,
    "stroke-dashoffset": {
      //id: 'anim' + data.index,
      dur: 1000,
      // from: -pathLength + 'px',
      to: "0px",
      // easing: Chartist.Svg.Easing.easeOutQuint,
      fill: "freeze",
    },
    color: dountchartColors,
  }

  return (
    <>
      <ChartistGraph
        style={{ height: "300px" }}
        data={dountChartData}
        options={dountChartOptions}
        type={"Pie"}
      />
    </>
  )
}
export default dountchart

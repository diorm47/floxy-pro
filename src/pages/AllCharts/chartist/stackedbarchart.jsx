import React from "react"
import ChartistGraph from "react-chartist"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const stackedbarchart = ({ dataColors }) => {
  var stackedbarchartColors = getChartColorsArray(dataColors)
  var barChartData = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    series: [
      [800000, 1200000, 1400000, 1300000, 1520000, 1400000],
      [200000, 400000, 500000, 300000, 452000, 500000],
      [160000, 290000, 410000, 600000, 588000, 410000],
    ],
  }
  var barChartOptions = {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function (value) {
        return value / 1000 + "k"
      },
    },
    color: stackedbarchartColors,
  }
  return (
    <>
      <ChartistGraph
        data={barChartData}
        style={{ height: "300px" }}
        options={barChartOptions}
        type={"Bar"}
      />
    </>
  )
}

export default stackedbarchart

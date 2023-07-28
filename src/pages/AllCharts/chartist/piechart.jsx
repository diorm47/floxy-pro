import React from "react"
import ChartistGraph from "react-chartist"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const piechart = ({ dataColors }) => {
  var simplePieChartColors = getChartColorsArray(dataColors)

  const pieChartData = {
    series: [5, 3, 4],
    labels: ["42%", "25%", "33%"],
  }
  const pieChartOptions = {
    showLabel: true,
    color: simplePieChartColors,
  }

  return (
    <>
      <ChartistGraph
        data={pieChartData}
        options={pieChartOptions}
        style={{ height: "300px" }}
        type={"Pie"}
      />
    </>
  )
}
export default piechart

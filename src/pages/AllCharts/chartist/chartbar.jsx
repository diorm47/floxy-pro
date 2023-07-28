import React from "react"
import ChartistGraph from "react-chartist"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const chartbar = ({ dataColors }) => {
  var chatbarchartColors = getChartColorsArray(dataColors)
  var barChartData = {
    labels: [
      "W1",
      "W2",
      "W3",
      "W4",
      "W5",
      "W6",
      "W7",
      "W8",
      "W9",
      "W10",
    ],
    series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]],
  }
  var barChartOptions = {
    high: 10,
    low: -10,
    color: chatbarchartColors,
  }

  return (
    <>
      <ChartistGraph
        style={{ height: "300px" }}
        data={barChartData}
        options={barChartOptions}
        type={"Bar"}
      />
    </>
  )
}
export default chartbar

import React from "react"
import ChartistGraph from "react-chartist"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const lineareachart = ({ dataColors }) => {
  var lineareaChartColors = getChartColorsArray(dataColors)
  const lineChartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[5, 9, 7, 8, 5, 3, 5, 4]],
  }
  const lineChartOptions = {
    low: 0,
    showArea: true,
    color: lineareaChartColors,
  }
  return (
    <>
      <ChartistGraph
        style={{ height: "300px" }}
        data={lineChartData}
        options={lineChartOptions}
        type={"Line"}
      />
    </>
  )
}
export default lineareachart

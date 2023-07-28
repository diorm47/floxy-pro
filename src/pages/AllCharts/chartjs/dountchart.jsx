import React from "react";
import { Doughnut } from "react-chartjs-2";
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor";

const DountChart = ({ dataColors }) => {
  var doughnutChartColors = getChartColorsArray(dataColors);
  const data = {
    labels: ["Desktops", "Tablets"],
    datasets: [
      {
        data: [300, 210],
        backgroundColor: doughnutChartColors,
        hoverBackgroundColor: doughnutChartColors,
        hoverBorderColor: "#fff",
      },
    ],
  };

  return <Doughnut width={751} height={260} data={data} />;
};

export default DountChart;

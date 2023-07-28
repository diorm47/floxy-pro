import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor";

const PieChart = ({ dataColors }) => {
  const PieApexChartColors = getChartColorsArray(dataColors);

  const series = [44, 55, 41, 17, 15];
  const options = {
    chart: {
      height: 320,
      type: "pie",
    },
    series: [44, 55, 41, 17, 15],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: PieApexChartColors,
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: false,
      fontSize: "14px",
      offsetX: 0,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart options={options} series={series} type="pie" height="320" />
  );
};

export default PieChart;

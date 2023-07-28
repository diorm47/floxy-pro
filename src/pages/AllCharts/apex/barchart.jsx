import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor";

const barchart = ({ dataColors }) => {
  const spineareaChartColors = getChartColorsArray(dataColors);

  const series = [
    {
      data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    colors: spineareaChartColors,
    grid: {
      borderColor: "#f1f1f1",
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height="350" />
  );
};

export default barchart;

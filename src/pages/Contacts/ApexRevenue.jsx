import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../components/Common/ChartsDynamicColor";

const ApexRevenue = ({ dataColors }) => {
  const apexprofileChartColors = getChartColorsArray(dataColors);

  const options = {
    chart: {
      height: 300,
      type: "bar",
      toolbar: {
        show: !1,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "14%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      show: !0,
      width: 2,
      colors: ["transparent"],
    },
    series: [
      {
        name: "Revenue",
        data: [42, 85, 101, 56, 37, 105, 38, 58, 92, 82, 72, 32],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: {
        text: "$(thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    colors: apexprofileChartColors,
  };
  const series = [
    {
      name: "Revenue",
      data: [42, 85, 101, 56, 37, 105, 38, 58, 92, 82, 72, 32],
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height="330"
      className="apex-charts"
    />
  );
};

export default ApexRevenue;

import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor";

const OverviewChart = ({ dataColors }) => {
  const apexOverviewColors = getChartColorsArray(dataColors);
  const options = {
    chart: {
      height: 290,
      type: "bar",
      toolbar: {
        show: !1,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "14%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: !1,
    },
    series: [
      {
        name: "Overview",
        data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
      },
    ],
    grid: {
      yaxis: {
        lines: {
          show: !1,
        },
      },
    },
    yaxis: {
      title: {
        text: "% (Percentage)",
      },
    },
    xaxis: {
      labels: {
        rotate: -90,
      },
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      title: {
        text: "Week",
      },
    },
    colors: apexOverviewColors,
  };

  const series = [
    {
      name: "Overview",
      data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
    },
  ];

  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">Overview</CardTitle>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height="290"
          className="apex-charts"
        />
      </CardBody>
    </Card>
  );
};

OverviewChart.propTypes = {
  options: PropTypes.object,
  series: PropTypes.array,
};

export default OverviewChart;

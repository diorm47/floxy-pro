import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor";

const WalletOverView = ({ dataColors }) => {
  const apexwalletChartColors = getChartColorsArray(dataColors);
  const series = [
    {
      type: "area",
      name: "BTC",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
    {
      type: "area",
      name: "ETH",
      data: [28, 41, 52, 42, 13, 18, 29, 18, 36, 51, 55, 35],
    },
    {
      type: "line",
      name: "LTC",
      data: [45, 52, 38, 24, 33, 65, 45, 75, 54, 18, 28, 10],
    },
  ];
  const options = {
    chart: { toolbar: { show: !1 } },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: 2, dashArray: [0, 0, 3] },
    fill: { type: "solid", opacity: [0.15, 0.05, 1] },
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
    colors: apexwalletChartColors,
  };
  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-3">Overview</h4>
        <div>
          <div id="overview-chart" dir="ltr">
            <ReactApexChart
              series={series}
              options={options}
              type="line"
              height={240}
              className="apex-charts"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

WalletOverView.propTypes = {
  wallet: PropTypes.any,
};

export default WalletOverView;

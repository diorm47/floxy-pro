import PropTypes from "prop-types"
import React from "react"
import ReactApexChart from "react-apexcharts"
import getChartColorsArray from "../../components/Common/ChartsDynamicColor"

const StackedColumnChart = ({ dataColors, periodData }: any) => {
  const stackedColumnChartColors = getChartColorsArray(dataColors)
  const options = {
    labels: [
      "Написавшие в группу",
      "Ожидающие добавления в друзья",
      "Отправленные",
    ],
    chart: {
      stacked: !0,
      toolbar: {
        show: 1,
      },
      zoom: {
        enabled: !0,
      },
    },
    plotOptions: {
      bar: {
        endingShape: "rounded",
        horizontal: !1,
        columnWidth: "15%",
      },
    },
    dataLabels: {
      enabled: !1,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      show: true,
      categories: [
        "Янв",
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
        "Ноя",
        "Дек",
      ],
      labels: {
        show: true,
      },
    },
    colors: stackedColumnChartColors,
    legend: {
      position: "bottom",
    },
    fill: {
      opacity: 1,
    },
  }
  return (
    <>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="bar"
        height="359"
        className="apex-charts"
      />
    </>
  )
}

StackedColumnChart.propTypes = {
  periodData: PropTypes.any,
}
export default StackedColumnChart

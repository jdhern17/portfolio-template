import React, { useState, useEffect } from "react";
import { Doughnut, HorizontalBar } from "react-chartjs-2";
import chartObj from "../Chart/chartData.json";
const Chart = ({ category, chartType }) => {
  const chartsTypeList = {
    horizontalBar: HorizontalBar,
    doughnut: Doughnut
  }
  const CurrentChart = chartsTypeList[chartType]
  const chartDesc = chartObj.filter(({chartCategory}) => {
    return chartCategory === category;
  });
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData(chartDesc[0].description);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <CurrentChart data={chartData} />
    </>
  );
};

export default Chart;

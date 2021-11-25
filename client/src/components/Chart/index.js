import React, { useState, useEffect } from "react";
import { Doughnut, HorizontalBar } from "react-chartjs-2";

const Chart = ({ chartType, chartObj }) => {
  const chartsTypeList = {
    horizontalBar: HorizontalBar,
    doughnut: Doughnut
  }
  const CurrentChart = chartsTypeList[chartType]
  // const chartDesc = chartObj.filter(({chartCategory}) => {
  //   return chartCategory === category;
  // });
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData(chartObj);
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

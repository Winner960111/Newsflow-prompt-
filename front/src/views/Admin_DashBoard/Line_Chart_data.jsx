import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "zoomableChart",
      zoom: {
        enabled: true,
        type: "x",
        zoomedArea: {
          fill: {
            color: "#90CAF9",
            opacity: 0.4,
          },
          stroke: {
            color: "#0D47A1",
            opacity: 0.4,
            width: 1,
          },
        },
      },
    },
    xaxis: {
      type: "text",
      categories: ["14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
      labels: {
        datetimeUTC: false,

        style: {
          fontSize: "10px",
        },
      },
    },
    yaxis: {
      decimalsInFloat: 2,
      title: {
        style: {
          color: "#000",
          fontSize: "12px",
          fontWeight: 600,
          fontFamily: undefined,
          cssClass: undefined,
        },
      },
      labels: {
        style: {
          fontSize: "10px",
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Price",
      data: [0, 500, 1000, 200, 2000, 500, 3000],
    },
  ]);

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default LineChart;

// Datetime X-Axis area chart in fuctional Components APEXCHARTS in react js

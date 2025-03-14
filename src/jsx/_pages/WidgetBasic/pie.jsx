import React from "react";
import { Pie } from "react-chartjs-2";

const ChartPie = ({ color1, color2, color3, height, width }) => {
  const data = {
    datasets: [
      {
        data: [45, 25, 30],
        borderWidth: 0,
        backgroundColor: [
          `${color1 ? color1 : "rgba(89, 59, 219, 0.9)"}`,
          `${color2 ? color2 : "rgba(89, 59, 219, 0.7)"}`,
          `${color3 ? color3 : "rgba(89, 59, 219, 0.5)"}`,
        ],
        hoverBackgroundColor: [
          `${color1 ? color1 : "rgba(89, 59, 219, 0.9)"}`,
          `${color2 ? color2 : "rgba(89, 59, 219, 0.7)"}`,
          `${color3 ? color3 : "rgba(89, 59, 219, 0.5)"}`,
        ],
      },
    ],
    labels: ["one", "two", "three"],
  };

  const options = {
    plugins:{
      legend: false,
    },
    responsive: true,    
    maintainAspectRatio: false,
  };

  return (
      <div style={{ height: height ? height : 200 }}>
        <Pie data={data} height={height ? height : 200} options={options} />
      </div>
  );
};

export default ChartPie;

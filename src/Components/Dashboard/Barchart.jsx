import React from "react";
import { Chart as ChartJS, BarElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip, Legend);

export default function Test() {
  const data = {
    labels: [
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
    datasets: [
      {
        label: "Earning",
        data: [
          3000, 2500, 3500, 3000, 3500, 2500, 3500, 4300, 4000, 3000, 3500,
          3900, 1000,
        ],
        backgroundColor: "#0039a6",
        borderWidth: 2,
        borderRadius: 100,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: true,
          },
        },
      ],
    },
  };
  return (
    <div className="barchart ">
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

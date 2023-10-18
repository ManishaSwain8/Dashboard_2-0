import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip, Legend);
ChartJS.register(CategoryScale);

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
        backgroundColor: [
          "#E6E6FA",
          "#E6E6FA",
          "#E6E6FA",
          "#E6E6FA",
          "#E6E6FA",
          "#E6E6FA",
          "#E6E6FA",
          "#0039a6",
          "#E6E6FA",
          "#E6E6FA",
          "#E6E6FA",
          "#E6E6FA",
          "#E6E6FA",
        ],
        borderWidth: 2,
        borderRadius: {
          topLeft: 13,
          topRight: 13,
          bottomLeft: 13,
          bottomRight: 13,
        },
        borderSkipped: false,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,

    scales: {
      x: {
        type: "category",
        ticks: {
          display: true,
        },
        reverse: false,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="barchart ">
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

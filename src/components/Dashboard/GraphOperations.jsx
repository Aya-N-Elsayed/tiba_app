import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  // Extract the data from the image using OCR
  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const data1 = [500, 1500, 2000, 2500, 3000, 3500, 3000];
  const data2 = [500, 1000, 1500, 2000, 2500, 3000, 2500];

  // Define the data and options for the chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data1",
        data: data1,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 3,
      },
      {
        label: "Data2",
        data: data2,
        fill: false,
        backgroundColor: "rgb(255, 205, 86)",
        borderColor: "rgb(255, 205, 86)",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      x: {
        grid: {
          display: false, // Hide the vertical gridlines
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
        line: {tension: 0.5},
        point:{
            width: 4
        }

    }
    }

  // Return the line chart component
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
export default LineChart;
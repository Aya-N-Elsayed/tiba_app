import React from "react";
import { Line } from "react-chartjs-2";
import style from './Dashboard.module.css'


const LineChart = () => {
    // Extract the data from the image using OCR
    const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    const data2 = [1500, 500, 2000, 2000, 1000, 3000, 1700];

    // Define the data and options for the chart
    const data = {
        labels: labels,
        datasets: [

            {
                label: "Data2",
                data: data2,
                fill: false,
                backgroundColor: "rgb(255, 205, 86)",
                borderColor: "#C0DBEF",
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
            line: { tension: 0.5 },
            point: {
                width: 4
            }

        }
    }

    // Return the line chart component
    return (



        <div className='card p-4'>
            <div className="d-flex justify-content-between align-items-center my-3">
                <h5 className={`${style.title} m-0  ms-5`}>احصائيات العمليات  <span className={style.subtitle}> | اليوم</span></h5>
                <img role="button" src="/images/VectorGray.svg" alt=""></img>
            </div>
            <Line data={data} options={options} />
        </div>
    );
};
export default LineChart;

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import style from './Dashboard.module.css'
import { Pie } from 'react-chartjs-2';


import React from 'react'
export function GraphGender({ data }) {
  // The labels for the pie chart
  const labels = [' ذكر', 'أنثى'];

  // The options for the chart
  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: false ,
          font: {
            size:16,
          },
          generateLabels(chart) {
            // Get the dataset and the total sum of values
            const dataset = chart.data.datasets[0];
            const total = dataset.data.reduce((a, b) => a + b, 0);
            // Return an array of label objects
            return labels.map((label, index) => {
              // Get the value and percentage for each slice
              const value = dataset.data[index];
              const percentage = value / total * 100;
              // Return a label object with the text and color
              return {
                text: `${label}\n${value} / ${percentage.toFixed(0)}%`,
                fillStyle: dataset.backgroundColor[index],
                strokeStyle: dataset.borderColor[index],
                lineWidth: dataset.borderWidth[index],
                hidden: false,
                index: index
              };
            });
          }
        }
      }
    },
    cutout: '70%', // increase the cutout percentage to make the chart thinner
    onClick: (event, elements) => {
      // change the border color or animate the slice on click
      if (elements.length > 0) {
        const index = elements[0].index;
        const chart = elements[0].chart;
        const slice = chart.data.datasets[0];
        slice.borderColor[index] = '#000'; // change border color to black
        slice.borderWidth[index] = 15; // increase border width
        slice.offset[index] = 20; // pull out the slice from the center
        chart.update(); // update the chart
      }
    },
    rotation: -Math.PI * -7// rotate the chart by -90 degrees
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ['#0a81dc', '#8bc9f9'], // change colors to gray shades
        borderColor: ['#fff', '#fff'], // add white borders
        borderWidth: [1, 1], // set border width
        borderRadius: [15],
        offset: [0, 0], // set offset from center
        weight: 4,
        
      }
    ]

  };


  return (
    <>        <div className='card p-4'>
      <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
        <h5 className={`${style.title} m-0  ms-5`}>نوع المرضى  <span className={style.subtitle}> | اليوم</span></h5>
        <img role="button" src="/images/VectorGray.svg" alt=""></img>
      </div>

        <Pie data={chartData} options={options} />
        {labels.map((label, index) => (
          <p key={index} className={`bg-danger entry-value-${index}`} style={{ display: 'none' }}>{label}: {data[index]}</p>
        ))}
      </div></>

  );
}


import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import style from './Dashboard.module.css';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';


export function GraphGender({ data }) {

const labels = [' ذكر', 'أنثى'];

const centerTextPlugin = {
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    ctx.save();

    const width = chart.width;
    const height = chart.height;
    const fontSizeLarge = 20;  // For the number 1200
    const fontSizeSmall = 10;  // For the label

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    const sum = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
    const textNumber = "1200";
    const textLabel = "مريض";

    // Draw the number
    ctx.font = fontSizeLarge + "px ";
    ctx.fillText(textNumber, width / 2, (height / 2) - (fontSizeSmall));

    // Draw the label
    ctx.font = fontSizeSmall + "px ";
    ctx.fillText(textLabel, width / 2, (height / 2) + (fontSizeSmall));

    ctx.restore();
  }
};

  const options = {
    cutout: '70%',

  plugins: {

    datalabels: {
      color: '#fff',
      font: {
        size:6
      },
      anchor: 'end',
      align: 'end'
    },
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        font: {
          size: 16,
        },
        generateLabels(chart) {
          const dataset = chart.data.datasets[0];
          const total = dataset.data.reduce((a, b) => a + b, 0);
          return labels.map((label, index) => {
            const value = dataset.data[index];
            const percentage = value / total * 100;
            return {
              text: `${label} - ${value} (${percentage.toFixed(0)}%)`,
              fillStyle: dataset.backgroundColor[index],
              strokeStyle: dataset.borderColor[index],
              lineWidth: dataset.borderWidth[index],
              hidden: false,
              index: index
            };
          });
        }
      }
    },

    
  }
};

const chartData = {
  labels: labels,
  datasets: [
    {
      data: data, // Assuming data is defined elsewhere
      backgroundColor: ['#0a81dc', '#8bc9f9'],
      borderColor: ['#fff', '#fff'],
      borderWidth: [0, 0],
      borderRadius: [50, 10],
      offset: [-10, -10],
      weight: 4,
    }
  ]
};


  return (
    <div className='card p-4'>
      <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
        <h5 className={`${style.title} m-0  ms-5`}>نوع المرضى  <span className={style.subtitle}> | اليوم</span></h5>
        <img role="button" src="/images/VectorGray.svg" alt="" />
      </div>
      <Doughnut data={chartData} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
}

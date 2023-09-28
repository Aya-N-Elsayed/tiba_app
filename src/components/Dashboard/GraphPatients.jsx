import React from 'react'

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import style from './Dashboard.module.css'



export const GraphPatients = () => {


    const data = {
        labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],

        datasets: [
            {
                label: 'شبين',
                data: [8000, 1000, 1200, 1900, 300, 500, 2000],
                backgroundColor: '#328BCD',
                pointStyle: 'circle'
            }
            ,

            {
                label: 'خارج شبين',
                data: [4000, 2000, 5000, 700, 600, 80, 1000],
                backgroundColor: '#C0DBEF',
                pointStyle: 'circle'
            }
        ],


    };

    const options = {

        scales: {
            x: {
              grid: {
                display: false
              }
            }
          },


        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                }
            }
        }
    };


    return (
        <div className='card p-4'>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <h5 className={`${style.title} m-0  ms-5`}>احصائيات المرضى  <span className={style.subtitle}> | اليوم</span></h5>
                <img role="button" src="./images/VectorGray.svg" alt=""></img>
            </div>
            <Bar data={data}  options={options}/>
        </div>
    )
}

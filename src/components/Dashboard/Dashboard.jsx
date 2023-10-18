import React from 'react'
import { StatusCard } from './StatusCard'

import { GraphPatients } from './GraphPatients'
import LineChart from './GraphOperations'
import { GraphGender } from './GraphGender'
import { GraphLatest } from './GraphLatest'
import style from './Dashboard.module.css'


export const Dashboard = () => {
  const patientData = [70, 30];

  return (
    <>
      <div className='row mt-4 gx-'>

        <div className="col-md-3 ">
          <StatusCard title={"مجموع الحجوزات"} number={10} color={"green"} status={" 50%"} />

        </div>

        <div className="col-md-3">
          <StatusCard title={" العمليات المنتهية "} number={130} color={"red"} status={" 50%"} />


        </div>

        <div className="col-md-3">
          <StatusCard title={" حالات الانتظار"} number={20} color={"green"} status={" 50%"} />

        </div>

        <div className="col-md-3">
          <StatusCard title={" الحجوزات الملغية"} number={70} color={"red"} status={" 50%"} />


        </div>





      </div>


      
      <div className="row mt-4 ">

        <div className="col-md-4  ">
          <div className="h-100">
            <GraphGender data={patientData} />
          </div>
        </div>

        <div className="col-md-8 ">
          <div className="">
            <GraphPatients />
          </div>
        </div>

      </div>




      <div className="row mt-4">
        <div className="col-md-4">
          <div className='card p-4 h-100  '>
            <div className="d-flex justify-content-between align-items-center my-3 mb-5">
              <h5 className={`${style.title} m-0  ms-5`}  >  أخر الاحصائيات    <span className={style.subtitle}> | اليوم</span></h5>
              <img role="button" src="/images/VectorGray.svg" alt=""></img>
            </div>
            <GraphLatest day="ملفات قديمة" percentage={60} />
            <GraphLatest day="حالات جديدة" percentage={20} />
            <GraphLatest day="حالات دكاترة" percentage={90} />
          </div>
        </div>
        <div className="col-md-8">
          <LineChart />
        </div>




      </div>


    </>
  )
}

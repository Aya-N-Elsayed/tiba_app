import React from 'react'
import { StatusCard } from './StatusCard'
import ProgressBar from './GraphLatest';
import { GraphPatients } from './GraphPatients'
import PieChart from './GraphGender';
import LineChart from './GraphOperations';
import { Chart, LinearScale, CategoryScale, BarElement, PointElement, LineElement, ArcElement } from 'chart.js';
Chart.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, ArcElement);

export const Dashboard = () => {
  const patientData = [70, 30];
  return (
    <>
      <div className='row mt-4 gx-1'>

        <div className="col-md-3">
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

      <div className="row m-4 gx-1">
      <div className="card col-md-3">
          <h4>نوع المرضى</h4>
          <PieChart data={patientData} />
          </div>


        <div className="card col-md-9">
          <GraphPatients />
        </div>
      
      </div>

      <div className="row m-4 gx-1">
        <div className="card col-md-3">
          <h4>آخر الإحصائيات</h4>
          <ProgressBar day="ملفات قديمة" percentage={60} />
          <ProgressBar day="حالات جديدة" percentage={20} />
          <ProgressBar day="حالات دكاترة" percentage={90} />
        </div>

        <div className="card col-md-6">
          <LineChart/>
          </div>
      </div>


      
      
      
    </>
  )
}

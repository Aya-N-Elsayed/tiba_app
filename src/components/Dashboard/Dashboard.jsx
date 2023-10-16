import React from 'react'
import { StatusCard } from './StatusCard'

import { GraphPatients } from './GraphPatients'

export const Dashboard = () => {
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

      <div className="row mt-4">
        <div className="col-md-8">
          <GraphPatients />
        </div>



      </div>


    </>
  )
}

import React from 'react'
import { Filter } from "./Filter/Filter"
import style from '../operationPg/Operation.module.css'
import { Table } from './Table/Table'
import { PopUp } from '../PopUp/PopUp'

export const Doctors = ({setShowPopup}) => {
  return (
    <section className="container ">
          
    <div
      className={`${style.booking} d-flex justify-content-between align-items-center`}
    >
      <h3>اﻷطباء</h3>
      <button
          type="button" onClick={()=>
            setShowPopup(true)
          }
        className="btn  d-flex flex-row-reverse justify-content-center align-items-center "
      >
        <p className='m-0'>   إضافة طبيب</p>
        <img className="ms-2" alt="Image" src="./images/add-circle.svg" />
      </button>
    </div>

    <Filter />

    <Table />
  </section>
  )
}

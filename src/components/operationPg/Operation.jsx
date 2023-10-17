import style from './Operation.module.css'
import { Filter } from "./Filter/Filter"
import { Table } from "./Table/Table"
import { useContext, useEffect } from 'react'
import { PopupContext } from '../../context/PopUpContext'
import { BackBtn } from '../Btns/BackBtn'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

import { baseURL } from '../../App'
import { ThreeDots } from 'react-loader-spinner'




export const OperationPg = () => {
  const { setShowPopup, showPopup } = useContext(PopupContext);

  const { month, year, day } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const triggerRefresh = () => {
    console.log("triggerRefresh, shouldRefetch: ", shouldRefetch)
    setShouldRefetch(!shouldRefetch);
  }
  useEffect(() => {
    console.log("useEffect, shouldRefetch: ", shouldRefetch)
    setLoading(true)
    axios.get(`${baseURL}reservations`, {
      params: {
        year: year,
        month: month,
        day: day
      }
    }).then((res) => {
      console.log("Done fetching ")
      setData(res.data)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }
    , [shouldRefetch])

  return (
    <div className={`${style.OperationPg} container`}>
      <div
        className={`${style.booking} d-flex justify-content-between align-items-center`}
      >
        <h3>حجز عملية : <span className='text-muted fw-lighter fs-5'>ليوم {year}/{month}/{day}</span></h3> 
  
        <div className="d-flex align-items-center ">
          <BackBtn />
          <button
            type="button" onClick={() => {

              setShowPopup({
                ...showPopup, "option": 'o', "data": {
                  "date": `${year}-${month}-${day}`,
                  "refetchOperation": triggerRefresh,
                  "reserv": null
                }
})
            }}
            className={`${style.bookBtn}  me-2  d-flex flex-row-reverse justify-content-center align-items-center `}
          >
            <p className='m-0'>حجز عملية</p>
            <img className="ms-2" alt="Image" src="/images/add-circle.svg" />
          </button>
        </div>

      </div>

      <Filter />

      {loading ?  <div className=' d-flex justify-content-center'>
        <ThreeDots color="var(--logo-colortypap-lightnesscolor)" />
      </div> : <Table data={data} refetchOperation={triggerRefresh} /> }
    </div>
  );
}
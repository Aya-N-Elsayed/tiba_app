import style from './Operation.module.css'
import { Filter } from "./Filter/Filter"
import { Table } from "./Table/Table"
import { useContext } from 'react'
import { PopupContext } from '../../context/PopUpContext'
import { BackBtn } from '../Btns/BackBtn'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { baseURL } from '../../App'
import { ThreeDots } from 'react-loader-spinner'




export const OperationPg = () => {
  const { setShowPopup, showPopup } = useContext(PopupContext);

  const { month, year, day } = useParams();
  console.log(month, year, day)

  // ? Geting All doctor

  // # Functions Using Axios to call APIs //

 async function getReservation() {
    return await axios.get(`${baseURL}reservations`, {

      params: {
        year: year,
        month: month,
        day: day
      }
    });
    console.log("X IS :",x)
    return x;
  }

  const { data, isLoading, refetch } = useQuery("allReservation", getReservation, {
  });



  // if (refetchDoctors) { refetch(); } // refetching data whenever save doctor btn is clicked




  // ? //


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
                  "refetchOperation": refetch,
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

      {isLoading ?  <div className=' d-flex justify-content-center'>
        <ThreeDots color="var(--logo-colortypap-lightnesscolor)" />
      </div> : <Table data={data?.data} refetchOperation={refetch} /> }
    </div>
  );
}
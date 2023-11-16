import style from './Operation.module.css'
import { Filter } from "./Filter/Filter"
import { Table } from "./Table/Table"
import { useContext } from 'react'
import { PopupContext } from '../../context/PopUpContext'
import { BackBtn } from '../Btns/BackBtn'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { ThreeDots } from 'react-loader-spinner'
import { getReservation } from '../Utilities/Operation/DataFetching'




export const OperationPg = () => {
  const { setShowPopup, showPopup } = useContext(PopupContext);

  const params = useParams();
  const pathDetails = params['*'].split('/');

  const year = pathDetails[1];
  const month = pathDetails[0];
  const day = pathDetails[2];
  // ? Geting All doctor

  // # Functions Using Axios to call APIs //

  const { data, isLoading, refetch } = useQuery("allReservation", () => getReservation({year,month,day}), {
  });



  console.log({data})



  // ? //


  return (
    <div className={`${style.OperationPg} container`}>



      <div
        className={`${style.booking} d-flex justify-content-between align-items-center`}
      >
        <h3  className={year?'d-block':'d-none' }>حجز عملية : <span className='text-muted fw-lighter fs-5'>ليوم {year}/{month}/{day}</span></h3> 
  
        <div className="d-flex align-items-center me-auto">
          <BackBtn />
          <button   type="button" onClick={() => {

              setShowPopup({
                ...showPopup, "option": 'o', "data": {
                  "date": `${year}-${month}-${day}`,
                  "refetchOperation": refetch,
                  "reserv": null  }})
          
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
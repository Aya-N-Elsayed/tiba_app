import style from './Operation.module.css'
import { Filter } from "./Filter/Filter"
import { Table } from "./Table/Table"
import { useContext } from 'react'
import { PopupContext } from '../../context/PopUpContext'
import { BackBtn } from '../Btns/BackBtn'




export const OperationPg = () => {
   const {setShowPopup}=useContext(PopupContext);
  return (
    <div className={`${style.OperationPg} container`}>
      
  
      
        <div
          className={`${style.booking} d-flex justify-content-between align-items-center`}
        >
        <h3>حجز عملية</h3>
        <div className="d-flex align-items-center ">
          <BackBtn />
          <button
          type="button" onClick={() => {
            
            setShowPopup('o')
            }}
            className={`${style.bookBtn}  me-2  d-flex flex-row-reverse justify-content-center align-items-center `}
          >
            <p className='m-0'>حجز عملية</p>
            <img className="ms-2" alt="Image" src="./images/add-circle.svg" />
          </button>
        </div>

        </div>

        <Filter />

      <Table />
      
      
      </div>
    );
  }
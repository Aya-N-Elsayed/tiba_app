import { useContext } from "react";
import { BookBtn } from "../Btns/BookBtn";
import { useNavigate } from 'react-router-dom';
import { PopupContext } from "../../context/PopUpContext";


import { baseURL } from "../../App";
import { useQuery } from "react-query";
import axios from "axios";
import Swal from "sweetalert2";


export const Card = ({month , day, year,apiData, monthNum, refetchReserve}) => {
  const navigation = useNavigate();

  // console.log("data inside the card ", apiData) 
  
  const {setShowPopup, showPopup } = useContext(PopupContext);
  function handleClick() {
    setShowPopup({
      ...showPopup, "option": 'o', "data": {
        "date": `${year}-${monthNum}-${day}`,
        "refetchReserve": refetchReserve,
        "reserv":null
        
    }});

    
  }





  return (
    <div className="card h-100 ">
      <div className="card-body text-end p-0">
        <h6 className="weekday text-center">{ apiData?.Weekday??'Disabled'}</h6>
        <div className="date text-center d-flex justify-content-center">
        <h5 className="day ms-1"> {day} </h5>

          <h5 className="month">{month}</h5>
        </div>
        <div className="cardText">
          <p>جميع العمليات</p>
          <p className="operations numbers mb-3">{ apiData?.Reservations??'-'}</p>
        </div>

        <div className="d-flex  justify-content-between">
          <div className="cardText  ">
            <p>تم تأكيدها</p>
            <div className="d-flex  justify-content-start">
              <img className="icons " alt="Image" src="/images/Checkbox.svg" />
              <p className="confirmed numbers  me-2"> { apiData?.Confirmed}</p>
            </div>
          </div>

          <div className="cardText ">
            <p>لم يتم تأكدها</p>
            <div className="d-flex  justify-content-start">
              <img className="icons" alt="Image" src="/images/close.svg" />
              <p className="notConfirmed numbers me-2">{apiData?.Unconfirmed}</p>
            </div>
          </div>
        </div>
        {/* buttons */}
        <button
          type="button" onClick={() =>
          navigation(`/operations/${monthNum}/${year}/${day}`)
          }
          className={`btn detailsBtn d-flex flex-row-reverse justify-content-center w-100 align-items-center ${apiData?.Weekday ? '' : 'disabled'}`}
          >
          <p>عرض التفاصيل</p>
          <img className="btnicons " alt="Image" src="/images/eye.svg" />
          
        </button>
        <BookBtn handleClick={handleClick} classDisable={apiData?.Weekday ? '' : 'disabled'} />
      </div>
    </div>
  );
};

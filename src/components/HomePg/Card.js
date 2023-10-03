import { useContext } from "react";
import { BookBtn } from "../Btns/BookBtn";
import { useNavigate } from 'react-router-dom';
import { PopupContext } from "../../context/PopUpContext";


import { baseURL } from "../../App";
import { useQuery } from "react-query";
import axios from "axios";


export const Card = ({month , day, year,apiData, monthNum}) => {
  const navigation = useNavigate();
  
  const {setShowPopup } = useContext(PopupContext);
  function handleClick() {;
    setShowPopup({"option":'o'});
   
    
  }





  return (
    <div className="card ">
      <div className="card-body text-end p-0">
        <h6 className="weekday text-center">{ apiData?.Weekday??'السبت'}</h6>
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
          className="btn detailsBtn d-flex flex-row-reverse justify-content-center w-100 align-items-center "
        >
          <p>عرض التفاصيل</p>
          <img className="btnicons " alt="Image" src="/images/eye.svg" />
          
        </button>
        <BookBtn handleClick={handleClick} />
      </div>
    </div>
  );
};

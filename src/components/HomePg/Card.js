import { useContext } from "react";
import { BookBtn } from "../Btns/BookBtn";
import { useNavigate } from 'react-router-dom';
import { PopupContext } from "../../context/PopUpContext";



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

  function showDayReservation({monthNum,year,day}) {
    navigation(`/operations/${monthNum}/${year}/${day}`)
  }





  return (
    <div className="card h-100 calenderCard" >
      <div className="card-body  p-0" onClick={year === '-' ? undefined : () => showDayReservation({monthNum, year, day})}
>
        <h6 className="weekday text-center">{ apiData?.Weekday??day}</h6>
        <div className="date text-center d-flex justify-content-center">
        <h5 className="day ms-1 mb-0 month"> {day} </h5>
          <h5 className="month">{month}</h5>
        </div>


        <div className={year==='-'?'d-none':'d-flex justify-content-between'}>
          <div className="cardText ms-4">

            <div className="d-flex  ">

              <img className="icons " alt="Image" src="/images/EllipseCirle.svg"/>
              <p className="operations numbers ">{ apiData?.Reservations??'-'}</p>

              </div>

        </div>
          <div className="cardText ms-4 ">
            <div className="d-flex  ">
              <img className="icons " alt="Image" src="/images/Checkbox.svg" />
              <p className="confirmed numbers  "> { apiData?.Confirmed??'-'}</p>
            </div>
          </div>

          <div className="cardText ">
            <div className="d-flex  ">
              <img className="icons" alt="Image" src="/images/close.svg" />
              <p className="notConfirmed numbers ">{apiData?.Unconfirmed??'-'}</p>
            </div>
          </div>
        </div>

      </div>
      {year === '-' ? '' : <BookBtn handleClick={handleClick} />}

    </div>
  );
};

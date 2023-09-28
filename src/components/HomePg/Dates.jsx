import { useState } from "react";



export const monthArr = [
  '', 'يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

export const Dates = ({month, setmonth}) => {

  const [year, setyear] = useState(new Date().getFullYear());

  function handlePre() {
    if (month === 1) {
      setmonth(12);
      setyear(year - 1);
    }

    else {
      setmonth(month - 1);
    }

  }


  function handlePost() {
    setmonth(month === 12 ? 1 : month + 1)
    if (month === 12) {
      setmonth(1);
      setyear(year + 1);
    }

    else {
      setmonth(month + 1);
    }
  }





  return (
    <div className="datesControler d-flex  justify-content-evenly align-items-center">
      <div onClick={handlePre} className="prev">
        <button
          type="button"
          className="  d-flex   align-items-center "
        >
          <img
            className="btnicons "
            alt="Image"
            src="./images/arrow-right.svg"
          />
          <p className="month">{month === 1 ? monthArr[12] : monthArr[month - 1]}</p>
          <p className="date"><span>{month === 1 ? 12 : month - 1}</span>/{month === 1 ? year - 1 : year}</p>
        </button>
      </div>

      <div className="currentMonth dropdown ">
        <button className=" dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         <span className="ms-2"> {monthArr[month]} {month}/{year}</span>
        </button>
        <ul className="dropdown-menu me-3 overflow-scroll text-center " style={{ height: '200%' }} aria-labelledby="dropdownMenuButton1">

          {monthArr.map((mnth, indx)=>(
            <li className="dropdown-item" onClick={() => { setmonth(indx) }}>{mnth}</li>
          ))}

        </ul>
      </div>

      <div onClick={handlePost} className="next">
        <button
          type="button"
          className="  d-flex align-items-center "
        >

          <p className="month"> {month === 12 ? monthArr[1] : monthArr[month + 1]} </p>
          <p className="date"><span>{month === 12 ? 1 : month + 1}</span>/ {month === 12 ? year + 1 : year}</p>
          <img
            className="btnicons "
            alt="Image"
            src="./images/arrow-left.svg"
          />

        </button>
      </div>
    </div>
  );
}

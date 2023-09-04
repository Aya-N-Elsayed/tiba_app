

export const Card = () => {
  return (
    <div className="card ">
      <div className="card-body text-end p-0">
        <h6 className="weekday text-center">السبت</h6>
        <div className="date text-center d-flex justify-content-center">
        <h5 className="day ms-1"> 1 </h5>

          <h5 className="month">أغسطس</h5>
        </div>
        <div className="cardText">
          <p>جميع العمليات</p>
          <p className="operations numbers mb-3">16</p>
        </div>

        <div className="d-flex  justify-content-between">
          <div className="cardText  ">
            <p>تم تأكيدها</p>
            <div className="d-flex  justify-content-start">
              <img className="icons " alt="Image" src="./images/Checkbox.svg" />
              <p className="confirmed numbers  me-2"> 16</p>
            </div>
          </div>

          <div className="cardText ">
            <p>لم يتم تأكدها</p>
            <div className="d-flex  justify-content-start">
              <img className="icons" alt="Image" src="./images/close.svg" />
              <p className="notConfirmed numbers me-2">6</p>
            </div>
          </div>
        </div>
        {/* buttons */}
        <button
          type="button"
          className="btn detailsBtn d-flex flex-row-reverse justify-content-center w-100 align-items-center "
        >
          <p>عرض التفاصيل</p>
          <img className="btnicons " alt="Image" src="./images/eye.svg" />
          
        </button>
        <button
          type="button"
          className="btn bookBtn d-flex flex-row-reverse justify-content-center w-100"
        >
          
          حجز عملية
          <img className="btnicons" alt="Image" src="./images/add.svg" />
        </button>
      </div>
    </div>
  );
};

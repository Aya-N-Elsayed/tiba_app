

export const Dates = () => {
  return (
    <div className="datesControler d-flex flex-row-reverse justify-content-evenly align-items-center">
      <div className="prev">
        <button
          type="button"
                  className="  d-flex flex-row-reverse  align-items-center "
        >
          <img
            className="btnicons "
            alt="Image"
            src="./images/arrow-right.svg"
          />
          <p className="month">يوليو</p>
          <p className="date">7/2023</p>
        </button>
          </div>
          
        <div className="currentMonth dropdown">
        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           أغسطس 8/2023
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </div>

      <div className="next">
        <button
          type="button"
          className="  d-flex align-items-center "
        >
          <img
            className="btnicons "
            alt="Image"
            src="./images/arrow-left.svg"
          />
          <p className="date">9/2023</p>
          <p className="month">سبتمبر</p>
        </button>
      </div>
    </div>
  );
}

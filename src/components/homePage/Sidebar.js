

export const Sidebar = () => {
  return (
      <div className="sidebar"> 
        <img className=" logoimg" alt="tiba logo" src="./images/image-1.png"/>
        <ul class="nav flex-column text-end">
              <li class="nav-item d-flex flex-row-reverse align-items-center">
                  <img className="icons" alt="Image" src="./images/home-trend-up.svg"/>
                  <a class=" active" aria-current="page" href="#">الرئيسة</a>
            </li>
              <li class="nav-item d-flex flex-row-reverse align-items-center">
                  <img className="icons" alt="Image" src="./images/receipt-2.svg"/>
                  <a class="" href="#">حجز عملية</a>
            </li>
              <li class="nav-item d-flex flex-row-reverse align-items-center">
                <img className="icons" alt="Image" src="./images/profile-2user.svg"/>
                <a class="" href="#">الأطباء</a>
            </li>

         </ul>
    </div>   
  )
}
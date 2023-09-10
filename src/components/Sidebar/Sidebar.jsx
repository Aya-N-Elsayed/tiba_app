
import { Link } from "react-router-dom"
export const Sidebar = () => {
  return (
    <div className="sidebar   ">
      
        <img className=" logoimg" alt="tiba logo" src="./images/image-1.png"/>
      <ul class="nav flex-column text-end p-0">
        
              <li class="nav-item d-flex  align-items-center ">
                  <img className="icons" alt="Image" src="./images/home-trend-up.svg"/>
                  <Link class=" active" aria-current="page" to='/home'>الرئيسة</Link>
            </li>
              <li class="nav-item d-flex  align-items-center ">
                  <img className="icons" alt="Image" src="./images/receipt-2.svg"/>
                  <Link class="" to='/operations'>حجوزات</Link>
            </li>
              <li class="nav-item d-flex  align-items-center ">
                <img className="icons" alt="Image" src="./images/profile-2user.svg"/>
                <Link class="" to='/doctors'>الأطباء</Link>
            </li>

      </ul>
      
      {/* <img className="w-100" src="./images/frame.svg" alt="" /> */}
    </div>   
  )
}

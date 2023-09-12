
import { Link } from "react-router-dom"
export const Sidebar = () => {
  return (
    <div className="sidebar  ">
      
        <img className=" logoimg" alt="tiba logo" src="./images/image-1.png"/>
      <ul className="nav navbar-nav flex-column text-end p-0">
        
              <li className="nav-item d-flex  align-items-center ">
                  <img className="icons" alt="Image" src="./images/home-trend-up.svg"/>
                  <Link className="nav-link active" aria-current="page" to='home'>الرئيسة</Link>
            </li>
              <li className="nav-item d-flex  align-items-center ">
                  <img className="icons" alt="Image" src="./images/receipt-2.svg"/>
                  <Link className="nav-link" to='operations'>حجوزات</Link>
            </li>
              <li className="nav-item d-flex  align-items-center ">
                <img className="icons" alt="Image" src="./images/profile-2user.svg"/>
                <Link className="nav-link" to='doctors'>الأطباء</Link>
            </li>

      </ul>
      
      {/* <img className="w-100" src="./images/frame.svg" alt="" /> */}
    </div>   
  )
}

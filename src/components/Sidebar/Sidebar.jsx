import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

const toggleSidebar = () => {
  setShowSidebar(!showSidebar);
}


  return (  <>
<button id="sidebarToggle" onClick={toggleSidebar} className="d-md-none btn btn-outline-primary"><img src="./images/bars-solid.svg" alt="" /></button>
<div className={`sidebar ${showSidebar || window.innerWidth >= 768 ? 'd-block' : 'd-none d-md-block'}`}>
  

      <img className="logoimg" alt="tiba logo" src="/images/image-1.png" />
      <ul className="nav navbar-nav flex-column text-end p-0">
        <li className={`nav-item home d-flex align-items-center ${location.pathname === '/' ? 'activeLink' : ''} ${location.pathname === '/dashboard' ? 'activeLink' : ''}`}>
          <img className="icons" alt="Image" src="/images/home-trend-up.svg" />
          <NavLink exact activeClassName="active" to="/dashboard">
            الرئيسة
          </NavLink>
        </li>
        <li className={`nav-item operations d-flex align-items-center ${location.pathname === '/home' || location.pathname.startsWith('/operations') ? 'activeLink' : ''}`}>
          <img className="icons" alt="Image" src="/images/receipt-2.svg" />
          <NavLink exact activeClassName="active" to="/home">
            حجوزات
          </NavLink>
        </li>
        <li className={`nav-item doctors d-flex align-items-center ${location.pathname === '/doctors' ? 'activeLink' : ''}`}>
          <img className="icons" alt="Image" src="/images/doctorIcon.svg" />
          <NavLink exact activeClassName="active" to="/doctors">
            الأطباء
          </NavLink>
        </li>

        <li className={`nav-item patients d-flex align-items-center ${location.pathname === '/patients' ? 'activeLink' : ''}`}>
          <img className="icons" alt="Image" src="/images/profile-2user.svg" />
          <NavLink exact activeClassName="active" to="/patients">
            المرضى
          </NavLink>
        </li>
      </ul>

    </div>
    </>
  );
};

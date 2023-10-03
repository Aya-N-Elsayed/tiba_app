import { NavLink, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <img className="logoimg" alt="tiba logo" src="/images/image-1.png" />
      <ul className="nav navbar-nav flex-column text-end p-0">
        <li className={`nav-item home d-flex align-items-center ${location.pathname === '/' ? 'activeLink' : ''} ${location.pathname === '/dashboard' ? 'activeLink' : ''}`}>
          <img className="icons" alt="Image" src="/images/home-trend-up.svg" />
          <NavLink exact activeClassName="active" to="/dashboard">
            الرئيسة
          </NavLink>
        </li>
        <li className={`nav-item operations d-flex align-items-center ${location.pathname === '/home' ? 'activeLink' : ''}`}>
          <img className="icons" alt="Image" src="/images/receipt-2.svg" />
          <NavLink exact activeClassName="active" to="/home">
            حجوزات
          </NavLink>
        </li>
        <li className={`nav-item doctors d-flex align-items-center ${location.pathname === '/doctors' ? 'activeLink' : ''}`}>
          <img className="icons" alt="Image" src="/images/profile-2user.svg" />
          <NavLink exact activeClassName="active" to="/doctors">
            الأطباء
          </NavLink>
        </li>
      </ul>

    </div>
  );
};

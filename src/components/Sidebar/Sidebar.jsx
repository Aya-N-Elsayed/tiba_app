
import { Link } from "react-router-dom"
export const Sidebar = () => {

  function activeLink(link) {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(`.${link}`).classList.add("active");
    console.log(`${link}`);
  }
  return (
    <div className="sidebar  ">
      <img className=" logoimg" alt="tiba logo" src="./images/image-1.png" />
      <ul className="nav navbar-nav flex-column text-end p-0">
        <li className="nav-item home active d-flex  align-items-center ">
          <img className="icons" alt="Image" src="./images/home-trend-up.svg" />
          <Link
            className="nav-link "
            aria-current="page"
            onClick={function () {
              activeLink("home");
            }}
            to="dashboard"
          >
            الرئيسة
          </Link>
        </li>
        <li className="nav-item  operations d-flex  align-items-center ">
          <img className="icons" alt="Image" src="./images/receipt-2.svg" />
          <Link
            className="nav-link "
            onClick={function () {
              activeLink("operations");
            }}
            to="home"
          >
            حجوزات
          </Link>
        </li>
        <li className="nav-item doctors d-flex  align-items-center ">
          <img className="icons" alt="Image" src="./images/profile-2user.svg" />
          <Link
            className="nav-link "
            onClick={function () {
              activeLink("doctors");
            }}
            to="doctors"
          >
            الأطباء
          </Link>
        </li>
      </ul>

      {/* <img className="w-100" src="./images/frame.svg" alt="" /> */}
    </div>
  );
}

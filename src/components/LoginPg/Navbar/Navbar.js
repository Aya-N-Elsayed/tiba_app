import { useContext } from "react";
import { NewOperationBtn } from "../../Btns/NewOperationBtn";
import { Bookfn } from "../../Utilities/Popup/HandlePopups";
import { PopupContext } from "../../../context/PopUpContext";
import { NewPatientBtn } from "../../Btns/NewPatientBtn";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const { setShowPopup, showPopup } = useContext(PopupContext);
  const location = useLocation();


  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav  d-flex align-items-center  me-auto p-0    ${location.pathname==='/doctors' || location.pathname === '/patients'? 'd-none':''}`}>
            <li className="nav-item">
              <NewOperationBtn handleClick={() => Bookfn({ type: "o", setShowPopup, showPopup })}
             
                />
            </li>

            <li className="nav-item me-3">
                <NewPatientBtn
                  setShowPopup={setShowPopup}
                showPopup={showPopup}
                style="newPatientGeneralBtn"
                />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

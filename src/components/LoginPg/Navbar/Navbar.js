import { useContext } from "react";
import { NewOperationBtn } from "../../Btns/NewOperationBtn";
import { Bookfn } from "../../Utilities/Popup/HandlePopups";
import { PopupContext } from "../../../context/PopUpContext";
import { NewPatientBtn } from "../../Btns/NewPatientBtn";

export const Navbar = () => {
  const { setShowPopup, showPopup } = useContext(PopupContext);

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
          <ul className="navbar-nav  d-flex align-items-center  me-auto p-0">
            <li className="nav-item">
                <NewOperationBtn
                  handleClick={() =>
                    Bookfn({ type: "o", setShowPopup, showPopup })
                  }
                />
            </li>

            <li className="nav-item me-3">
                <NewPatientBtn
                  setShowPopup={setShowPopup}
                  showPopup={showPopup}
                />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

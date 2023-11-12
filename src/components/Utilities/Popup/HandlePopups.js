import { useContext } from "react";
import { PopupContext } from "../../../context/PopUpContext";




export function Bookfn({setShowPopup,showPopup,type}) {

    setShowPopup({
      ...showPopup, "option": type

    });
  }
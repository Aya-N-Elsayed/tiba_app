import React, { useContext } from "react";
import style from "./PopUp.module.css";
import { DoctorPop } from "./DoctorPop";
import { PatientPop } from "./PatientPop";
import { OperationPop } from "./OperationPop";
import { PopupContext } from "../../context/PopUpContext";




export const PopUp = ({
    title,
}) => {

    const { showPopup, setShowPopup } = useContext(PopupContext);
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log("submitted");
        setShowPopup({"option":null});
        // Handle form submission logic Api call later
    };

    return (
        <>

            {showPopup.option === null ? null : <div className={style.layer}>
                <div className="w-50 mx-auto  ">
                    

                    {showPopup.option === 'd' && <h2 className="text-center">إضافة طبيب</h2>}
                    {showPopup.option === 'p' && <h2 className="text-center">إضافة مريض</h2>}
                    {showPopup.option === 'o' && <h2 className="text-center">إضافة عملية</h2>}

                    <form onSubmit={handleSubmit} className={`${style.formControl} container`}>

                        {showPopup.option === 'd' && <DoctorPop />}
                        {showPopup.option === 'p' && <PatientPop />}
                        {showPopup.option === 'o' && <OperationPop />}

                    </form>
                </div>
            </div>}


        </>

    );
};



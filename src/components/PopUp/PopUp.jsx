import React, { useContext, useEffect } from "react";
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
        setShowPopup({ "option": null });
        // Handle form submission logic (API call) later
    };

    useEffect(() => {
        if (showPopup.option !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function: In case the component is unmounted while the popup is still visible
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showPopup]);

    return (
        <>
            {showPopup.option === null ? null : (

                <div className={`${style.layer}  `} onWheel={(e) => e.preventDefault()}>
  

                    <div className={`${style.popupContainer} mx-auto`}>

                    <button
                            type="button" className={`${style.closeBtn} btn-close  `} aria-label="إغلاق" onClick={() => setShowPopup({ "option": null })} >
                    </button>
                        {showPopup.option === 'd' && <h2 className="text-center">إضافة طبيب
                        </h2>}
                        {showPopup.option === 'p' && <h2 className="text-center">إضافة مريض</h2>}
                        {showPopup.option === 'o' && <h2 className="text-center">إضافة عملية</h2>}

                        <form onSubmit={handleSubmit} className={style.formControl}>
                            {showPopup.option === 'd' && <DoctorPop />}
                            {showPopup.option === 'p' && <PatientPop />}
                            {showPopup.option === 'o' && <OperationPop />}
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

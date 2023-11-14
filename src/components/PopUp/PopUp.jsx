import React, { useContext, useEffect } from "react";
import style from "./PopUp.module.css";
import { DoctorPop } from "./DoctorPop";
import { PatientPop } from "./PatientPop";
import { OperationPop } from "./OperationPop";
import { PopupContext } from "../../context/PopUpContext";

export const PopUp = ({ title }) => {
    const { showPopup, setShowPopup } = useContext(PopupContext);

    const handleSubmit = (e) => {
        console.log("submitted");
        setShowPopup({ "option": null });
    };

    const handleOutsideClick = (e) => {
        // Check if the click is directly on the .layer and not on the .popupContainer
        console.log(e)
        if (e.target === document.querySelector(`.${style.layer}`)) {
            setShowPopup({ "option": null });
        }
    };
    

    const handleEscapePress = (e) => {
        if (e.key === 'Escape') {
            setShowPopup({ "option": null });
        }
    };

    useEffect(() => {
        if (showPopup.option !== null) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('keydown', handleEscapePress);
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapePress);
        };
    }, [showPopup]);

    // ... rest of your component



    return (
        <>
            {showPopup.option === null ? null : (

                <div className={`${style.layer}  `} onWheel={(e) => e.preventDefault()}>
  

                    <div className={`${style.popupContainer} mx-auto`}>

                    <button
                            type="button" className={`${style.closeBtn} btn-close  `} aria-label="إغلاق" onClick={() => setShowPopup({ "option": null })} >
                    </button>
                        {showPopup.option === 'd' && <h2 className="text-center mt-0">إضافة طبيب
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

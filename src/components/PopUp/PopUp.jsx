import React, { useState } from "react";
import style from "./PopUp.module.css";
import { BookBtn } from "../Btns/BookPatientBtn";
import { CancelBtn } from "../Btns/CancelBtn";

export const PopUp = ({
    title,
    subTitle,
    name,
    age,
    gender,
    phoneNumber,
    phoneNumber2,
    birthday,
    history,
    notes,
    setfn: setShowPopup,
    show: showPopup
}) => {

    // const [showPopup, setShowPopup] = useState(true);
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log("submitted");
        setShowPopup(false);
        // Handle form submission logic Api call later
    };
    return (
        <>

            <div className={style.layer}>
                <div className="w-50 mx-auto bg-danger ">
                    <h2 className="text-center">{title}</h2>

                    <form onSubmit={handleSubmit} className={`${style.formControl} container`}>
                        <h4>{subTitle}</h4>
                        <div className="d-flex flex-column">
                            <label>الاسم:</label>
                            <input className="w-100" type="text" value={name} placeholder="ادخل الاسم" />
                        </div>
                        <div className="d-flex flex-column">
                            <label>العمر:</label>
                            <input className="w-100" type="number" value={age} placeholder="ادخل العمر" />
                        </div>
                        <div className="d-flex flex-column">
                            <label>النوع:</label>
                            <div className="d-flex justify-content-between" >

                                <div className="form-check-reverse p-1">
                                    <label className="form-check-label me-2 ">ذكر</label>
                                    <input className="form-check-input" type="radio" name="gender" value="Male" checked />

                                </div>
                                <div className="form-check-reverse">
                                    <label className="form-check-label me-2">أنثى</label>
                                    <input className="form-check-input" type="radio" name="gender" value="Female" />

                                </div>


                            </div>


                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex flex-column">
                                    <label>رقم الهاتف:</label>
                                    <input className="" type="tel" value={phoneNumber} placeholder="ادخل رقم الهاتف" />
                                </div>
                            </div>

                            <div className="col-md-6">

                                <div className="d-flex flex-column">
                                    <label>رقم الهاتف ٢:</label>
                                    <input className="" type="tel" value={phoneNumber2} placeholder="ادخل رقم الهاتف الثاني" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex flex-column">
                                    <label>تاريخ الميلاد:</label>
                                    <input className="" type="date" value={birthday} placeholder="ادخل تاريخ الميلاد" />
                                </div>
                            </div>

                            <div className="col-md-6">


                                <div className="d-flex flex-column">
                                    <label>التاريخ المرضى:</label>
                                    <select value={history} className="" placeholder="اختر التاريخ" >
                                        <option value="None"></option>
                                        <option value="Some">بعض</option>
                                    </select>
                                </div>
                            </div>
                        </div>





                        <div className="d-flex flex-column">
                            <label>ملاحظات:</label>
                            <textarea value={notes} placeholder="ادخل الملاحظات" />
                        </div>
                        <BookBtn txt={"حفظ مريض"} />
                        <CancelBtn />
                    </form>
                </div>
            </div>

        </>

    );
};



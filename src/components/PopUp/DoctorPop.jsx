import React from 'react'
import { BookBtn } from "../Btns/BookOBtn";
import { CancelBtn } from "../Btns/CancelBtn";

export const DoctorPop = () => {
    return (
        <div>

            <h4>معلومات الطبيب</h4>
            <div className="d-flex flex-column">
                <label>الاسم </label>
                <input className="w-100" type="text" placeholder="  ادخل الاسم الطبيب" />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex flex-column">
                        <label>رقم الهاتف </label>
                        <input className="" type="tel" placeholder="ادخل رقم الهاتف" />
                    </div>
                </div>

                <div className="col-md-6">

                    <div className="d-flex flex-column">
                        <label>رقم الهاتف ٢ </label>
                        <input className="" type="tel" placeholder="ادخل رقم الهاتف الثاني" />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <label>عنوان العيادة
                </label>
                <input className="w-100" type="text" placeholder="ادخل عنوان العيادة
                " />
            </div>
            <div className="d-flex flex-column">
                <label>رقم العيادة </label>
                <input className="w-100" type="number" placeholder="ادخل رقم العيادة " />
            </div>
            <BookBtn txt={"حفظ طبيب"} />
            <CancelBtn />
        </div>
    )
}

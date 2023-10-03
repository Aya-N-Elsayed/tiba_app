import React, { useContext } from 'react'
import { BookBtn } from "../Btns/BookOBtn"
import { CancelBtn } from "../Btns/CancelBtn";
import { PopupContext } from '../../context/PopUpContext';
import style from '../Btns/BookBtn.module.css'
import { BackBtn } from '../Btns/BackBtn';



export const PatientPop = () => {


   const {setShowPopup} =  useContext(PopupContext);
    return (
        <div>

            <div className="d-flex justify-content-between align-items-center">

            <h4>معلومات المريض</h4>
            <button className={style.backBtn}
                type='button'
                onClick={() => {
                    setShowPopup({ "option": 'o' })
                }}
            > 
                <div className="d-flex align-items-center">
                    <img className='ms-1 w-100' src="/images/back-square.svg" alt="" />
                    <p className="m-0">                رجوع
</p>
                </div>
            </button>
                

            </div>
                
            


            <div className="d-flex flex-column">
                <label> اسم المريض </label>
                <input className="w-100" type="text" placeholder="ادخل اسم المريض" />
            </div>
            <div className="d-flex flex-column">
                <label>العمر </label>
                <input className="w-100" type="number" placeholder="ادخل العمر" />
            </div>
            <div className="d-flex flex-column">
                <label>النوع </label>
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

            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex flex-column">
                        <label>تاريخ الميلاد </label>
                        <input className="" type="date" placeholder="ادخل تاريخ الميلاد" />
                    </div>
                </div>

                <div className="col-md-6">


                    <div className="d-flex flex-column">
                        <label>التاريخ المرضى </label>
                        <select className="" placeholder="اختر التاريخ" >
                            <option value="None"></option>
                            <option value="Some">بعض</option>
                        </select>
                    </div>
                </div>
            </div>





            <div className="d-flex flex-column">
                <label>ملاحظات </label>
                <textarea placeholder="ادخل الملاحظات" />
            </div>
            <BookBtn txt={"حفظ مريض"} />
            <CancelBtn />

        </div>
    )
}

import React, { useContext } from 'react'
import { BookBtn } from '../Btns/BookOBtn'
import styles from '../Btns/BookBtn.module.css'
import { PopupContext } from '../../context/PopUpContext';

export const OperationPop = () => {

   const {setShowPopup} =useContext(PopupContext);
    return (
        <div>
            <div className="row pt-5">
                <div className="col-md-6">
                    <div className="d-flex flex-column">
                        <label>رقم العملية</label>
                        <input className="" type="tel" placeholder="ادخل رقم العملية" />
                    </div>
                </div>

                <div className="col-md-6">

                    <div className="d-flex flex-column">
                        <label>رقم الملف  </label>
                        <input className="" type="tel" placeholder="ادخل رقم الملف" />
                    </div>
                </div>



                <div className="col-md-6">


                    <div className="d-flex flex-column">
                        <label>نوع العملية</label>
                        <select className="" placeholder="اختر نوع العملية" >
                            <option value="None"></option>
                            <option value="Some">بعض</option>
                        </select>
                    </div>
                </div>


                <div className="col-md-6">

                    <div className="d-flex flex-column">
                        <label>نوع الحالة</label>
                        <select className="" placeholder="اختر نوع الحالة" >
                            <option value="None"></option>
                            <option value="Some">بعض</option>
                        </select>
                    </div>
                </div>



                <div className="col-md-6">

                    <div className="d-flex flex-column">
                        <label>اسم الطبيب المحول</label>
                        <select className="" placeholder="اختر الطبيب المحول" >
                            <option value="None"></option>
                            <option value="Some">بعض</option>
                        </select>
                    </div>
                </div>


                <div className="col-md-6">

                    <div className="d-flex flex-column">
                        <label>اسم الجراح</label>
                        <select className="" placeholder="اختر اسم الجراح" >
                            <option value="None"></option>
                            <option value="Some">بعض</option>
                        </select>
                    </div>
                </div>


            </div>
            handleClick

            <div className="d-flex flex-column">
                <label> اسم المريض </label>
                <input className="w-100" type="text" placeholder="ادخل اسم المريض" />
            </div>


            <div className="d-flex flex-column">
                <label>ملاحظات </label>
                <textarea placeholder="ادخل الملاحظات" />
            </div>


            <BookBtn txt={"حجز"} />

            <button
                type="button"
                className={`btn ${styles.signBtn}   d-flex justify-content-center mt-3  align-items-center`}
                id="Btn"
                style={{
                    color: 'var(--logo-colortypap-lightnesscolor)',
                    backgroundColor: 'transparent',
                    borderColor: 'var(--logo-colortypap-lightnesscolor)'
                  }}
                onClick={() => {
                    setShowPopup('p');
                      
                  }}
         
            >

                <h6 className='m-0 p-0'>اضافة مريض جديد

                </h6>

            </button>


        </div>
    )
}

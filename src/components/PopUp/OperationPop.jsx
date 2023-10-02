import React, { useContext, useState } from 'react'
import { BookBtn } from '../Btns/BookOBtn'
import styles from '../Btns/BookBtn.module.css'
import { PopupContext } from '../../context/PopUpContext';
import timeStyle from './OperationPop.module.css';
import selectStyle from './PopUp.module.css'


import { baseURL } from "../../App";
import { useQuery } from "react-query";
import axios from "axios";


export const OperationPop = () => {

    const { setShowPopup } = useContext(PopupContext);

    const [hour, sethour] = useState(10);
    const [min, setmin] = useState(59);
    const [period, setperiod] = useState("صباحا")



    // ? Functions Handling time period selection 
    function handlePeriodClick() {
        setperiod(period === 'صباحا' ? "مساءا" : "صباحا")

    }

    function handleMinPre() {
        setmin(min === 0 ? 59 : min - 1);
    }

    function handleMinPost() {
        setmin(min === 59 ? 0 : min + 1)
    }


    function handleHourPre() {
        sethour(hour === 0 ? 12 : hour - 1);
    }

    function handleHourPost() {
        sethour(hour === 12 ? 0 : hour + 1)
    }
    // ? //

    // ? Get patients Api

    function getAllPatients() {
        return axios.get(`${baseURL}patients/`);
    }

    const patients = useQuery("getAllPatients", getAllPatients );
    console.log(patients);

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


            <div className={`d-flex flex-column  position-relative  ${selectStyle.myselect}`}>
                <label> اسم المريض   </label>
                <img src="./images/arrow-downGray.svg" alt="" className="position-absolute" />
                
                <select className=" w-100 " >
                
                    <option selected disabled> 
                        ادخل اسم المريض</option>
                    <option value="1">Patient 1</option>
                    <option value="2">Patient 2</option>
                    <option value="3">Patient 3</option>
                   
                </select>
           
            </div>


            <div className="d-flex flex-column">
                <label>ملاحظات </label>
                <textarea placeholder="ادخل الملاحظات" />
            </div>


            <h4>حدد الوقت المناسب</h4>

            <div className={`${timeStyle.time} d-flex align-items-center justify-content-evenly my-5`}>

                <div className="text-center">
                    <h6 className='mb-3'>ساعات</h6>
                    <h3 onClick={handleHourPre} className={`${timeStyle.pre}`}>{hour === 0 ? 12 : hour - 1}</h3>
                    <h3 className={`${timeStyle.current}`}>{hour}</h3>
                    <h3 onClick={handleHourPost} className={`${timeStyle.post}`}>{hour === 12 ? 0 : hour + 1} </h3>
                </div>

                <div className="text-center">
                    <h6 className='mb-3'>دقائق</h6>
                    <h3 onClick={handleMinPre} className={`${timeStyle.pre}`}>{min === 0 ? 59 : min - 1}</h3>
                    <h3 className={`${timeStyle.current}`}>{min}</h3>
                    <h3 onClick={handleMinPost} className={`${timeStyle.post}`}>{min === 59 ? 0 : min + 1}</h3>
                </div>

                <div className="text-center">
                    <h3 onClick={handlePeriodClick} className={`${timeStyle.pre}`}>{period === 'صباحا' ? "مساءا" : "صباحا"}</h3>
                    <h3 onClick={handlePeriodClick} className={`${timeStyle.current}`}>{period}</h3>

                </div>

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
                    setShowPopup({ "option": 'p' });

                }}

            >

                <h6 className='m-0 p-0'>اضافة مريض جديد

                </h6>

            </button>


        </div>
    )
}

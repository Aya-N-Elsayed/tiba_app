import React, { useContext, useState } from 'react'
import { BookBtn } from '../Btns/BookOBtn'
import styles from '../Btns/BookBtn.module.css'
import { PopupContext } from '../../context/PopUpContext';
import timeStyle from './OperationPop.module.css';
import selectStyle from './PopUp.module.css'


import { baseURL } from "../../App";
import { useQuery } from "react-query";
import axios from "axios";

import { MySelect } from './MySelect'
import { CancelBtn } from '../Btns/CancelBtn';
import toast from 'react-hot-toast';


export const OperationPop = () => {

    const { setShowPopup, showPopup } = useContext(PopupContext);

    const [hour, sethour] = useState(10);
    const [min, setmin] = useState(59);
    const [period, setperiod] = useState("صباحا")

    //    ?   set up form data 
    
    const reservation = showPopup.reservation;
    console.log("reservation",reservation);

    const [formData, setformData] = useState(
        {

            "patient": '',
            "surgeon": '',
            "transferDoctor": '',
            "date": '',
            "time": '',
            "operationType": '',
            "caseType": '',
            "employee": '',
            "notes": '',
            

            
        }
    )

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

    const { data: { data: patients } = {} } = useQuery("getAllPatients", getAllPatients, { // nested destruction

    });
    console.log(patients);

    // ?

    // ? Post reservation

    function postReservation() {
        return axios.post(`${baseURL}patients/`);
    }

    // ?  //


    function handleSelectPatient() {
        // patients.refetch();
        // console.log(patients.data.data[0].name)

    }

    async function handleSubmitOperation() {

        try {
            await axios.post(`${baseURL}reservations/`, formData);
            setShowPopup({"option":null});
            toast.success("تم إضافة عملية",
            {autoClose:500}
            );

            // setrefetchDoctors(true);

           


        } catch (error) {

            
        }

    }


    // ? Get doctors Api
    function getAllDoctors() {
        return axios.get(`${baseURL}doctors/`);
    }

    const { data: { data: doctors } = {} } = useQuery("getAllDoctors", getAllDoctors, { // nested destruction

    });
    console.log(doctors);

    
    

    // # operations type 
    const operationTypes = [
        { value: "مياه بيضا", label: "مياه بيضا" },
        { value: "تصحيح نظر", label: "تصحيح نظر" }
    ];

    // # case type 
    const caseTypes = [
        { value: " قديم", label: "قديم" },
        { value: "جديد", label: "جديد" },
        { value: "حالة طبيب", label: "حالة طبيب" }

    ];

        // # receiptionists
        const receiptionists = [
            { value: "employee", label: "Mazen Yasser" },
    
        ];
    

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
                    <MySelect
                        label="نوع العملية"
                        options={operationTypes}
                        placeholder="اختر نوع العملية"
                        onChange={(value) => setformData({ ...formData,"operationType": value })}
                    />
                </div>


                <div className="col-md-6">



                    <MySelect
                        label="نوع الحالة"
                        options={caseTypes}
                        placeholder="اختر نوع الحالة"
                        onChange={(value) => setformData({ ...formData,"caseType": value })}

                    />

                </div>



                <div className="col-md-6">




                    <MySelect
                        label="اسم الطبيب المحول  "
                        placeholder="اختر الطبيب المحول"
                        options={doctors?.map(doctor => ({ value: doctor.id, label: doctor.name }))}
                        onChange={(value) => setformData({ ...formData,"transferDoctor": value })}

                    />
                    {console.log({formData})}


                </div>


                <div className="col-md-6">


                    <MySelect
                        label="اسم الجراح"
                        placeholder="اختار اسم الجراح"
                        options={doctors?.map(doctor => ({ value: doctor.id, label: doctor.name }))}
                        onChange={(value) => setformData({ ...formData,"surgeon": value })}

                    />
                </div>


            </div>




            <MySelect
                label="اسم المريض"
                placeholder="اختار اسم المريض"
                options={patients?.map(patient => ({ value: patient.id, label: patient.name }))}
                onChange={(value) => setformData({ ...formData,"patient": value })}

            />



            <MySelect
                label="موظف الاستقبال"
                options={receiptionists}
                placeholder="اختار موظف الاستقبال "
                onChange={(value) => setformData({ ...formData,"employee": value })}

            />

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

            <CancelBtn />


        </div>
    )
}

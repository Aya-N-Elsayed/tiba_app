import React, { useContext, useState } from 'react'
import { BookBtn } from "../Btns/BookOBtn"
import { CancelBtn } from "../Btns/CancelBtn";
import { PopupContext } from '../../context/PopUpContext';
import style from '../Btns/BookBtn.module.css'
import { BackBtn } from '../Btns/BackBtn';

import genderStyle from './PopUp.module.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { baseURL } from '../../App';
import { MySelect } from './MySelect';



export const PatientPop = () => {


    const { setShowPopup, showPopup } = useContext(PopupContext);

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "F",
        phone: "",
        phone2: "",
        birth_date: "",
        medicalHistory: "سكر",
        notes: "",
        city: 2,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    async function handleSubmit() {

        console.log({ formData });

        try {
            await axios.post(`${baseURL}patients/`, formData);
            setShowPopup({ "option": null });
            console.log({ showPopup })
            toast.success("تم إضافة مريض",
                { autoClose: 500 }
            );







        } catch (error) {


        }
    };

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
                <input
                    className="w-100"
                    type="text"
                    placeholder="ادخل اسم المريض"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="d-flex flex-column">
                <label>العمر </label>
                <input
                    className="w-100"
                    type="number"
                    placeholder="ادخل العمر"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </div>

            <div className={`${genderStyle.genderSection} d-flex flex-column`}>

                <label>النوع</label>
                <div className={`d-flex justify-content-start ${genderStyle.genderOptions}`}>

                    <div className="formCheckReverse p-1">
                        <input
                            className="formCheckInput"
                            type="radio"
                            name="gender"
                            value="M"
                            id="male"
                        />
                        <label className="formCheckLabel me-1" htmlFor="male">ذكر  </label>
                    </div>

                    <div className="formCheckReverse p-1">
                        <input
                            className="formCheckInput"
                            type="radio"
                            name="gender"
                            value="F"
                            id="female"
                        />
                        <label className="formCheckLabel me-1" htmlFor="female">أنثى</label>
                    </div>
                </div>
            </div>


            <div className="d-flex flex-column">
                <label>رقم الهاتف </label>
                <input
                    className="w-100"
                    type="tel"
                    placeholder="ادخل رقم الهاتف"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="d-flex flex-column">
                <label>رقم الهاتف ٢ </label>
                <input
                    className="w-100"
                    type="tel"
                    placeholder="ادخل رقم الهاتف الثاني"
                    name="phone2"
                    value={formData.phone2}
                    onChange={handleChange}
                />
            </div>

            <div className="d-flex flex-column">
                <label>تاريخ الميلاد </label>
                <input
                    className="w-100"
                    type="text"
                    placeholder="ادخل تاريخ الميلاد"
                    name="birth_date"
                    value={formData.birth_date}
                    onChange={handleChange}
                />
            </div>

            <div className="d-flex flex-column">
                <label>التاريخ المرضى</label>
                <input
                    className="w-100"
                    type="text"
                    placeholder="اختر التاريخ"
                    name='medicalHistory'
           
                value={formData.medicalHistory}  
                onChange={handleChange}    
                />
            </div>


            <div className="d-flex flex-column">
                <label>ملاحظات </label>
                <textarea
                    placeholder="ادخل الملاحظات"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                />
            </div>



            <BookBtn txt={"حفظ مريض"} handleSubmit={handleSubmit} />
            <CancelBtn />

        </div>
    )
}

import React, { useContext, useState } from 'react'
import { BookBtn } from "../Btns/BookOBtn";
import { CancelBtn } from "../Btns/CancelBtn";
import { useSyncExternalStore } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { baseURL } from '../../App';
import { PopupContext } from '../../context/PopUpContext';
import toast from 'react-hot-toast';
import { refetchingDoctors, sayHello } from '../DoctorsPg/Table/Table';
import { DoctorsContext } from '../../context/DoctorsContext';





export const DoctorPop = (doctor) => {
    
    const { setShowPopup,showPopup } = useContext(PopupContext);
    const { setrefetchDoctors } = useContext(DoctorsContext);
    
    console.log(showPopup);

    const [formData, setformData] = useState(
        {
            "name": showPopup.doctor?.name ,
            "phone": showPopup.doctor?.phone,
            "phone2": showPopup.doctor?.phone2,
            "address": showPopup.doctor?.address,
            "clinicPhone": showPopup.doctor?.clinicphone

            
    }
    
    )
    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value);
        setformData({ ...formData, [name]: value });
        console.log("datA",formData);
    }

    async function handleSubmit() {
        console.log(formData);
        try {
            await axios.post(`${baseURL}doctors/`, formData);
            setShowPopup({"option":null});
            toast.success("تم إضافة طبيب",
            {autoClose:500}
            );

            setrefetchDoctors(true);

           


        } catch (error) {

            
        }
    }

    return (
        <div>

            <h4>معلومات الطبيب</h4>
            <div className="d-flex flex-column">
                <label>الاسم </label>
                <input name="name" value={formData.name} className="w-100" type="text" placeholder="  ادخل الاسم الطبيب"   onChange={handleChange} />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex flex-column">
                        <label>رقم الهاتف </label>
                        <input className="" value={formData.phone} type="tel" placeholder="ادخل رقم الهاتف" name="phone" onChange={handleChange}  />
                    </div>
                </div>

                <div className="col-md-6">

                    <div className="d-flex flex-column">
                        <label>رقم الهاتف ٢ </label>
                        <input className=""  value={formData.phone2}  type="tel" placeholder="ادخل رقم الهاتف الثاني" name="phone2" onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <label>عنوان العيادة
                </label>
                <input className="w-100"  value={formData.address}  type="text" placeholder="ادخل عنوان العيادة" name="address" onChange={handleChange}  />
            </div>
            <div className="d-flex flex-column">
                <label>رقم العيادة </label>
                <input className="w-100" type="number" value={formData.clinicPhone}  placeholder="ادخل رقم العيادة " name="clinicPhone" onChange={handleChange}  />
            </div>
            <BookBtn txt={"حفظ طبيب"} handleSubmit={handleSubmit}/>
            <CancelBtn />
        </div>
    )
}

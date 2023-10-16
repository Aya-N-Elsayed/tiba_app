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
import { useMutation, useQueryClient } from 'react-query';





export const DoctorPop = () => {
    
    const { setShowPopup,showPopup } = useContext(PopupContext);
    const { setrefetchDoctors } = useContext(DoctorsContext);
    const queryClient = useQueryClient();
    
    const doctor = showPopup.doctor;
    console.log("doctor ",doctor);

    const [formData, setformData] = useState(
        {
            "name": showPopup.doctor?.name ,
            "phone": showPopup.doctor?.phone,
            "phone2": showPopup.doctor?.phone2,
            "address": showPopup.doctor?.address,
            "clinicphone": showPopup.doctor?.clinicphone

            
    }
    
    )

     // ? Updating doctor

// # Functions Using Axios to call APIs //
    function updateDoctor(id) {
        console.log(`${baseURL}doctors/${id}/`);
        return axios.patch(`${baseURL}doctors/${id}/`,
        formData
        );
  }

  // # query for Updating Doctor

  const y = useMutation('updateDoc', (id) => { updateDoctor(id) },
    {
      enabled: false,
    });
  
  // console.log("update doctor",y);

    // # Handling onclicking buttons
    function handlingUpdate() {
        const doc = doctor;

        // setShowPopup({ "option":'d',doctor})

        y.mutate(doc.id, {
            onSuccess: () => {


                const dataa= queryClient.getQueryData('allDoctors');
                console.log(dataa.data);
                const currentDoctors = dataa?.data;

                    queryClient.setQueryData('allDoctors', currentDoctors);

                toast.success("تم تعديل الطبيب بنجاح",
                    { autoClose: 500 });
      
            }
        })
    
      
  
  }

// ? //
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
                <input className="w-100" type="number" value={formData.clinicphone}  placeholder="ادخل رقم العيادة " name="clinicphone" onChange={handleChange}  />
            </div>
            <BookBtn txt={"حفظ طبيب"} handleSubmit={showPopup.data === null ? handleSubmit : handlingUpdate} />
            <CancelBtn />
        </div>
    )
}

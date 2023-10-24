import React, { useContext, useState } from 'react'
import { BookBtn } from "../Btns/BookOBtn";
import { CancelBtn } from "../Btns/CancelBtn";

import axios from 'axios';
import { baseURL } from '../../App';
import { PopupContext } from '../../context/PopUpContext';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const DoctorPop = () => {

    const { setShowPopup, showPopup } = useContext(PopupContext);

    const doctor = showPopup.doctor;

    const qClient = useQueryClient()

    const inputConfigs = [
        { label: 'الاسم', name: 'name', type: 'text', placeholder: 'ادخل الاسم' },
        { label: 'رقم الهاتف', name: 'phone', type: 'tel', placeholder: 'ادخل رقم الهاتف' },
        { label: 'رقم الهاتف ٢', name: 'phone2', type: 'tel', placeholder: 'ادخل رقم الهاتف الثاني' },
        { label: 'عنوان العيادة', name: 'address', type: 'text', placeholder: 'ادخل عنوان العيادة' },
        { label: 'رقم العيادة', name: 'clinicphone', type: 'text', placeholder: 'ادخل رقم العيادة' }
    ];

    //? Formik


    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required').min(3, "username must be more than 3 characters").max(50, "username must be less than 50 characters"),
        phone: Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}/, "please enter a valid egyptian number"),
        phone2: Yup.string().notRequired().matches(/^01[0125][0-9]{8}/, "please enter a valid egyptian number"),
        address: Yup.string().required('Address is required'),
        clinicphone: Yup.string().required('Clinic phone is required')
    });

    const formik = useFormik({
        initialValues: {
            "name": showPopup.doctor?.name,
            "phone": showPopup.doctor?.phone,
            "phone2": showPopup.doctor?.phone2,
            "address": showPopup.doctor?.address,
            "clinicphone": showPopup.doctor?.clinicphone
        },

        validationSchema,


        onSubmit: async (values) => {
            try {
                await axios.post(`${baseURL}doctors/`, values);
                toast.success("تم إضافة طبيب", { autoClose: 500 });
                qClient.refetchQueries('allDoctors');
                setShowPopup({ "option": null });
            } catch (error) {
                console.log("ERROR ====> ", error);
            }
        },
    });



    // ? Updating doctor

    // # Functions Using Axios to call APIs //
    function updateDoctor(id) {
        console.log(`${baseURL}doctors/${id}/`);
        return axios.patch(`${baseURL}doctors/${id}/`,
            formik.values
        );
    }

    // # query for Updating Doctor

    const y = useMutation('updateDoc', async (id) => { await updateDoctor(id) },
        {
            onSuccess: () => {

                qClient.refetchQueries('allDoctors')

                toast.success("تم تعديل الطبيب بنجاح",
                    { autoClose: 500 });

            }
        });

    // console.log("update doctor",y);

    // # Handling onclicking buttons
    function handlingUpdate() {
        const doc = doctor
        y.mutate(doc.id, {
        })
    }

    return (
        <div>

            <h4>معلومات الطبيب</h4>

            <div className="row">

                {inputConfigs.map((config, index) => (
                    <div className={config.type == 'tel' ? "col-md-6" : "col-md-12"}>
                        <div className="d-flex flex-column" key={index}>
                            <label>{config.label}</label>
                            <input
                                name={config.name}
                                type={config.type}
                                value={formik.values[config.name]}
                                placeholder={config.placeholder}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                            />
   {console.log("eerors fo ",formik.errors)}
                            {formik.errors[config.name] && formik.touched[config.name]  ? (
                                <p className="text-danger">{formik.errors[config.name] }</p>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <BookBtn txt={"حفظ طبيب"} handleSubmit={showPopup.data === null ? formik.handleSubmit : handlingUpdate} />
            <CancelBtn />
        </div>
    )
}

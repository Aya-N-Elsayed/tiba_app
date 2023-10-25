import React, { useContext, useState } from 'react'
import { BookBtn } from "../Btns/BookOBtn";
import { CancelBtn } from "../Btns/CancelBtn";

import axios from 'axios';
import { baseURL } from '../../App';
import { PopupContext } from '../../context/PopUpContext';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { useFormicDoctor } from '../Utilities/Doctor/FormHandling';
import { useUpdateDoctor } from '../Utilities/Operation/DataMutating';


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

    const formik = useFormicDoctor({ qClient });

    console.log("doc Formik ", formik.isValidating)


    return (
        <div>
            <h4>معلومات الطبيب</h4>
            <div className="row">
                {inputConfigs.map((config, index) => (
                    <div className={config.type == 'tel' ? "col-md-6" : "col-md-12"}>
                        <div className="d-flex flex-column" key={index}>
                            <label className='mt-4'>{config.label}</label>
                            <input
                                className='mb-0'
                                name={config.name}
                                type={config.type}
                                value={formik.values[config.name]}
                                placeholder={config.placeholder}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors[config.name] && formik.touched[config.name] ? (
                                <p className="text-danger mt-1">{formik.errors[config.name]}</p>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <BookBtn txt={"حفظ طبيب"} handleSubmit={formik.handleSubmit} />
            <CancelBtn />
        </div>
    )
}

import React, { useContext, useState } from 'react'
import { BookBtn } from "../Btns/BookOBtn";
import { CancelBtn } from "../Btns/CancelBtn";

import { PopupContext } from '../../context/PopUpContext';
import { useMutation, useQueryClient } from 'react-query';
import { useFormikDoctor } from '../Utilities/Doctor/FormHandling';
import { InputComponent } from '../Utilities/Patient/RenderingInputs';


export const DoctorPop = () => {

    const { setShowPopup, showPopup } = useContext(PopupContext);


    const qClient = useQueryClient()

    const inputConfigs = [
        { label: 'الاسم', name: 'name', type: 'text', placeholder: 'ادخل الاسم', required: true  },
        { label: 'رقم الهاتف', name: 'phone', type: 'tel', placeholder: 'ادخل رقم الهاتف', required: true  },
        { label: 'رقم الهاتف ٢', name: 'phone2', type: 'tel', placeholder: 'ادخل رقم الهاتف الثاني' },
        { label: 'عنوان العيادة', name: 'address', type: 'text', placeholder: 'ادخل عنوان العيادة', required: true  },
        { label: 'رقم العيادة', name: 'clinicphone', type: 'text', placeholder: 'ادخل رقم العيادة' , required: true }
    ];

    //? Formik

    const formik = useFormikDoctor({ qClient });

    console.log("doc Formik ", formik.isValidating)


    return (
        <div>
            <h4>معلومات الطبيب</h4>
            <div className="row">
                {inputConfigs.map((config, index) => (
                    <InputComponent config={config} formik={formik}/>

                ))}
            </div>
            <div className="mt-4">   <BookBtn txt={showPopup?.data  === null ?   "إضافة طبيب" : "تحديث طبيب "}
                handleSubmit={formik.handleSubmit} /> </div>
        </div>
    )
}

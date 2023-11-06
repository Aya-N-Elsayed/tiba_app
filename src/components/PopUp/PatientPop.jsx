import React, { useContext, useState } from 'react'
import { BookBtn } from "../Btns/BookOBtn"
import { CancelBtn } from "../Btns/CancelBtn";
import { PopupContext } from '../../context/PopUpContext';
import style from '../Btns/BookBtn.module.css'
import genderStyle from './PopUp.module.css'

import { useFormicPatient } from '../Utilities/Patient/FormHandling';
import { useAllCity } from '../Utilities/Operation/DataFetching';
import { GenderComponent, InputComponent, SelectComponent, TextareaComponent } from '../Utilities/Patient/RenderingInputs';



export const PatientPop = () => {


    const { setShowPopup, showPopup } = useContext(PopupContext);

    const { data: { data: city } = {} } = useAllCity();

    const inputConfigs = [
        { label: 'اسم المريض', name: 'name', type: 'text', placeholder: 'ادخل اسم المريض' },
        { label: 'العمر', name: 'age', type: 'text', inputmode: 'number', placeholder: 'ادخل العمر' },
        { label: 'المدينة', name: 'city', type: 'select', placeholder: 'اختار المدينة', options: city, fieldName: 'city' },

        { label: 'النوع', name: 'gender', type: 'gender' },
        { label: 'رقم الهاتف', name: 'phone', type: 'tel', placeholder: 'ادخل رقم الهاتف' },
        { label: 'رقم الهاتف ٢', name: 'phone2', type: 'tel', placeholder: 'ادخل رقم الهاتف الثاني' },
        { label: 'تاريخ الميلاد', name: 'birth_date', type: 'date', placeholder: 'ادخل تاريخ الميلاد' },
        { label: 'التاريخ المرضى', name: 'medicalHistory', type: 'text', placeholder: 'ادخل التاريخ المرضى' },
        { label: 'ملاحظات', name: 'notes', type: 'textarea', placeholder: 'ادخل الملاحظات' }
    ];


    const formik = useFormicPatient();


    return (
        <div>

            <div className="d-flex justify-content-between align-items-center">

                <h4>معلومات المريض</h4>
                <button className={style.backBtn} type='button'
                    onClick={() => {
                        console.log({ showPopup })
                        if (showPopup?.data?.date) {
                            setShowPopup({ ...showPopup, "option": 'o' });
                        }

                        else setShowPopup({"option":null})
                        
                    }}
                >
                    <div className="d-flex align-items-center">
                        <img className='ms-1 w-100' src="/images/back-square.svg" alt="" />
                        <p className="m-0">                رجوع
                        </p>
                    </div>
                </button>


            </div>


            <div className="row">
                {inputConfigs.map((config, index) => (
                    <>
                        {config.type === 'select' && <SelectComponent config={config} formik={formik} />}
                        {config.type === 'textarea' && <TextareaComponent config={config} formik={formik} />}
                        {config.type === 'gender' && <GenderComponent config={config} formik={formik} />}
                        {(config.type ==='tel' || config.type === 'text' || config.type ==='date') && <InputComponent config={config} formik={formik} />}
                    </>
                ))}
            </div>



            <BookBtn txt={"حفظ مريض"} handleSubmit={formik.handleSubmit} />

        </div>
    )
}

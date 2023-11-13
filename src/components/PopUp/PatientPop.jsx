import React, { useContext, useState } from 'react'
import { BookBtn } from "../Btns/BookOBtn"
import { PopupContext } from '../../context/PopUpContext';
import style from '../Btns/BookBtn.module.css'
import { useFormicPatient } from '../Utilities/Patient/FormHandling';
import { useAllCity } from '../Utilities/Operation/DataFetching';
import { GenderComponent, InputComponent, SelectComponent, TextareaComponent } from '../Utilities/Patient/RenderingInputs';
import { useQueryClient } from 'react-query';



export const PatientPop = () => {


    const { setShowPopup, showPopup } = useContext(PopupContext);
    const qClient = useQueryClient()

    const { data: { data: city } = {} } = useAllCity();

    const inputConfigs = [
        { label: 'اسم المريض', name: 'name', type: 'text', placeholder: 'ادخل اسم المريض', required: true  },
        { label: 'العمر', name: 'age', type: 'text', inputmode: 'number', placeholder: 'ادخل العمر', required: true  },
        { label: 'المدينة', name: 'city', type: 'select', placeholder: 'اختار المدينة', options: city, fieldName: 'city' , required: true },
        { label: 'النوع', name: 'gender', type: 'gender', required: true  },
        { label: 'رقم الهاتف', name: 'phone', type: 'tel', placeholder: 'ادخل رقم الهاتف', required: true  },
        { label: 'رقم الهاتف ٢', name: 'phone2', type: 'tel', placeholder: 'ادخل رقم الهاتف الثاني' },
        { label: 'التاريخ المرضى', name: 'medicalHistory', type: 'text', placeholder: 'ادخل التاريخ المرضى' },
        { label: 'ملاحظات', name: 'notes', type: 'textarea', placeholder: 'ادخل الملاحظات' }
    ];


    const formik = useFormicPatient({qClient});

    console.log({formik})

    return (
        <div>

            <div className="d-flex justify-content-between align-items-center">

                <h4>معلومات المريض</h4>
                <button className={style.backBtn} type='button'
                    onClick={() => {
                        if (showPopup?.data?.date) {
                            setShowPopup({ ...showPopup, "option": 'o' });
                        }

                        else setShowPopup({ "option": null })
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
                        {(config.type === 'tel' || config.type === 'text' || config.type === 'date') && <InputComponent config={config} formik={formik} />}
                    </>
                ))}
            </div>



            <div className="mt-4">
                <BookBtn txt={showPopup?.patient?.id ? "تحديث مريض" : "إضافة مريض"} handleSubmit={formik.handleSubmit} />
            </div>
        </div>
    )
}

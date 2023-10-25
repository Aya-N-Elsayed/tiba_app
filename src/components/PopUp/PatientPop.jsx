import React, { useContext, useState } from 'react'
import { BookBtn } from "../Btns/BookOBtn"
import { CancelBtn } from "../Btns/CancelBtn";
import { PopupContext } from '../../context/PopUpContext';
import style from '../Btns/BookBtn.module.css'
import genderStyle from './PopUp.module.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { baseURL } from '../../App';
import { MySelect } from './MySelect';
import { useQuery } from 'react-query';
import { useFormicPatient } from '../Utilities/Patient/FormHandling';



export const PatientPop = () => {


    const { setShowPopup, showPopup } = useContext(PopupContext);

    function getAllCities() {
        return axios.get(`${baseURL}city/`);
    }

    const { data: { data: city } = {}, isLoading, isError } = useQuery("getAllCities", getAllCities);

    const inputConfigs = [
        { label: 'اسم المريض', name: 'name', type: 'text', placeholder: 'ادخل اسم المريض' },
        { label: 'العمر', name: 'age', type: 'number', placeholder: 'ادخل العمر' },
        { label: 'النوع', name: 'gender', type: 'gender' },
        { label: 'المدينة', name: 'city', type: 'text', placeholder: 'ادخل المدينة' },
        { label: 'رقم الهاتف', name: 'phone', type: 'tel', placeholder: 'ادخل رقم الهاتف' },
        { label: 'رقم الهاتف ٢', name: 'phone2', type: 'tel', placeholder: 'ادخل رقم الهاتف الثاني' },
        { label: 'تاريخ الميلاد', name: 'birth_date', type: 'text', placeholder: 'ادخل تاريخ الميلاد' },
        { label: 'التاريخ المرضى', name: 'medicalHistory', type: 'text', placeholder: 'ادخل التاريخ المرضى' },
        { label: 'ملاحظات', name: 'notes', type: 'textarea', placeholder: 'ادخل الملاحظات' }
    ];


    const formik = useFormicPatient();

    console.log("patient Formik is valid ", formik.isValid)
    console.log("patient Formik is error ", formik.errors)

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


            <div className="row">
                {inputConfigs.map((config, index) => (
                    <div key={index} className="d-flex flex-column">
                        <label>{config.label}</label>
                        {config.type === 'textarea' ? (
                            <textarea
                                placeholder={config.placeholder}
                                name={config.name}
                                value={formik.values[config.name]}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />


                        ) : config.type === 'gender' ? (
                            <div className={`d-flex justify-content-start ${genderStyle.genderOptions}`}>
                                <div className="formCheckReverse p-1">
                                    <input
                                        className="formCheckInput"
                                        type="radio"
                                        name={config.name}
                                        value='M'  // Represents Male
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values[config.name] === 'M'}  // Check if Male is selected
                                    />
                                    {formik.errors[config.name] && formik.touched[config.name] ? (
                                        <p className="text-danger m-0">{formik.errors[config.name]}</p>
                                    ) : (
                                        ""
                                    )}
                                    <label className="formCheckLabel me-1" htmlFor="male">ذكر</label>
                                </div>
                                <div className="formCheckReverse p-1">
                                    <input
                                        className="formCheckInput"
                                        type="radio"
                                        name={config.name}
                                        value='F'  // Represents Female
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values[config.name] === 'F'}  // Check if Female is selected
                                    />
                                    {formik.errors[config.name] && formik.touched[config.name] ? (
                                        <p className="text-danger m-0">{formik.errors[config.name]}</p>
                                    ) : (
                                        ""
                                    )}
                                    <label className="formCheckLabel me-1" htmlFor="female">أنثى</label>
                                </div>
                            </div>

                        ) : (
                            <input
                                className="w-100"
                                type={config.type}
                                placeholder={config.placeholder}
                                name={config.name}
                                value={formik.values[config.name]}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        )}
                        {formik.errors[config.name] && formik.touched[config.name] ? (
                            <p className="text-danger m-0">{formik.errors[config.name]}</p>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>



            <BookBtn txt={"حفظ مريض"} handleSubmit={formik.handleSubmit} />
            <CancelBtn />

        </div>
    )
}

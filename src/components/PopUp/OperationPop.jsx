import React, { useContext, useState } from 'react'
import { BookBtn } from '../Btns/BookOBtn'
import { PopupContext } from '../../context/PopUpContext';
import { useAllDoctors, useAllEmployees, useAllPatients, useCaseTypes, useOperationTypes } from '../Utilities/Operation/DataFetching';
import { NewPatientBtn } from '../Btns/NewPatientBtn';
import { getInitialformik, useformik, useFormikOperation } from '../Utilities/Operation/OperationForm';
import { InputComponent, SelectComponent, TextareaComponent } from '../Utilities/Patient/RenderingInputs';
import { handleTimeBooking } from '../TimeWidget/TimeWidget';


export const OperationPop = () => {

    const { setShowPopup, showPopup } = useContext(PopupContext);

    //    ?   set up form data 
    const formik = useFormikOperation();
    console.log({formik})


    const { data: { data: patients } = {} } = useAllPatients() //  Get patients Api
    const { data: { data: doctors } = {} } = useAllDoctors();    //  Get doctors Api
    const { data: { data: operationTypes } = {} } = useOperationTypes();     //  operations type 
    const { data: { data: caseTypes } = {} } = useCaseTypes();     //  Get caseType Api
    const { data: { data: employees } = {} } = useAllEmployees();    //  Get employee Api



    const selectConfigs = [
        {
            label: "اسم المريض",
            placeholder: "اختار اسم المريض",
            options: patients,
            fieldName: 'patient',
            customOption: <NewPatientBtn setShowPopup={setShowPopup} showPopup={showPopup} style='addOption' />
            , required: true
  
        },
        {
            label: "نوع العملية",
            placeholder: "اختر نوع العملية",
            options: operationTypes,
            fieldName: 'operationType'
            , required: true
        },
        {
            label: "نوع الحالة",
            placeholder: "اختر نوع الحالة",
            options: caseTypes,
            fieldName: 'caseType'
            , required: true
        },
        {
            label: "اسم الطبيب المحول",
            placeholder: "اختر الطبيب المحول",
            options: doctors,
            fieldName: 'transferDoctor'
        },
        {
            label: "اسم الجراح",
            placeholder: "اختار اسم الجراح",
            options: doctors,
            fieldName: 'surgeon', required: true
        },

        {
            label: "موظف الاستقبال",
            placeholder: "اختار موظف الاستقبال",
            options: employees,
            fieldName: 'employee',
            required: true
        }
    ];

    const dateConfig = { label: 'تاريخ العملية', name: 'date', type: 'date', placeholder: 'ادخل تاريخ العملية' ,required:true}
    const notesConfig = { label: 'ملاحظات', name: 'notes', placeholder: 'ادخل الملاحظات' };
    const fileNumberConfig = { label: 'رقم الملف', name: 'fileNumber', type: 'tel', placeholder: 'ادخل رقم الملف' };


    return (
        <div>

            <div className="row pt-3">
                <InputComponent config={fileNumberConfig} formik={formik} />
                {selectConfigs.map((config) => (
                    <SelectComponent config={config} formik={formik} />
                ))}
                <InputComponent config={dateConfig} formik={formik} />
                <TextareaComponent config={notesConfig} formik={formik} />


            </div>






            <h4 className='cursor-pointer' onClick={() => handleTimeBooking({ reserv : [], updateMutation :'', formik })}>حدد الوقت المناسب</h4>


            <BookBtn
                txt={showPopup?.data?.reserv != null ? "تحديث" : "حجز"}
                handleSubmit={formik.handleSubmit}
            />




        </div>
    )
}


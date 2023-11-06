import React, { useContext, useState } from 'react'
import { BookBtn } from '../Btns/BookOBtn'
import { PopupContext } from '../../context/PopUpContext';
import { MySelect } from './MySelect'
import { useAllDoctors, useAllEmployees, useAllPatients, useCaseTypes, useOperationTypes } from '../Utilities/Operation/DataFetching';
import { NewPatientBtn } from '../Btns/NewPatientBtn';
import { submitOperation, useUpdateOperation } from '../Utilities/Operation/DataMutating';
import { getInitialformik, useformik, useFormikOperation } from '../Utilities/Operation/OperationForm';


export const OperationPop = () => {

    const { setShowPopup, showPopup } = useContext(PopupContext);

    //    ?   set up form data 
    const formik = useFormikOperation();


    // Use the mutation hook from the separated file
    const updateMutation = useUpdateOperation("refetchOperation");





    const { data: { data: patients } = {} } = useAllPatients() //  Get patients Api
    const { data: { data: doctors } = {} } = useAllDoctors();    //  Get doctors Api
    const { data: { data: operationTypes } = {} } = useOperationTypes();     //  operations type 
    const { data: { data: caseTypes } = {} } = useCaseTypes();     //  Get caseType Api
    const { data: { data: employees } = {} } = useAllEmployees();    //  Get employee Api



    const selectConfigs = [
        {
            label: "اسم المريض",
            placeholder: "اختار اسم المريض",
            optionsKey: 'patients',
            fieldName: 'patient',
            customOption: <NewPatientBtn setShowPopup={setShowPopup} showPopup={showPopup} />

        },
        {
            label: "نوع العملية",
            placeholder: "اختر نوع العملية",
            optionsKey: 'operationTypes',
            fieldName: 'operationType'
        },
        {
            label: "نوع الحالة",
            placeholder: "اختر نوع الحالة",
            optionsKey: 'caseTypes',
            fieldName: 'caseType'
        },
        {
            label: "اسم الطبيب المحول",
            placeholder: "اختر الطبيب المحول",
            optionsKey: 'doctors',
            fieldName: 'transferDoctor'
        },
        {
            label: "اسم الجراح",
            placeholder: "اختار اسم الجراح",
            optionsKey: 'doctors',
            fieldName: 'surgeon'
        },

        {
            label: "موظف الاستقبال",
            placeholder: "اختار موظف الاستقبال",
            optionsKey: 'employees',
            fieldName: 'employee',
            optionTransform: (employee) => ({ value: employee.phone, label: `${employee.first_name} ${employee.last_name}` })
        }
    ];

    const renderMySelect = (config, optionsData, formik) => {
        const options = config.optionTransform
            ? optionsData[config.optionsKey]?.map(config.optionTransform)
            : optionsData[config.optionsKey]?.map(item => ({ value: item.id, label: item.name }));
        
            if (config.customOption) {
                options?.unshift({ value: 'customOption', label: config.customOption, isDisabled: true });
            }

        return (
            <MySelect
                label={config.label}
                placeholder={config.placeholder}
                options={options}
                onChange={(selectedOption) => {
                    formik.setFieldValue(config.fieldName, selectedOption);
                }}
                onMenuClose={() => formik.setFieldTouched(config.fieldName)}
                selectedValue={formik.values[config.fieldName]}
            />
        )
    }


    return (
        <div>

            <div className="row pt-3">
                <div className="col-md-6">
                    <div className="d-flex flex-column">
                        <label>رقم الملف</label>
                        <input className="" type="tel" placeholder="ادخل رقم الملف"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fileNumber}
                            name="fileNumber" />
                        {formik.errors.fileNumber && formik.touched.fileNumber &&
                            <p className="text-danger mt-1">{formik.errors.fileNumber}</p>}

                    </div>
                </div>


                {selectConfigs.map(config => (
                    <div className="col-md-6">
                        {renderMySelect(config, { operationTypes, caseTypes, doctors, patients, employees }, formik)}
                        {formik.errors[config.fieldName] && formik.touched[config.fieldName] &&
                            <p className="text-danger mt-1">{formik.errors[config.fieldName]}</p>}
                    </div>
                ))}


            </div>
            <div className="d-flex flex-column">
                <label>ملاحظات</label>
                <textarea placeholder="ادخل الملاحظات"
                    value={formik.values.notes}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="notes"></textarea>
                {formik.errors.notes && formik.touched.notes &&
                    <p className="text-danger mt-1">{formik.errors.notes}</p>}
            </div>



            <h4>حدد الوقت المناسب</h4>



            <BookBtn
                txt={showPopup?.data?.reserv === null ? "حجز" : "تحديث"}
                handleSubmit={formik.handleSubmit}
            />




        </div>
    )
}


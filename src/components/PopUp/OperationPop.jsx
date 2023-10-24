import React, { useContext, useState } from 'react'
import { BookBtn } from '../Btns/BookOBtn'
import { PopupContext } from '../../context/PopUpContext';
import { MySelect } from './MySelect'
import { CancelBtn } from '../Btns/CancelBtn';
import toast from 'react-hot-toast';
import { useAllDoctors, useAllEmployees, useAllPatients, useCaseTypes, useOperationTypes } from '../Utilities/Operation/DataFetching';
import { NewPatientBtn } from '../Btns/NewPatientBtn';
import { submitOperation, useUpdateOperation } from '../Utilities/Operation/DataMutating';
import { getInitialFormData, useFormData } from '../Utilities/Operation/OperationForm';
import { useFormik, validateYupSchema } from 'formik';


export const OperationPop = () => {

    const { setShowPopup, showPopup } = useContext(PopupContext);

    //    ?   set up form data 

    const refetchReserve = showPopup.data?.refetchReserve;
    const refetchOperation = showPopup.data?.refetchOperation;


    const initialData = getInitialFormData(showPopup.data);

        
    const formik = useFormik(
        {
            initialValues:{initialData}
        }
    )

    const [formData, updateFormData] = useFormData(initialData);
    

   // Use the mutation hook from the separated file
   const updateMutation = useUpdateOperation(refetchOperation);

    function handleUpdate({formData}) {
    try {
      updateMutation.mutate({ id: formData?.id, data: formData });

    } catch (error) {
        toast.error("خطأ فى تعديل الحجز", error);
    }
}


    
    const { data: { data: patients } = {} } = useAllPatients() //  Get patients Api
    const { data: { data: doctors } = {} } = useAllDoctors();    //  Get doctors Api
    const { data: { data: operationTypes } = {} } = useOperationTypes();     //  operations type 
    const { data: { data: caseTypes } = {} } = useCaseTypes();     //  Get caseType Api
    const { data: { data: employees } = {} } = useAllEmployees();    //  Get employee Api





        async function handleSubmitOperation() {
            try {
                await submitOperation(formData);
                setShowPopup({ ...showPopup, "option": null });
                toast.success("تم إضافة عملية", { autoClose: 500 });
                
                try {
                    refetchReserve()
                }
                catch (err) {
                    console.log("REFETCH RESERVE FAIL======>", err);
                }
                try {
                    refetchOperation()
                }
                catch (err) {
                    console.log("REFETCH OPERATION FAIL======>", err);
                }
            }
                 catch (error) {
                console.error("ERROR: ", error);
            }
        }
    





    return (
        <div>
            <div className="row pt-5">
                <div className="col-md-6">
                    <div className="d-flex flex-column">
                        <label>رقم العملية</label>
                        <input className="" type="tel" placeholder="ادخل رقم العملية"
                            onChange={(e) => updateFormData("operationNumber", e.target.value )}
                            value={formData.operationNumber} />
                    </div>
                </div>

                <div className="col-md-6">

                    <div className="d-flex flex-column">
                        <label>رقم الملف  </label>
                        <input className="" type="tel" placeholder="ادخل رقم الملف"
                            onChange={(e) => updateFormData( "fileNumber", e.target.value )}
                            value={formData.fileNumber} />
                    </div>
                </div>



                <div className="col-md-6">
                    <MySelect
                        label="نوع العملية"
                        options={operationTypes?.map(operation => ({ value: operation.id, label: operation.name }))} placeholder="اختر نوع العملية"
                        onChange={(value) => updateFormData("operationType", Number(value) )}
                        selectedValue={formData.operationType}

                    />
                </div>


                <div className="col-md-6">



                    <MySelect
                        label="نوع الحالة"
                        options={caseTypes?.map(type => ({ value: type.id, label: type.name }))}
                        placeholder="اختر نوع الحالة"
                        onChange={(value) => updateFormData( "caseType", Number(value) )}
                        selectedValue={formData.caseType}


                    />

                </div>



                <div className="col-md-6">




                    <MySelect
                        label="اسم الطبيب المحول  "
                        placeholder="اختر الطبيب المحول"
                        options={doctors?.map(doctor => ({ value: doctor.id, label: doctor.name }))}
                        onChange={(value) => updateFormData("transferDoctor", Number(value) )}
                        selectedValue={formData.transferDoctor}


                    />
                    {/* {console.log({ formData })} */}


                </div>


                <div className="col-md-6">


                    <MySelect
                        label="اسم الجراح"
                        placeholder="اختار اسم الجراح"
                        options={doctors?.map(doctor => ({ value: doctor.id, label: doctor.name }))}
                        onChange={(value) => updateFormData("surgeon", Number(value) )}
                        selectedValue={formData.surgeon}


                    />
                </div>


            </div>




            <MySelect
                label="اسم المريض"
                placeholder="اختار اسم المريض"
                options={patients?.map(patient => ({ value: patient.id, label: patient.name }))}
                onChange={(value) => updateFormData("patient", Number(value) )}
                selectedValue={formData.patient}


            />



            <MySelect
                label="موظف الاستقبال"
                options={employees?.map(employee => ({ value: employee.phone, label: `${employee.first_name} ${employee.last_name}` }))}
                placeholder="اختار موظف الاستقبال "
                onChange={(value) => updateFormData("employee", value )}
                selectedValue={formData.employee}

            />

            <div className="d-flex flex-column">
                <label>ملاحظات </label>
                <textarea placeholder="ادخل الملاحظات" value={formData.notes} onChange={(e) => updateFormData( "notes", e.target.value )} />
            </div>


            <h4>حدد الوقت المناسب</h4>



            <BookBtn 
                txt={showPopup.data.reserv === null ? "حجز" : "تحديث"} 
                handleSubmit={showPopup.data.reserv === null ? () => handleSubmitOperation() : () => handleUpdate({formData})} 
            />
            <NewPatientBtn setShowPopup={setShowPopup} showPopup={showPopup} />


            <CancelBtn />


        </div>
    )
}


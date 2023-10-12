import React, { useContext, useState } from 'react'
import { BookBtn } from '../Btns/BookOBtn'
import styles from '../Btns/BookBtn.module.css'
import { PopupContext } from '../../context/PopUpContext';
import timeStyle from './OperationPop.module.css';
import selectStyle from './PopUp.module.css'


import { baseURL } from "../../App";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

import { MySelect } from './MySelect'
import { CancelBtn } from '../Btns/CancelBtn';
import toast from 'react-hot-toast';


export const OperationPop = () => {

    const { setShowPopup, showPopup } = useContext(PopupContext);
    const queryClient = useQueryClient();
    

    const [hour, sethour] = useState(10);
    const [min, setmin] = useState(59);
    const [period, setperiod] = useState("ص")

    //    ?   set up form data 

    const refetchReserve = showPopup.data?.refetchReserve;
    const refetchOperation = showPopup.data?.refetchOperation;
    
    console.log({showPopup})
    console.log("reserv",showPopup.data.reserv )

    const [formData, setformData] = useState({
        "fileNumber": showPopup.data.reserv?.fileNumber || '', // <-- use showPopup.data reserv if available, otherwise default to empty.
        "operationNumber": showPopup.data.reserv?.operationNumber || '',
        "patient": showPopup.data.reserv?.patient.id || '',
        "surgeon": showPopup.data.reserv?.surgeon.id || '',
        "transferDoctor": showPopup.data.reserv?.transferDoctor.id || '',
        "date": showPopup.data?.date || showPopup.data?.reserv.date ,
        "time": showPopup.data.reserv?.time || `${hour}:${min} ${period}`,
        "operationType": showPopup.data.reserv?.operationType.id || '',
        "caseType": showPopup.data.reserv?.caseType.id || '',
        "employee": showPopup.data.reserv?.employee.phone || '',
        "notes": showPopup.data.reserv?.notes || '',
        // any other fields...
    });

    function updateOperation(id) {
        console.log(`${baseURL}reservations/${id}/`);
        return axios.patch(`${baseURL}reservations/${id}/`, formData);
    
    }
    
    const reserv = showPopup?.data.reserv;

  const y = useMutation('updateOperation', (id) => { updateOperation(id) },
  {
    enabled: false,
  });


    // # Handling onclicking buttons
    function handleUpdate() {
        const operation = reserv;
        console.log("in updeate ",{formData})



        y.mutate(operation.id, {
            onSuccess: () => {


                // const dataa= queryClient.getQueryData('allReservation');
                // console.log(dataa.data);
                // const currentDoctors = dataa?.data;
        
    
                //     queryClient.setQueryData('allDoctors', currentDoctors);

                toast.success("تم تعديل عملية بنجاح",
                    { autoClose: 500 });
                    refetchOperation()

      
            }
        })
    
        // y.mutate(doc?.id);
      
  
  }

    // ? Functions Handling time period selection 
    function handlePeriodClick() {
        setperiod(period === 'ص' ? "م" : "ص")

    }

    function handleMinPre() {
        setmin(min === 0 ? 59 : min - 1);
    }

    function handleMinPost() {
        setmin(min === 59 ? 0 : min + 1)
    }


    function handleHourPre() {
        sethour(hour === 0 ? 12 : hour - 1);
    }

    function handleHourPost() {
        sethour(hour === 12 ? 0 : hour + 1)
    }


    function handleHourScroll(e) {
        e.stopPropagation();
        e.preventDefault();
        if (e.deltaY < 0) {
            handleHourPre();
        } else if (e.deltaY > 0) {
            handleHourPost();
        }

    }

    function handleMinScroll(e) {
        e.stopPropagation();
        e.preventDefault();
        if (e.deltaY < 0) {
            handleMinPre();
        } else if (e.deltaY > 0) {
            handleMinPost();
        }
    }

    function handlePeriodScroll(e) {
        e.stopPropagation();
        e.preventDefault();
        if (e.deltaY < 0) {
            handlePeriodClick();
        } else if (e.deltaY > 0) {
            handlePeriodClick();
        }
    }
    // ? //

    // ? Get patients Api

    function getAllPatients() {
        return axios.get(`${baseURL}patients/`);
    }

    const { data: { data: patients } = {} } = useQuery("getAllPatients", getAllPatients, { // nested destruction

    });
    // console.log(patients);

    // ?


    async function handleSubmitOperation() {
        console.log({formData})

        try {
            await axios.post(`${baseURL}reservations/`, formData);
      
            setShowPopup({ ...showPopup, "option": null });
            toast.success("تم إضافة عملية",
                { autoClose: 500 }
            );
            refetchReserve()
         refetchOperation()





        } catch (error) {


        }

    }


    // ? Get doctors Api
    function getAllDoctors() {
        return axios.get(`${baseURL}doctors/`);
    }

    const { data: { data: doctors } = {} } = useQuery("getAllDoctors", getAllDoctors, { // nested destruction

    });





    // # operations type 

    // ? Get caseType Api
    function getAlloperationType() {
        return axios.get(`${baseURL}operationtypes/`);
    }

    const { data: { data: operationTypes } = {} } = useQuery("getAlloperationType", getAlloperationType, { // nested destruction

    });



    // # case type 

    // ? Get caseType Api
    function getAllcaseType() {
        return axios.get(`${baseURL}casetypes/`);
    }

    const { data: { data: caseTypes } = {} } = useQuery("getAllcaseType", getAllcaseType, { // nested destruction

    });
    // console.log({ caseTypes });


    // ? Get employee Api
    function getAllEmployees() {
        return axios.get(`${baseURL}employees/`);
    }

    const { data: { data: employees } = {} } = useQuery("getAllEmployees", getAllEmployees);

    // console.log({ employees });



    return (
        <div>
            <div className="row pt-5">
                <div className="col-md-6">
                    <div className="d-flex flex-column">
                        <label>رقم العملية</label>
                        <input className="" type="tel" placeholder="ادخل رقم العملية"
                            onChange={(e) => setformData({ ...formData, "operationNumber": e.target.value })}
                            value={formData.operationNumber} />
                    </div>
                </div>

                <div className="col-md-6">

                    <div className="d-flex flex-column">
                        <label>رقم الملف  </label>
                        <input className="" type="tel" placeholder="ادخل رقم الملف"
                            onChange={(e) => setformData({ ...formData, "fileNumber": e.target.value })}
                            value={formData.fileNumber} />
                    </div>
                </div>



                <div className="col-md-6">
                    <MySelect
                        label="نوع العملية"
                        options={operationTypes?.map(operation => ({ value: operation.id, label: operation.name }))} placeholder="اختر نوع العملية"
                        onChange={(value) => setformData({ ...formData, "operationType": Number(value) })}
                        selectedValue={formData.operationType}

                    />
                </div>


                <div className="col-md-6">



                    <MySelect
                        label="نوع الحالة"
                        options={caseTypes?.map(type => ({ value: type.id, label: type.name }))}
                        placeholder="اختر نوع الحالة"
                        onChange={(value) => setformData({ ...formData, "caseType": Number(value) })}
                        selectedValue={formData.caseType}


                    />

                </div>



                <div className="col-md-6">




                    <MySelect
                        label="اسم الطبيب المحول  "
                        placeholder="اختر الطبيب المحول"
                        options={doctors?.map(doctor => ({ value: doctor.id, label: doctor.name }))}
                        onChange={(value) => setformData({ ...formData, "transferDoctor": Number(value) })}
                        selectedValue={formData.transferDoctor}


                    />
                    {/* {console.log({ formData })} */}


                </div>


                <div className="col-md-6">


                    <MySelect
                        label="اسم الجراح"
                        placeholder="اختار اسم الجراح"
                        options={doctors?.map(doctor => ({ value: doctor.id, label: doctor.name }))}
                        onChange={(value) => setformData({ ...formData, "surgeon": Number(value) })}
                        selectedValue={formData.surgeon}


                    />
                </div>


            </div>




            <MySelect
                label="اسم المريض"
                placeholder="اختار اسم المريض"
                options={patients?.map(patient => ({ value: patient.id, label: patient.name }))}
                onChange={(value) => setformData({ ...formData, "patient": Number(value) })}
                selectedValue={formData.patient}


            />



            <MySelect
                label="موظف الاستقبال"
                options={employees?.map(employee => ({ value: employee.phone, label: `${employee.first_name} ${employee.last_name}` }))}
                placeholder="اختار موظف الاستقبال "
                onChange={(value) => setformData({ ...formData, "employee": value })}
                selectedValue={formData.employee}

            />

            <div className="d-flex flex-column">
                <label>ملاحظات </label>
                <textarea placeholder="ادخل الملاحظات" value={formData.notes} onChange={(e) => setformData({ ...formData, "notes": e.target.value })} />
            </div>


            <h4>حدد الوقت المناسب</h4>
            <div className={`${timeStyle.time} d-flex align-items-center justify-content-evenly my-5`}>
                <div className="text-center" onWheel={handleHourScroll} >
                    <h6 className='mb-3'>ساعات</h6>
                    <h3 onClick={handleHourPre} className={`${timeStyle.pre}`}>{hour === 0 ? 12 : hour - 1}</h3>
                    <h3 className={`${timeStyle.current}`}>{hour}</h3>
                    <h3 onClick={handleHourPost} className={`${timeStyle.post}`}>{hour === 12 ? 0 : hour + 1} </h3>
                </div>
                <div className="text-center" onWheel={handleMinScroll} >
                    <h6 className='mb-3'>دقائق</h6>
                    <h3 onClick={handleMinPre} className={`${timeStyle.pre}`}>{min === 0 ? 59 : min - 1}</h3>
                    <h3 className={`${timeStyle.current}`}>{min}</h3>
                    <h3 onClick={handleMinPost} className={`${timeStyle.post}`}>{min === 59 ? 0 : min + 1}</h3>
                </div>
                <div className="text-center" onWheel={handlePeriodScroll} >
                    <h3 onClick={handlePeriodClick} className={`${timeStyle.pre}`}>{period === 'ص' ? "م" : "ص"}</h3>
                    <h3 onClick={handlePeriodClick} className={`${timeStyle.current}`}>{period}</h3>
                </div>
            </div>


            <BookBtn txt={"حجز"} handleSubmit={showPopup.data.reserv === null ?handleSubmitOperation:handleUpdate} />

            <button
                type="button"
                className={`btn ${styles.signBtn}   d-flex justify-content-center mt-3  align-items-center`}
                id="Btn"
                style={{
                    color: 'var(--logo-colortypap-lightnesscolor)',
                    backgroundColor: 'transparent',
                    borderColor: 'var(--logo-colortypap-lightnesscolor)'
                }}
                onClick={() => {
                    setShowPopup({ ...showPopup, "option": 'p' });

                }}

            >

                <h6 className='m-0 p-0'>اضافة مريض جديد

                </h6>

            </button>

            <CancelBtn />


        </div>
    )
}

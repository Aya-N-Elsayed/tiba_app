import React, { useState } from 'react'

import style from './Filter.module.css'
import { MySelect } from '../../PopUp/MySelect'
import { baseURL } from '../../../App';
import { useQuery } from 'react-query';
import axios from 'axios';

export const Filter = () => {

    // ? Get employee Api
    function getAllEmployees() {
        return axios.get(`${baseURL}employees/`);
    }

    const { data: { data: employees } = {} } = useQuery("getAllEmployees", getAllEmployees);


    // ? Get doctors Api
    function getAllDoctors() {
        return axios.get(`${baseURL}doctors/`);
    }

    const { data: { data: doctors } = {} } = useQuery("getAllDoctors", getAllDoctors, { // nested destruction

    });

    const [formData, setformData] = useState({

    })
    return (
        <>


            <div className={`${style.filterPg}  container bg-white `}>
                <div className={`${style.filter}   `}>

                    <div className="btn-group d-flex w-100">

                        <ul className="dropdown-menu text-end">
                            <li className="dropdown-item"> قديم</li>
                            <li className="dropdown-item"> جديد</li>
                            <li className="dropdown-item"> حالة الطبيب</li>


                        </ul>
                        <button type="button" className={`${style.dropdown_toggle} btn w-100 p-0 text-end`} data-bs-toggle="dropdown" aria-expanded="false">
                            تصفية
                        </button>

                    </div>

                </div>



                <div className={`${style.fitlerBtns} d-flex `}>


                            
    


                    <MySelect
                        label="موظف الاستقبال"
                        options={employees?.map(employee => ({ value: employee.phone, label: `${employee.first_name} ${employee.last_name}` }))}
                        placeholder="الكل  "
                        onChange={(value) => setformData({ ...formData, "employee": value })}

                    />
 

 
                    <MySelect
                        label="اسم الجراح"
                        placeholder= "الكل"
                        options={doctors?.map(doctor => ({ value: doctor.id, label: doctor.name }))}
                        onChange={(value) => setformData({ ...formData, "surgeon": Number(value) })}

                    />


                </div>

            </div>
        </>
    )
}

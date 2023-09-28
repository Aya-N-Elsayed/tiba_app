import axios from 'axios';
import style from './Table.module.css'

import { baseURL } from '../../../App'
import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { useQueries, useQuery } from 'react-query';
import { DoctorsContext } from '../../../context/DoctorsContext';
import { Button } from 'bootstrap';




export const Table = () => {

  const { refetchDoctors } = useContext(DoctorsContext);
 
  

  // # Functions Using Axios to call APIs //
  function getAllDoctors() {
    return axios.get(`${baseURL}doctors/`);
  }

  function deleteDoctor(id) {
    return axios.delete(`${baseURL}doctors/${id}`);
  }

  // # query for getAllDoctors 
  const { isError, isFetching, isLoading, data, refetch } = useQuery("allDoctors", getAllDoctors, {
  });

  if (refetchDoctors) { refetch(); } // refetching data whenever save doctor btn is clicked


  // # query for Deleting Doctor

  const x = useQuery('deleteDoc', (id) => { deleteDoctor(id) },
    {
      enabled:false,
    });
    
  



  const [showOptions, setshowOptions] = useState(new Array(data?.data.length).fill(false));

  
  // # Handling onclicking buttons
  
  function optionsHandleClick(idx) { //Handling showing the option lists
     
    const tempArr = [...showOptions];
    tempArr[idx] = !tempArr[idx];

    setshowOptions(tempArr);

  }     

  function handlingDelete(id) { //Handling delete click button 
    x.refetch(id);
 }


  // # Loading screen 

  if (isLoading) {
    return <div className=' d-flex justify-content-center'>
      <ThreeDots color="var(--logo-colortypap-lightnesscolor)" />
    </div>
  }

  return (
    <div className="">


      <table class={`${style.mytable} table align-middle `}>
        <thead>
          <tr className="">
            <th scope="col">الاسم</th>
            <th scope="col">
              رقم الموبيل 1
            </th>
            <th scope="col">
              رقم الموبيل 2
            </th>
            <th scope="col">عنوان العيادة</th>
            <th scope="col">رقم العيادة</th>


          </tr>
        </thead>
        <tbody>


          {data?.data.map(function (doctor, idx) {
            return <>

              <tr className='position-relative' >
                <td>{doctor.name}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.phone2}</td>
                <td>{doctor.address}
                </td>
                <td className="d-flex  justify-content-around align-items-center ">

                  <p className={` m-0`}>{doctor.clinicPhone}</p>
                  <img role='button' img src="./images/vector.svg" alt="" onClick={()=>{optionsHandleClick(idx)}} />
                </td>

                {showOptions[idx]?                 <div className={`${style.options} 'd-flex flex-column justify-content-between align-items-center  '`}>
                  <button type='button' className={style.editBtn}>
                    <img role='button' img src="./images/edit-2.svg" className='ms-2' />
                    تعديل

                  </button>

                  <button type='button' className={style.deleteBtn} onClick={()=>{handlingDelete(doctor.id)}}>
                    <img role='button' img src="./images/trash.svg" className='ms-2' />
                    حذف
                  </button>



                </div>:null}


              </tr>
            </>

          })}

        </tbody>
      </table>


    </div>
  );

};



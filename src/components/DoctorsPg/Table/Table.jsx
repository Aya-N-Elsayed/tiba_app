import axios from 'axios';
import style from './Table.module.css'

import { baseURL } from '../../../App'
import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { useQueryClient, useMutation, useQueries, useQuery } from 'react-query';
import { DoctorsContext } from '../../../context/DoctorsContext';
import { PopupContext } from '../../../context/PopUpContext';
import toast from 'react-hot-toast';





export const Table = () => {
  const {setShowPopup}  = useContext(PopupContext);

  const { refetchDoctors } = useContext(DoctorsContext);

const queryClient = useQueryClient();



  // ? Geting All doctor
  
  // # Functions Using Axios to call APIs //
  function getAllDoctors() {
    return axios.get(`${baseURL}doctors/`);
  }

    // # query for getAllDoctors 
    const { isError, isFetching, isLoading, data, refetch } = useQuery("allDoctors", getAllDoctors, {
    });
  
  if (refetchDoctors) { refetch(); } // refetching data whenever save doctor btn is clicked
  
  // ? //

  function deleteDoctor(id) {
    return axios.delete(`${baseURL}doctors/${id}/`);
  }





  // # query for Deleting Doctor

  const x = useMutation('deleteDoc', (id) => { deleteDoctor(id) }, {

  });
  






  const [showOptions, setshowOptions] = useState(new Array(data?.data?.length).fill(false));


  // # Handling onclicking buttons

  function optionsHandleClick(idx) { //Handling showing the option lists

    const tempArr = [...showOptions];
    tempArr[idx] = !tempArr[idx];

    setshowOptions(tempArr);

  }

  function handlingDelete(doctor, idx) { 
    x.mutate(doctor.id, {
        onSuccess: () => {
            // Get the current list of doctors from the cache
        const {data:currentDoctors}= queryClient.getQueryData('allDoctors');
        // console.log(dataa.data);
        // const currentDoctors = dataa?.data;

            // Filter out the deleted doctor
            const updatedDoctors = currentDoctors.filter(d => d.id !== doctor.id);

            // Update the cache with the filtered list
            queryClient.setQueryData('allDoctors', updatedDoctors);

            toast.success(`تم حذف الطبيب ${doctor.name}`, { autoClose: 500 });
        }
    });
    const tempArr = [...showOptions];
    tempArr[idx] = false;
    setshowOptions(tempArr);
}


  // ? Updating doctor

// # Functions Using Axios to call APIs //
  function updateDoctor(id, updatedData) {
    return axios.patch(`${baseURL}doctors/${id}/`, {
      "name": "rayyy"
    
    });
  }

  // # query for Updating Doctor

  const y = useMutation('updateDoc', (id) => { updateDoctor(id) },
    {
      enabled: false,
    });
  
  // console.log("update doctor",y);

    // # Handling onclicking buttons
  function handlingUpdate(doctor) {
    const { id, name, phone2, phone, address, clinicphone,notes } = doctor;
    setShowPopup({ "option":'d',doctor})

  
      // console.log(doctor);
      y.mutate(id)
  
  }
  
  //? //

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


          {data?.data?.map(function (doctor, idx) {
            return <>

              <tr className='position-relative' >
                <td>{doctor.name}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.phone2}</td>
                <td>{doctor.address}
                </td>
                <td className="d-flex  justify-content-around align-items-center ">

                  <p className={` m-0`}>{doctor.clinicphone}</p>
                  <img role='button' img src="/images/vector.svg" alt="" onClick={() => { optionsHandleClick(idx) }} />
                </td>

                {showOptions[idx] ? <div className={`${style.options} 'd-flex flex-column justify-content-between align-items-center  '`}>
                  <button type='button' className={style.editBtn} onClick={() =>  handlingUpdate(doctor)}>
                    <img role='button' img src="/images/edit-2.svg" className='ms-2' />
                    تعديل

                  </button>

                  <button type='button' className={style.deleteBtn} onClick={() => { handlingDelete(doctor,idx) }}>
                    <img role='button' img src="/images/trash.svg" className='ms-2' />
                    حذف
                  </button>



                </div> : null}


              </tr>
            </>

          })}

        </tbody>
      </table>


    </div>
  );

};



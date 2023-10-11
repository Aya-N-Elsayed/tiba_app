import axios from 'axios';
import style from './Table.module.css'

import { baseURL } from '../../../App'
import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { useQueryClient, useMutation, useQueries, useQuery } from 'react-query';
import { DoctorsContext } from '../../../context/DoctorsContext';
import { PopupContext } from '../../../context/PopUpContext';
import toast from 'react-hot-toast';

import Options from '../../DeleteModify/Options';




export const Table = () => {
  const { setShowPopup } = useContext(PopupContext);

  const { refetchDoctors } = useContext(DoctorsContext);

  const queryClient = useQueryClient();



  // ? Geting All doctor

  // # Functions Using Axios to call APIs //
  function getAllDoctors() {
    return axios.get(`${baseURL}doctors/`);
  }

  // # query for getAllDoctors 
  const { isError, isFetching, error, isLoading, data, refetch } = useQuery("allDoctors", getAllDoctors, {
  });



  if (refetchDoctors) { refetch(); } // refetching data whenever save doctor btn is clicked

  // ? //


  // ? Deleting a doctor 

  function deleteDoctor(id) {
    return axios.delete(`${baseURL}doctors/${id}/`);
  }



  // # query for Deleting Doctor

  const x = useMutation('deleteDoc', (id) => { deleteDoctor(id) }, {

  });


  function handlingDelete(doctor, idx) {
    x.mutate(doctor.id, {
      onSuccess: () => {
        // Get the current list of doctors from the cache
        const dataa = queryClient.getQueryData('allDoctors');
        console.log("doctors before delete", dataa.data);
        const currentDoctors = dataa?.data;

        // Filter out the deleted doctor
        const updatedDoctors = currentDoctors.filter(d => d.id !== doctor.id);

        // Update the cache with the filtered list
        queryClient.setQueryData('allDoctors', updatedDoctors);

        toast.success(`تم حذف الطبيب ${doctor.name}`, { autoClose: 500 });
        console.log("doctors after delete ", updatedDoctors)
      }
    });
    const tempArr = [...showOptions];
    tempArr[idx] = false;
    setshowOptions(tempArr);
  }


  const [showOptions, setshowOptions] = useState(new Array(data?.data?.length).fill(false));


  // # Handling onclicking buttons

  function optionsHandleClick(idx) { //Handling showing the option lists

    const tempArr = [...showOptions];
    tempArr[idx] = !tempArr[idx];

    setshowOptions(tempArr);

  }







  function handlingUpdate(doctor, idx) {
    const tempArr = [...showOptions];
    tempArr[idx] = false;
    setshowOptions(tempArr);
    setShowPopup({ "option": 'd', doctor })


  }

  //   //? //


  //  ? Loading screen 

  // # Loading screen 

  if (isLoading && !isError) {
    return <div className=' d-flex justify-content-center'>
      <ThreeDots color="var(--logo-colortypap-lightnesscolor)" />
    </div>
  }

  else if (isLoading && isError) {

    return <>
      <h2>
        Errorrrrrrrrrrrrrrrr
      </h2>
    </>

  }

  // ? //

  return (
    <div className="my-5">


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
            <th scope='col'></th>


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
                </td>

                <td>
                  <Options
                    show={showOptions[idx]}
                    setShow = {()=>optionsHandleClick(idx)}
                    onUpdate={() => handlingUpdate(doctor, idx)}
                    onDelete={() => handlingDelete(doctor, idx)}
                  />
                </td>





              </tr>
            </>

          })}

        </tbody>
      </table>


    </div>
  );

};



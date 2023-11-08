import style from './Table.module.css'
import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { PopupContext } from '../../../context/PopUpContext';
import Options from '../../DeleteModify/Options';
import { useAllDoctors } from '../../Utilities/Operation/DataFetching';
import { useMutationDelete } from '../../Utilities/DataDeleting';


export const Table = () => {
  const { setShowPopup, showPopup } = useContext(PopupContext);


  // ? Geting All doctor
  const { isError, isLoading, data, refetch } = useAllDoctors();

  // ? Deleting a doctor 


  // # query for Deleting Doctor

  const x =  useMutationDelete('doctors');

  function handlingDelete(doctor, idx) {
    x.mutate(doctor.id);

  }




  function handlingUpdate(doctor, idx) {

    setShowPopup({ ...showPopup, "option": 'd', doctor, "data": refetch })


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
        Error
      </h2>
    </>

  }

  // ? //

  return (


    <div className="my-5">


      <table class={`${style.mytable} table align-middle `}>
        <thead>
          <tr className="">
            <th>م</th>
            <th className="text-end pe-4" scope="col">الاسم</th>
            <th scope="col"> رقم الموبيل 1 </th>
            <th scope="col"> رقم الموبيل 2</th>
            <th scope="col">عنوان العيادة</th>
            <th scope="col">رقم العيادة</th>
            <th scope='col'></th>


          </tr>
        </thead>
        <tbody>


          {data?.data?.map(function (doctor, idx) {
            return <>

              <tr className=' ' >
                <td>{doctor?.id }</td>
                <td className=' text-end pe-4' title={doctor.name}>{doctor.name}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.phone2}</td>
                <td className=' text-end pe-4' title={doctor.address}>{doctor.address}</td>
                <td>{doctor.clinicphone}</td>
                <td className=''>
                  <Options
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



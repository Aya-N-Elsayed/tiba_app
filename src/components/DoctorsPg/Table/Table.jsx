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

  const x = useMutationDelete()

  function handlingDelete(doctor, idx) {
    x.mutate(doctor.id);
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
            <th scope="col">الاسم</th>
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

              <tr className='position-relative  ' >
                <td className=' '>{doctor.name}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.phone2}</td>
                <td>{doctor.address}</td>
                <td>{doctor.clinicphone}</td>
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



import style from './Table.module.css';
import { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { PopupContext } from '../../../context/PopUpContext';
import Options from '../../DeleteModify/Options';
import { useAllPatients } from '../../Utilities/Operation/DataFetching';
import { useMutationDelete } from '../../Utilities/DataDeleting';

export const Table = () => {
  const { setShowPopup, showPopup } = useContext(PopupContext);

  const { isError, isLoading, data, refetch } = useAllPatients();
  const deleteMutation  = useMutationDelete('patients');

  function handleDelete(patient) {
    deleteMutation.mutate(patient.id);
  }

  function handleUpdate(patient) {
    setShowPopup({ ...showPopup, option: 'p', patient, data: refetch });
  }

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center'>
        <ThreeDots color="var(--logo-colortypap-lightnesscolor)" />
      </div>
    );
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  console.log({data})

  return (
    <div className="my-5">
      <table className={`${style.mytable} table align-middle`}>
        <thead>
          <tr>
            <th>م</th>
            <th className="text-end pe-4" scope="col">الاسم</th>
            <th scope="col">العمر</th>
            <th scope="col"> النوع</th>
            <th scope="col">رقم الهاتف 1</th>
            {/* <th scope="col">رقم الهاتف 2</th> */}
            {/* <th scope="col">تاريخ الميلاد</th>
            <th scope="col">التاريخ الطبي</th> */}
            <th scope="col">ملاحظات</th>
            <th scope="col">المدينة</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((patient) => (
            <tr >
              <td>{patient.id}</td>
              <td className='text-end pe-4' title={patient.name}>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.phone}</td>
              {/* <td>{patient.phone2}</td> */}
              {/* <td>{patient.birth_date}</td>
              <td>{patient.medicalHistory}</td> */}
              <td>{patient.notes}</td>
              <td>{patient.city.name}</td>
              <td>
                <Options
                  onUpdate={() => handleUpdate(patient)}
                  onDelete={() => handleDelete(patient)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

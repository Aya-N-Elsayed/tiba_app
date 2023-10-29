import style from "./Table.module.css";
import { Switch } from "./Switch/Switch";
import { useContext, useEffect, useState } from "react";
import Options from "../../DeleteModify/Options";
import { PopupContext } from "../../../context/PopUpContext";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { baseURL } from "../../../App";
import { useUpdateOperation } from "../../Utilities/Operation/DataMutating";
import { handleTimeBooking } from "../../TimeWidget/TimeWidget";





export const Table = ({ data, refetchOperation }) => {
  const [showOptions, setshowOptions] = useState(new Array(data?.length).fill(false));
  const { setShowPopup, showPopup } = useContext(PopupContext);




  const [timeState, setTimeState] = useState({ hour: 6, min: 30, period: "ص" });


  const updateMutation = useUpdateOperation();




  // # query for Deleting Reservation
  function deleteReservation(id) {
    return axios.delete(`${baseURL}reservations/${id}/`);
  }


  // # query for Patch Reservation
  function patchReservation(id, updatedData) {
    return axios.patch(`${baseURL}reservations/${id}/`, updatedData);
  }


  const patchMutation = useMutation(async ({ id, updatedData }) => await patchReservation(id, updatedData), {
    onSuccess: async () => {

      try {
        await refetchOperation();

      } catch (error) {
        console.log(error)
      }
    },
    onError: (error) => {
      toast.error(error.message, ":خطأ فى تعديل الحجز");
    },


  });

  console.log(patchMutation.status)

  const updateReservation = (id, updatedData) => {
    patchMutation.mutate({ id, updatedData }, {
      onSuccess: () => {
        toast.success(updatedData["status"] === 'Confirmed' ? "!تم تأكيد الحجز" : "تم إلغاء الحجز");

      }
    }


    );
  }
  function handleOnChangeSwitch(reserv) {
    const updatedData = {
      status: reserv?.status === "Confirmed" ?
        "Unconfirmed" : "Confirmed"
    };
    console.log({ updatedData }, { reserv })
    updateReservation(reserv?.id, updatedData);
  }
  const mutation = useMutation('deleteReserv', async (id) => { await deleteReservation(id) }, {
    onSuccess: async () => {
      // Get the current list of reservations from the cache

      try {
        await refetchOperation();

      } catch (error) {
        console.log("refetch mutation error ", error)

      }
      toast.success(`تم حذف الحجز `, { autoClose: 500 });

    }
  });

  function handlingDelete(reserv, idx) {
    mutation.mutate(reserv.id, {

    });

    const tempArr = [...showOptions];
    tempArr[idx] = false;
    setshowOptions(tempArr);
  }




  function optionsHandleClick(idx) { //Handling showing the option lists

    const tempArr = [...showOptions];
    tempArr[idx] = !tempArr[idx];




    setshowOptions(tempArr);

  }



  function handlingUpdate(reserv, idx) {
    const tempArr = [...showOptions];
    tempArr[idx] = false;
    setshowOptions(tempArr);
    setShowPopup({
      ...showPopup,
      "option": 'o', "data": { ...showPopup.data, "reserv": reserv, "refetchOperation": refetchOperation }
    }
    )


  }


  return (
    <div className="tableCont">
      <table className={`${style.mytable} table align-middle`}>
        <thead className="">
          <tr className="">
            <th scope="col">الاسم</th>
            <th scope="col">العمر</th>
            <th scope="col">التليفون</th>
            <th scope="col">العنوان</th>
            <th scope="col">العملية</th>
            <th scope="col"> الجراح</th>
            <th scope="col">محول من</th>
            <th scope="col">التوقيت</th>
            <th scope="col">موظف الاستقبال</th>
            <th scope="col">ملاحظات</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>


          {data?.map((reserv, idx) => {

            return (
              <tr className={`position-relative ${reserv.caseType?.name === 'جديد' ? 'bgNew' : (reserv.caseType?.name === 'حالة طبيب' ? 'bgDoctor' : '')}`}>
                <td>{reserv.patient?.name}</td>
                <td>{reserv.patient?.age}</td>
                <td>{reserv.patient?.phone}</td>
                <td> {reserv.patient?.city.name}</td>
                <td>{reserv.operationType?.name}</td>
                <td>{reserv.surgeon?.name}</td>
                <td>{reserv.transferDoctor?.name}</td>
                <td className="">
                  <div className="d-flex justify-content-center">
                    <p className="m-0  " role="button" onClick={() => handleTimeBooking({ reserv, updateMutation,setTimeState,timeState })} >{reserv?.time}</p>
                    {console.log("timeee ", reserv["time"][0])}
                    <Switch confirmed={reserv?.status} handleOnChange={() => handleOnChangeSwitch(reserv)} />
                  </div>

                </td>

                <td>{reserv?.employee?.first_name}  {reserv?.employee?.last_name}</td>
                <td className="d-flex justify-content-around">

                  <p className={`${style.note} m-0`}>{reserv.notes}</p>
                </td>


                <td>
                  <Options
                    show={showOptions[idx]}
                    setShow={() => optionsHandleClick(idx)}
                    onUpdate={() => handlingUpdate(reserv, idx)}
                    onDelete={() => handlingDelete(reserv, idx)}
                  />
                </td>

              </tr>

            );

          })}


        </tbody>
      </table>
    </div>
  );
};

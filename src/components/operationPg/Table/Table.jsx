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
import { ClipLoader } from "react-spinners";




export const Table = ({ data, refetchOperation }) => {
  const { setShowPopup, showPopup } = useContext(PopupContext)

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

  const switchLoading = patchMutation.isLoading;

  console.log({patchMutation})

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

  function handlingDelete(reserv) {
    mutation.mutate(reserv.id, {

    });
  }




 



  function handlingUpdate(reserv) {

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
            <th></th>
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
              <tr className={` ${reserv.caseType?.name === 'جديد' ? 'bgNew' : (reserv.caseType?.name === 'حالة طبيب' ? 'bgDoctor' : '')}`}>
                <td>{reserv?.id }</td>
                <td title={reserv.patient?.name}>{reserv.patient?.name}</td>
                <td>{reserv.patient?.age}</td>
                <td>{reserv.patient?.phone}</td>
                <td> {reserv.patient?.city.name}</td>
                <td>{reserv.operationType?.name}</td>
                <td title={reserv.surgeon?.name}>{reserv.surgeon?.name}</td>
                <td title={reserv.transferDoctor?.name}>{reserv.transferDoctor?.name}</td>
                <td className="">
                  <div className="d-flex justify-content-center">
                    <p className="m-0 ms-2 " role="button" onClick={() => handleTimeBooking({ reserv, updateMutation })} >{reserv?.time}</p>
                   {switchLoading && patchMutation.variables.id === reserv.id?     <ClipLoader color="var(--logo-colortypap-lightnesscolor)" size={25} />: <Switch confirmed={reserv?.status} handleOnChange={() => handleOnChangeSwitch(reserv)} />}
                  </div>

                </td>

                <td>{reserv?.employee?.first_name}  {reserv?.employee?.last_name}</td>
                <td className="" title={reserv.notes} >{reserv.notes}</td>
                <td> <Options onUpdate={() => handlingUpdate(reserv)} onDelete={() => handlingDelete(reserv)} /></td>

              </tr>

            );

          })}


        </tbody>
      </table>
    </div>
  );
};

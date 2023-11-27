// operationAPI.js

import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { baseURL } from "../../../App";
import { useRefetech } from "../RefectchingQueries";

export function submitOperation(formData) {
  return axios.post(`${baseURL}reservations/`, formData);
}

export function update({ id, data, endpoint }) {
  //general
  return axios.patch(`${baseURL}${endpoint}/${id}/`, data);
}

export function useUpdateOperation() {
  const qOperation = useRefetech();
  return useMutation(
    "updateOperation",
    async ({ id, data }) =>
      await update({ id, data, endpoint: "reservations" }),
    {
      onSuccess: (response) => {
        toast.success("تم تعديل عملية بنجاح  ");
        try {
          qOperation.refetchQueries("allReservation");
        } catch (error) {
        }
      },
      onError: (error) => {
        toast.error("خطأ فى تعديل الحجز  ", error.messege);
      },
    }
  );
}

export function useUpdateDoctor() {
  const qDoc = useRefetech();
  return useMutation("updateDoctor",async ({ id, data }) => await update({ id, data, endpoint: "doctors" }),
    {
      onSuccess: (response) => {
        toast.success("تم تعديل الطبيب بنجاح", { autoClose: 500 });
        try {
          qDoc.refetchQueries("getAllDoctors");
        } catch (error) {
        }
      },
      onError: (error) => {
        toast.error("خطأ فى تعديل الطبيب", error.messege);
      },
    }
  );
}

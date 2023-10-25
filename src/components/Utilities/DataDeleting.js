import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "../../App";
import { useMutation } from "react-query";
import { useRefetech } from "./RefectchingQueries";

const deleteData = async({endpoint,id}) => { // in general
  try {
    const response = await axios.delete(`${baseURL}${endpoint}/${id}/`);
    return response;
  } catch (error) {
    toast.error(`خطأ فى السيرفر  ${endpoint}: ${error.message}`);
    throw error; // Propagate the error to react-query
  }
};

// # query for Deleting Doctor

export function useMutationDelete() { // for doctors only
    const qDoc= useRefetech()

    return useMutation("deleteDoc", (id) => deleteData({ endpoint:"doctors",id}), {
        onSuccess: async () => {
          try {
              qDoc.refetchQueries('getAllDoctors')
          } catch (error) {
            console.log("errrorrrrrrrrrrrrrrrr", error.message);
          }
          toast.success(`تم حذف الطبيب `, { autoClose: 500 });
        },
      
        onError: (error) => {
          toast.error("خطأ فى حذف الطبيب", error.messege);
        },
      });
}


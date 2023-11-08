import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "../../App";
import { useMutation, useQueryClient } from "react-query";

const deleteData = async({endpoint,id}) => { // in general
  try {
    const response = await axios.delete(`${baseURL}${endpoint}/${id}/`);
    return response;
  } catch (error) {
    toast.error(`خطأ فى السيرفر  ${endpoint}: ${error.message}`);
    throw error; // Propagate the error to react-query
  }
};

// # query for Deleting 

export function useMutationDelete(endpoint) { // endpoint can be 'doctors' or 'patients'
  const queryClient = useQueryClient();

  return useMutation(id => deleteData({ endpoint: endpoint, id }), {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries(`getAll${endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}`);
        toast.success(`تم حذف البيانات بنجاح`, { autoClose: 500 });
      } catch (error) {
        console.error("Error during refetch", error.message);
      }
    },
    onError: (error) => {
      toast.error(`خطأ في حذف البيانات من ${endpoint}`, error.message);
    },
  });
}



// operationAPI.js

import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import toast from 'react-hot-toast';

import { baseURL } from '../../App';


export function useRefetechOperation() {
    const qOperation = useQueryClient();
    return qOperation
}

export function submitOperation(formData) {
    return axios.post(`${baseURL}reservations/`, formData);
}

export async function updateOperation({ id, data }) {
    try {
        const response = await axios.patch(`${baseURL}reservations/${id}/`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}




export function useUpdateOperation(refetchOperation) {
    const qOperation= useRefetechOperation()
    return useMutation('updateOperation', async ({ id,data }) =>  await updateOperation({id,data}) , {
        onSuccess: (response) => {
            toast.success("تم تعديل عملية بنجاح  ");
            try {
                qOperation.refetchQueries('allReservation')
                // refetchOperation();
            } catch (error) {
                console.log({error})
            }
        },
        onError: (error) => {
            toast.error("خطأ فى تعديل الحجز  ", error);
        }
    });
}

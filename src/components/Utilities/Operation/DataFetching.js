// hooks/useDataFetching.js

import axios from 'axios';
import { useQuery } from 'react-query';
import { baseURL } from '../../../App';
import toast from 'react-hot-toast';


const fetchData = async (endpoint, params = {}) => {
    try {
        const response = await axios.get(`${baseURL}${endpoint}/`, { params });
        return response;
    } catch (error) {
        toast.error(`خطأ فى السيرفر  ${endpoint}: ${error.message}`);
        throw error;  // Propagate the error to react-query
    }
}
export const useAllPatients = () => {
    return useQuery("getAllPatients", () => fetchData('patients'));
}

export const useAllDoctors = () => {
    return useQuery("getAllDoctors", () => fetchData('doctors'));
}

export const useOperationTypes = () => {
    return useQuery("getAlloperationType", () => fetchData('operationtypes'));
}

export const useCaseTypes = () => {
    return useQuery("getAllcaseType", () => fetchData('casetypes'));
}

export const useAllEmployees = () => {
    return useQuery("getAllEmployees", () => fetchData('employees'));
}

export const useAllCity = () => {
    return useQuery("getAllCity", () => fetchData('city'));
}

  
export const useMonthsReservations = ({month, year}) => {
   return  useQuery(["MonthReservations", month, year], ()=> fetchData('calendar', { month, year }));
}
  

// export const useTotalReservations = () => {
//     return useQuery("totalReservations", () => fetchData('reservations'));
// }


export async function getReservation({year,month,day}) {
    return await axios.get(`${baseURL}reservations`, {

      params: {
        year: year,
        month: month,
        day: day
      }
    });
  }
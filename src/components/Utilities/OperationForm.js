// useFormData.js
import { useFormik } from 'formik';
import { useState } from 'react';

export const useFormData = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const updateFormData = ( key, value ) => {
        setFormData(prevState => ({ ...prevState, [key]: value }));
        console.log({formData})
    };

    return [formData, updateFormData];
};


export function getInitialFormData(data) {


    return {
        "fileNumber": data?.reserv?.fileNumber || '',
        "operationNumber": data?.reserv?.operationNumber || '',
        "patient": data?.reserv?.patient?.id || '',
        "surgeon": data?.reserv?.surgeon?.id || '',
        "transferDoctor": data?.reserv?.transferDoctor?.id || '',
        "date": data?.date || data?.reserv?.date,
        "time": data?.reserv?.time || `10:10 ص`,
        "operationType": data?.reserv?.operationType?.id || '',
        "caseType": data?.reserv?.caseType?.id || '',
        "employee": data?.reserv?.employee?.phone || '',
        "notes": data?.reserv?.notes || '',
        "id": data?.reserv?.id || '',
        // any other fields...
    }
};
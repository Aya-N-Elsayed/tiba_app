

// useOperationForm.js
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { baseURL } from '../../../App';
import { useContext } from 'react';
import { PopupContext } from '../../../context/PopUpContext';
import { useRefetech } from '../RefectchingQueries';


function formatDateString(dateString) {
    if (!dateString) return '';
    
    const [year, month, day] = dateString.split('-');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  
  export function getInitialFormData(data) {
    return {
      fileNumber: data?.reserv?.fileNumber || '',
      operationNumber: data?.reserv?.operationNumber || '',
      patient: data?.reserv?.patient?.id || '',
      surgeon: data?.reserv?.surgeon?.id || '',
      transferDoctor: data?.reserv?.transferDoctor?.id || '',
      date: formatDateString(data?.date) || formatDateString(data?.reserv?.date)|| "",
      time: data?.reserv?.time || `10:10 ص`,
      operationType: data?.reserv?.operationType?.id || '',
      caseType: data?.reserv?.caseType?.id || '',
      employee: data?.reserv?.employee?.phone || '',
      notes: data?.reserv?.notes || '',
      id: data?.reserv?.id || '',
      // any other fields...
    }
  };
  

const validationSchema = Yup.object({
    fileNumber: Yup.string().notRequired(),
    operationNumber: Yup.string().notRequired(),
    patient: Yup.number().required('المريض مطلوب'),
    surgeon: Yup.number().required('الجراح مطلوب'),
    transferDoctor: Yup.number().notRequired(),
    date: Yup.date().required('تاريخ العملية مطلوب'),
    operationType: Yup.number().required('نوع العملية مطلوب'),
    caseType: Yup.number().required('نوع الحالة مطلوب'),
    employee: Yup.string().required(' الموظف مطلوب'),
    notes: Yup.string().notRequired(),
    // Add any other field validations...
});


export function useFormikOperation() {
    const { setShowPopup, showPopup } = useContext(PopupContext);
    const qOperation = useRefetech();

    const formik = useFormik({
        initialValues: getInitialFormData(showPopup.data),
        
        validationSchema,
        
        onSubmit: async (values) => {
            const endpoint = showPopup.data?.reserv
                ? `${baseURL}reservations/${values.id}/`  // update endpoint
                : `${baseURL}reservations/`;                           // submit endpoint
        
            const httpMethod = showPopup.data?.reserv?  'PUT' : 'POST';
        
            try {
                await axios({
                    method: httpMethod,
                    url: endpoint,
                    data: values
                });
                toast.success(showPopup?.data?.reserv? "تم تحديث العملية" : "تم إضافة العملية", { autoClose: 500 });
               
                try {
                    qOperation.refetchQueries('allReservation');
                }
                catch (err) {
                    console.log("REFETCH RESERVE FAIL======>", err);
                }
                try {
                    qOperation.refetchQueries('MonthReservations')
                }
                catch (err) {
                    console.log("REFETCH OPERATION FAIL======>", err);
                }
                setShowPopup({ "option": null });
            } catch (error) {
                toast.error(showPopup.data.reserv? "خطأ في تحديث العملية" : "خطأ في إضافة العملية");
            }

            console.log({showPopup})

        }

    });
    return formik;
}


import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { baseURL } from '../../../App';
import { useContext } from 'react';
import { PopupContext } from '../../../context/PopUpContext';

const validationSchema = Yup.object({
    name: Yup.string()
        .required('الاسم مطلوب')
        .min(3, "يجب أن يكون الاسم أكثر من 3 أحرف")
        .max(50, "يجب أن يكون الاسم أقل من 50 حرف"),

    phone: Yup.string()
        .required('رقم الهاتف مطلوب')
        .matches(/^01[0125][0-9]{8}/, "يرجى إدخال رقم هاتف مصري صحيح"),

    phone2: Yup.string()
        .notRequired()
        .matches(/^01[0125][0-9]{8}/, "يرجى إدخال رقم هاتف مصري صحيح"),

    city: Yup.string()
        .required('العنوان مطلوب')
        // .matches(/[a-zA-Z]/, 'العنوان يجب أن يحتوي على حروف')
    ,

        age: Yup.number()
        .required('العمر مطلوب')
        .min(1, 'يجب أن تكون على الأقل عامًا واحدًا')
        .max(99, 'يجب أن تكون أقل من 100 عامًا'),
    
    notes: Yup.string().notRequired(),
    medicalHistory: Yup.string().notRequired(),
    
    gender: Yup.string().required('النوع مطلوب'),
});



export function useFormicPatient({qClient}) {
    const { setShowPopup, showPopup } = useContext(PopupContext);

    const formik = useFormik({
        initialValues: {
            name: showPopup.patient?.name || "",
            age: showPopup.patient?.age || "",
            gender: showPopup.patient?.gender || "F",
            phone: showPopup.patient?.phone || "",
            phone2: showPopup.patient?.phone2 || "",
            medicalHistory: showPopup.patient?.medicalHistory || "",
            notes: showPopup.patient?.notes || "",
            city: showPopup.patient?.city.id || "",
          },

        validationSchema,

        onSubmit: async (values) => {

            const endpoint = showPopup.patient?.id 
                ? `${baseURL}patients/${showPopup.patient.id}/`  // update endpoint
                : `${baseURL}patients/`;                         // create endpoint
          
            const httpMethod = showPopup.patient?.id ? 'PUT' : 'POST';
          
            try {

                await axios({
                    method: httpMethod,
                    url: endpoint,
                    data: values
                });
                toast.success(showPopup.patient?.id ? "تم تحديث المريض" : "تم إضافة مريض", { autoClose: 500 });
                qClient.refetchQueries('getAllPatients');
                if (showPopup?.data?.date) {
                    setShowPopup({ ...showPopup, "option": 'o' });
                }

                else {
                    console.log({showPopup})

                    setShowPopup({ ...showPopup, "option": null })
                }
            } catch (error) {
                toast.error(showPopup.patient?.id ? "خطأ في تحديث المريض" : "خطأ في إضافة المريض", error.message);
                console.log(showPopup.patient?.id ? "خطأ في تحديث المريض" : "خطأ في إضافة المريض", error.message);

            }
          }
          
});
    return      formik
        
    
}
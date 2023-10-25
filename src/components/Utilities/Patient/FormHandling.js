
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
        .matches(/[a-zA-Z]/, 'العنوان يجب أن يحتوي على حروف'),

        age: Yup.number()
        .required('العمر مطلوب')
        .min(1, 'يجب أن تكون على الأقل عامًا واحدًا')
        .max(99, 'يجب أن تكون أقل من 100 عامًا'),
    
    notes: Yup.string().notRequired(),
    medicalHistory: Yup.string().notRequired(),
    birth_date: Yup.string().required(),
    
    gender: Yup.string()
        .oneOf(['M', 'F'], 'نوع غير صحيح')
        .required('النوع مطلوب'),
});



export function useFormicPatient() {
    const { setShowPopup, showPopup } = useContext(PopupContext);

    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            gender: "F",
            phone: "",
            phone2: "",
            birth_date: "",
            medicalHistory: "",
            notes: "",
            city: '',
        },

        validationSchema,


        onSubmit: async(values) => {
            console.log({values})
            try {
                await axios.post(`${baseURL}patients/`, values);
                setShowPopup({ "option": null });
                console.log({ showPopup })
                toast.success("تم إضافة مريض",
                    { autoClose: 500 }
                );
    
    
            } catch (error) {
               toast.error(error)
    
            }
        }
});
    return      formik
        
    
}
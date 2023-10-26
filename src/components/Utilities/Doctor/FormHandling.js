
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { baseURL } from '../../../App';
import { useContext } from 'react';
import { PopupContext } from '../../../context/PopUpContext';

const validationSchema = Yup.object({
    name: Yup.string().required('الاسم مطلوب').min(3, "يجب أن يكون الاسم أكثر من 3 أحرف").max(50, "يجب أن يكون الاسم أقل من 50 حرف"),
    phone: Yup.string().required('رقم الهاتف مطلوب').matches(/^01[0125][0-9]{8}/, "يرجى إدخال رقم هاتف مصري صحيح"),
    phone2: Yup.string().notRequired().matches(/^01[0125][0-9]{8}/, "يرجى إدخال رقم هاتف مصري صحيح"),
    address: Yup.string().required('العنوان مطلوب').matches(/[a-zA-Z]/, 'العنوان يجب أن يحتوي على حروف'),
    clinicphone: Yup.string().required('رقم العيادة مطلوب').matches(/^(0[0-9]{8}|01[0125][0-9]{8})$/, 'يرجى إدخال رقم هاتف أو رقم أرضي صالح في مصر')
});


export function useFormikDoctor({ qClient }) {
    const { setShowPopup, showPopup } = useContext(PopupContext);
    

    const formik = useFormik({
        initialValues: {
            "name": showPopup.doctor?.name,
            "phone": showPopup.doctor?.phone,
            "phone2": showPopup.doctor?.phone2,
            "address": showPopup.doctor?.address,
            "clinicphone": showPopup.doctor?.clinicphone
        },

        validationSchema,


        onSubmit: async (values) => {
            const endpoint = showPopup.doctor?.id 
                ? `${baseURL}doctors/${showPopup.doctor.id}/`  // update endpoint
                : `${baseURL}doctors/`;                       // submit endpoint
        
            const httpMethod = showPopup.doctor?.id ? 'PUT' : 'POST';
        
            try {
                await axios({
                    method: httpMethod,
                    url: endpoint,
                    data: values
                });
                toast.success(showPopup.doctor?.id ? "تم تحديث الطبيب" : "تم إضافة طبيب", { autoClose: 500 });
                qClient.refetchQueries('getAllDoctors');
                setShowPopup({ "option": null });
            } catch (error) {
                toast.error(showPopup.doctor?.id ? "خطأ في تحديث الطبيب" : "خطأ في إضافة الطبيب");
            }
        }
        
    });
    return      formik
        
    
}
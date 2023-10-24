import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useUpdateOperation } from "./DataMutating";

const MySwal = withReactContent(Swal);


export function useHandleTimeUpdate({reserv,timeData}){
    const updateMutation = useUpdateOperation();
    updateMutation.mutate({ id: reserv?.id, data: timeData });
}



export function handleTimeBooking({ reserv }) { 


    // MySwal.fire(
    //   {
    //     title: 'حدد الوقت المناسب',
    //     html: <TimeWidget reserv={reserv} />,
    //     heightAuto: false,
    //     confirmButtonText: 'تم',
    //     cancelButtonText: 'إلغاء',
    //     showCancelButton: true,
    //     customClass: {
    //       confirmButton: ` ${timeStyle.bookBtn}`
    //       ,
    //       title: `${timeStyle.title}`
    //     },

    //     willOpen: () => {
    //       document.body.style.overflow = 'hidden';  // Prevents scrolling

    //     },
    //     didClose: () => {
    //       document.body.style.overflow = 'auto';  // Allows scrolling again
    //     }


    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       useHandleTimeUpdate({ reserv, timeData: { time: "8:30 ص"}});
    //     }
      
    //   })
    


  };
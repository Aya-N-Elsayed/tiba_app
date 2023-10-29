import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { TimeWidget } from "../../TimeWidget/TimeWidget";
import React, { useEffect, useState } from 'react'
import timeStyle from '../../TimeWidget/TimeWidget.module.css'

const MySwal = withReactContent(Swal);


export function handleTimeBooking1({ reserv , updateMutation}) { 
  

    MySwal.fire(
      {
        title: 'حدد الوقت المناسب',
        html: <TimeWidget reserv={reserv}  updateMutation={updateMutation} />,
        heightAuto: false,
        confirmButtonText: 'تم',
        cancelButtonText: 'إلغاء',
        showCancelButton: true,
        customClass: {
          confirmButton: ` ${timeStyle.bookBtn}`
          ,
          title: `${timeStyle.title}`
        },

        willOpen: () => {
          document.body.style.overflow = 'hidden';  // Prevents scrolling

        },
        didClose: () => {
          document.body.style.overflow = 'auto';  // Allows scrolling again
        }


      }).then((result) => {
        if (result.isConfirmed) {
          try {
             updateMutation.mutate({ id: reserv?.id, data: { time: `7:30 ص` } });
            console.log("++++++")
        } catch (error) {
          console.error("Mutation failed", error);
        }
        }
      
      })
    


  };
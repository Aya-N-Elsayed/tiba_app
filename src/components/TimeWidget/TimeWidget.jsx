import React, { useEffect, useRef, useState } from 'react'

import timeStyle from './TimeWidget.module.css'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';


const MySwal = withReactContent(Swal);

function extractTime(timeString) {
    const [time, p] = timeString.split(' ');
    const [h, m] = time.split(':');
    return { h, m, p };
}
export function handleTimeBooking({ reserv, updateMutation, setTimeState, timeState }) {

    // setTimeState({ ...timeState, hour: Number(h), min: Number(m), period: p });
    let timeValue = {};




    MySwal.fire(
        {
            title: 'حدد الوقت المناسب',
            html: <TimeWidget reserv={reserv}  timeState={timeState} setTimeState={setTimeState}  onTimeChange={(time) => { timeValue = time; }}/>,
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
                const { hour, min, period } = timeValue;

                try {
                    updateMutation.mutate({ id: reserv?.id, data: { time: `${hour}:${min} ${period}` } });
                    console.log("++++++")
                } catch (error) {
                    console.error("Mutation failed", error);
                }
            }

        })



};



export const TimeWidget = ({ reserv, onTimeChange}) => {



    const { h, m, p } = extractTime(reserv.time);
    const [hour, sethour] = useState(Number(h));
    const [min, setmin] = useState(Number(m));
    const [period, setperiod] = useState(p)

    useEffect(() => {
        // ... existing code
        if (typeof onTimeChange === 'function') {
            onTimeChange({ hour, min, period });
        }
    }, [hour, min, period]);
    

    function handleHourPre() {
        const newHour = hour === 0 ? 12 : hour - 1;
        sethour(newHour);

    }
    
    function handleMinPost() {
        const newMin = min === 55 ? 0 : min + 5;
        setmin(newMin);
    }
    
    function handlePeriodClick() {
        const newPeriod = period === 'ص' ? "م" : "ص";
        setperiod(newPeriod);

    }
    

    function handleMinPre() {
        const newMin = min === 0 ? 55 : min - 5;
        setmin(newMin);
      
    }
    
    function handleHourPost() {
        const newHour = hour === 12 ? 0 : hour + 1;
        sethour(newHour);

    }
    


    function handleHourScroll(e) {
        e.stopPropagation();
        e.preventDefault();
        if (e.deltaY < 0) {
            handleHourPre();
        } else if (e.deltaY > 0) {
            handleHourPost();
        }

    }

    function handleMinScroll(e) {
        e.stopPropagation();
        e.preventDefault();
        if (e.deltaY < 0) {
            handleMinPre();
        } else if (e.deltaY > 0) {
            handleMinPost();
        }
    }

    function handlePeriodScroll(e) {
        console.log("period scroll")
        e.stopPropagation();
        e.preventDefault();
        if (e.deltaY < 0) {
            handlePeriodClick();
        } else if (e.deltaY > 0) {
            handlePeriodClick();
        }
    }

    return (
        <div className={timeStyle.widget}>
            <div className={`${timeStyle.time} d-flex align-items-center justify-content-evenly my-5`}>
                <div className="text-center" onWheel={handleHourScroll} >
                    <h6 className='mb-3'>ساعات</h6>
                    <h3 onClick={handleHourPre} className={`${timeStyle.pre}`}>{hour === 0 ? 12 : hour - 1}</h3>
                    <h3 className={`${timeStyle.current}`}>{hour}</h3>
                    <h3 onClick={handleHourPost} className={`${timeStyle.post}`}>{hour === 12 ? 0 : hour + 1} </h3>
                </div>
                <div className="text-center" onWheel={handleMinScroll} >
                    <h6 className='mb-3'>دقائق</h6>
                    <h3 onClick={handleMinPre} className={`${timeStyle.pre}`}>{min === 0 ? 59 : min - 1}</h3>
                    <h3 className={`${timeStyle.current}`}>{min}</h3>
                    <h3 onClick={handleMinPost} className={`${timeStyle.post}`}>{min === 59 ? 0 : min + 1}</h3>
                </div>
                <div className="text-center" onWheel={handlePeriodScroll} >
                    <h3 onClick={handlePeriodClick} className={`${timeStyle.pre}`}>{period === 'ص' ? "م" : "ص"}</h3>
                    <h3 onClick={handlePeriodClick} className={`${timeStyle.current}`}>{period}</h3>
                </div>
            </div>
        </div>
    )
}

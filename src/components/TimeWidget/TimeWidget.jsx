import React, { useEffect, useState } from 'react'

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


    MySwal.fire(
        {
            title: 'حدد الوقت المناسب',
            html: <TimeWidget reserv={reserv} updateMutation={updateMutation} timeState={timeState} setTimeState={setTimeState} />,
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
                    updateMutation.mutate({ id: reserv?.id, data: { time: `${timeState.hour}:${timeState.min} ${timeState.period}` } });
                    console.log("++++++")
                } catch (error) {
                    console.error("Mutation failed", error);
                }
            }

        })



};



export const TimeWidget = ({ reserv, updateMutation, setTimeState, timeState }) => {



    const { h, m, p } = extractTime(reserv.time);
    const [hour, sethour] = useState(Number(h));
    const [min, setmin] = useState(Number(m));
    const [period, setperiod] = useState(p)

    useEffect(() => {
        setTimeState({...timeState, "hour": hour})
        console.log({ timeState })
        console.log({hour})
      }, [hour]); // Dependency array

    function handlePeriodClick() {
        setperiod(period === 'ص' ? "م" : "ص")

    }

    function handleMinPre() {
        setmin(min === 0 ? 59 : min - 1);
    }

    function handleMinPost() {
        setmin(min === 59 ? 0 : min + 1)
    }

    function handleHourPre() {
        sethour(hour === 0 ? 12 : hour - 1);
    }

    function handleHourPost() {
        sethour(hour === 12 ? 0 : hour + 1)
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

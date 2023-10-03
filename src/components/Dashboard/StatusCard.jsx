import React from 'react'
import style from './Dashboard.module.css'

export const StatusCard = ({ title, number, status, color }) => {
    return (
        <div>
            <div className="card me-3 ">

                <div className="card-body p-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className={`${style.title} m-0  ms-5`}>{title}  <span className={style.subtitle}> | اليوم</span></h5>
                        <img role="button" src="/images/VectorGray.svg" alt=""></img>
                    </div>


                    <div className="d-flex  align-items-center">
                        <div>
                            <p className={`${style.number} mt-4 mb-1`}>{number}</p>
                            {color == "green" && <p className={`${style.status} mb-1 d-inline-block `} style={{ color: '#12B249', backgroundColor: '#12B2491A' }}  >{status}</p>}
                            {color == "red" && <p className={`${style.status} mb-1 d-inline-block `} style={{ color: '#F81616', backgroundColor: '#F816161A' }}  >{status}</p>}

                        </div>
                        {color == "green" && <img className={style.arrow} src='./images/greenArrow.svg'></img>}
                        {color == "red" && <img className={style.arrow} src='./images/redArrow.svg'></img>}
                    </div>

                </div>
            </div>
        </div>
    )
}

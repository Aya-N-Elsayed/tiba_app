import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './BookBtn.module.css'

export function BackBtn() {
    
    const navigation = useNavigate();
    return (
        <div>
            <button className={style.backBtn}
                type='button'
                onClick={() => {
                    navigation(-1);
                }}
            > 
                <div className="d-flex align-items-center">
                    <img className='ms-1 w-100' src="/images/back-square.svg" alt="" />
                    <p className="m-0">رجوع</p>
                </div>

            </button>
        </div>
    )
}

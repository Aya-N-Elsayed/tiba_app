import React from 'react'
import styles from './BookBtn.module.css'


export const NewPatientBtn = ({setShowPopup, showPopup}) => {
    return (
        <button
            type="button"
            className={`${styles.newPatientBtn} d-flex`}
            onClick={() => setShowPopup({...showPopup, option: 'p'})}
        >
            <img src="/images/circleBlue.svg" alt="add"  className='ms-2'/>
            <h6 className='m-0 p-0 fs-5'> اضافة مريض </h6>
        </button>
    );
}

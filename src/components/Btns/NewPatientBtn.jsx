import React from 'react'
import styles from './BookBtn.module.css'


export const NewPatientBtn = ({ setShowPopup, showPopup, style }) => {
    console.log('Style:', style); // Debugging

    return (
        <button
            type="button"
            className={`${styles[style] } d-flex`}
            onClick={() => setShowPopup({ ...showPopup, option: 'p' })}
        >
            <img src="/images/circleBlue.svg" alt="add" className='ms-2' />
            <h6 className='m-0 p-0 '> اضافة مريض </h6>
        </button>
    );
}

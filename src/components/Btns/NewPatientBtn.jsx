import React from 'react'
import styles from './BookBtn.module.css'


export const NewPatientBtn = ({setShowPopup, showPopup}) => {
    return (
        <button
            type="button"
            className={styles.newPatientBtn}
            onClick={() => setShowPopup({...showPopup, option: 'p'})}
        >
            <h6 className='m-0 p-0'>اضافة مريض جديد</h6>
        </button>
    );
}

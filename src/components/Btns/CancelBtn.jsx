import React from 'react'
import styles from './CancelBtn.module.css'

export const CancelBtn = () => {
    return (
        <div className=''>
            <button
                type="submit"
                className={`btn ${styles.signBtn}  d-flex justify-content-center  align-items-center `}
                id="Btn"

            >

                <h6 className='m-0 p-0'>إلغاء

                </h6>

            </button>
        </div>
    )
}

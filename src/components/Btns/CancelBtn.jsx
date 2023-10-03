import React, { useContext } from 'react'
import styles from './CancelBtn.module.css'
import { PopupContext } from '../../context/PopUpContext';

export const CancelBtn = () => {

    const {setShowPopup}  = useContext(PopupContext);
    return (
        <div className=''>
            <button
                type="button"
                className={`btn ${styles.signBtn}  d-flex justify-content-center  align-items-center `}
                id="Btn"
                onClick={()=>{    setShowPopup({"option":null});}
                    
                    
                   }

            >

                <h6 className='m-0 p-0'>إلغاء

                </h6>

            </button>
        </div>
    )
}

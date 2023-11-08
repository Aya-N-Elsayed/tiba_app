import React from 'react'
import styles from './BookBtn.module.css'

export const BookBtn = ({ txt, handleSubmit }) => {

  return (
    <button
    type="submit" onClick={handleSubmit}
    className= {`btn ${styles.signBtn }  d-flex justify-content-center  align-items-center` }
    id="Btn"
    
  >
    
      <h6 className='m-0 p-0'>{txt}
        
    </h6>
            <img
              className={styles.arrowLeft}
              alt="Arrow left"
              src="/images/arrow-leftPop.svg"
            />
  </button>
  )
}

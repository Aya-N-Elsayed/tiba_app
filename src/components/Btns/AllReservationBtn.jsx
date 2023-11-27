import React from 'react'
import styles from './BookBtn.module.css'
import { useNavigate } from 'react-router-dom'

export const AllReservationBtn = ({ }) => {
    const navigation = useNavigate();

    
    function handleSubmit() {
        navigation(`/operations/`)

  }

  return (
    <button
    type="submit" onClick={handleSubmit}
    className= {`btn ${styles.allReservationBtn}  d-flex justify-content-center  align-items-center` }
    id="Btn"
    
  >
    
      <h6 className='m-0 p-0'>مشاهدة كل الحجوزات  </h6>
            <img
              className={styles.arrowLeft}
              alt="Arrow left"
              src="/images/arrow-leftB.svg"
            />
  </button>
  )
}

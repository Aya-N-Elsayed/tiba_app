import React from 'react'

export const BookBtn = ( {handleClick , classDisable}) => {
  return (
    <button
    type="button" onClick={handleClick}
    className={`btn bookBtn d-flex flex-row-reverse justify-content-center w-100 ${classDisable}`}
  >
    
    حجز عملية
    <img className="btnicons" alt="Image" src="/images/add.svg" />
  </button>
  )
}
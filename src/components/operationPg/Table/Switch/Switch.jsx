import style from './Switch.module.css'

import React from 'react'

export const Switch = ({ confirmed, handleOnChange }) => {
  // console.log("switch ",{confirmed})
  return (
      <div>
          
          <label className={`${style.switch}`}>
          <input type="checkbox" checked={confirmed==='Confirmed'} onChange={handleOnChange}/>
              <span className={`${style.slider} ${style.round}`}></span>
            </label>
          
    </div>
  )
}

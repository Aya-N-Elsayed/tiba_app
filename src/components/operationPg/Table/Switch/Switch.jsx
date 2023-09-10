import style from './Switch.module.css'

import React from 'react'

export const Switch = () => {
  return (
      <div>
          
          <label className={`${style.switch}`}>
              <input type="checkbox"/>
              <span className={`${style.slider} ${style.round}`}></span>
            </label>
          
    </div>
  )
}

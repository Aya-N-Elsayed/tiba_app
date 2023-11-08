import React from 'react'

import style from './Filter.module.css'

export const Filter = () => {
    return (
        <>
           
      
        <div className={`${style.filterPg}  container bg-white `}>
            <div className={`${style.filter}   `}>
                
                <div className="btn-group d-flex w-100">
                    
                <ul className="dropdown-menu text-end">
                        <li className= "dropdown-item"> قديم</li>
                        <li className="dropdown-item"> جديد</li>
                        <li className="dropdown-item"> حالة الطبيب</li>
                        

                    </ul>  
                    <button type="button" className={`${style.dropdown_toggle} btn w-100 p-0 text-end`} data-bs-toggle="dropdown" aria-expanded="false">
                        تصفية
                    </button>

                    </div>
                
            </div>
            


            
        </div>
    </>
  )
}

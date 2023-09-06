import React from 'react'

import style from './Filter.module.css'

export const Filter = () => {
    return (
      
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
            


            <div className={`${style.fitlerBtns} d-flex `}>

                <div className="day">
                    <h4>
                        اليوم
                    </h4>
                    <div className="btn-group ">
                    
                    <ul className="dropdown-menu ">
                            {/* <li className= "dropdown-item"> قديم</li>
                            <li className="dropdown-item"> جديد</li>
                            <li className="dropdown-item"> حالة الطبيب</li> */}
                            
    
                        </ul>  
                        <button type="button" className={`dropdown-toggle  w-100  d-flex justify-content-between align-items-center `} data-bs-toggle="dropdown" aria-expanded="false">
                            <h6 className='mb-0 ps-1'> 1/8/2023</h6>
                        </button>
    
                        </div>
                </div>

                <div className="user">
                    <h4>
                        موظف اﻹستقبال
                    </h4>
                    <div className="btn-group ">
                    
                    <ul className="dropdown-menu text-end">
                            {/* <li className= "dropdown-item"> قديم</li>
                            <li className="dropdown-item"> جديد</li>
                            <li className="dropdown-item"> حالة الطبيب</li> */}
                            
    
                        </ul>  
                        <button type="button" className={`dropdown-toggle  d-flex align-items-center justify-content-between`} data-bs-toggle="dropdown" aria-expanded="false">
                            <h6 className='mb-0 ps-1'> الكل</h6>
                        </button>
    
                        </div>
                </div>

                <div className="surgon">
                    <h4>
                        الجراح
                    </h4>
                    <div className="btn-group ">
                    
                    <ul className="dropdown-menu">
                            {/* <li className= "dropdown-item"> قديم</li>
                            <li className="dropdown-item"> جديد</li>
                            <li className="dropdown-item"> حالة الطبيب</li> */}
                            
    
                        </ul>  
                        <button type="button" className={`dropdown-toggle  justify-content-between  d-flex align-items-center `} data-bs-toggle="dropdown" aria-expanded="false">
                            <h6 className='mb-0 ps-1'> الكل</h6>
                        </button>
    
                        </div>
                </div>

                
            </div>
            
        </div>
    
  )
}

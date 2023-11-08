import React from 'react'
import { Navbar } from "../LoginPg/Navbar/Navbar"
import { Sidebar } from "../Sidebar/Sidebar"
import { Outlet } from 'react-router-dom'
import { PopUp } from '../PopUp/PopUp'

export const Main = () => {

  

  return (
    <div className='position-relative'>

      <PopUp  /> 
      
           <header className="container-fluid d-flex main h-100 justify-content-stretch px-0 m-0 ">
              <Sidebar />
              <section className="leftSection">
                  {/* <Navbar /> */}

          

          <div className='mx-4'>
          <Outlet/>
          </div>
                
                  
                </section>
              </header>
          

    </div>
  )
}

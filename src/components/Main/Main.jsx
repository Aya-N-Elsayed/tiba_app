import React from 'react'
import { Navbar } from "../Navbar/Navbar"
import { Sidebar } from "../Sidebar/Sidebar"
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
      <div className=''>
           <header className="container-fluid d-flex main h-100 justify-content-stretch px-0 m-0 ">
              <Sidebar />
              <section className="leftSection">
                  <Navbar />

          

          <div className='mx-4'>
          <Outlet/>
          </div>
                
                  
                </section>
              </header>
          

    </div>
  )
}

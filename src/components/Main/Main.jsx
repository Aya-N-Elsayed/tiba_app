import React from 'react'
import { Navbar } from "../Navbar/Navbar"
import { Sidebar } from "../Sidebar/Sidebar"

export const Main = () => {
  return (
      <div className='vh-100'>
           <header className="container-fluid d-flex h-100 px-0 m-0 ">
              <Sidebar />
              <section className="leftSection">
                  <Navbar />
                  
                </section>
              </header>
          

    </div>
  )
}

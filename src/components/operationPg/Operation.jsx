import { Sidebar } from "../Sidebar/Sidebar"
import { Navbar } from "../Navbar/Navbar"
import { Filter } from "./Filter/Filter"
import { Table } from "./Table/Table"

export const OperationPg = () => {
    return (
        <header className="container-fluid d-flex px-0 m-0 ">
  
            
         <Sidebar/>
          <section className="leftSection">
             
                <Navbar />
                
                <Filter/>
               
                <Table/>
              
              
          </section>
          
  
            
      </header>
    )
  }
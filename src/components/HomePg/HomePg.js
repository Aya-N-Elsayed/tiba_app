import { Navbar } from "../Navbar/Navbar"
import { Sidebar } from "../Sidebar/Sidebar"
import { MonthCalender } from "./Calender"

export const HomePg = () => {
  return (
      <header className="container-fluid d-flex px-0 m-0 ">

        <Sidebar/>
        <section className="leftSection">
            {/* navbar  */}
            <Navbar/>
            <MonthCalender/>
            
            
        </section>
        

          
    </header>

    //       <header className="container-fluid d-flex px-0 m-0 ">

        
    //     <section className="leftSection">
    //         {/* navbar  */}
            
    //         <MonthCalender/>
            
            
    //     </section>
        

          
    // </header>
  )
}

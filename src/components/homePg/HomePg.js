import { Calender } from "./Calender"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"
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
  )
}

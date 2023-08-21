import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

export const HomePg = () => {
  return (
      <header className="container-fluid vh-100 d-flex flex-nowrap  ">

        
        <section className="leftSection">
            {/* navbar  */}
            <Navbar/>
            
            
            
          </section>
          <Sidebar/>

          
    </header>
  )
}

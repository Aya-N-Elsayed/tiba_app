
import { LoginForm } from "./LoginForm.jsx"
import { Logo } from "./Logo"



export const LoginPg = ({toggleFlag}) => {
  return (
    <div className="container-fluid row vh-100 p-0 g-0">
     
    
      <div className="col-md-6 ">
      <LoginForm  toggleFlag ={ toggleFlag}/>
          
        </div>

      <div className="col-md-6  " >
      <Logo/>   
          

        </div>
        

    </div>
  )
}

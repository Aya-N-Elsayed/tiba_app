
import { LoginForm } from "./LoginForm"
import { Logo } from "./Logo"



export const LoginPg = () => {
  return (
    <div className="container-fluid row vh-100 p-0 g-0">
     
    
      <div className="col-md-6 ">
      <LoginForm  />
          
        </div>

      <div className="col-md-6  " >
      <Logo/>   
          

        </div>
        

    </div>
  )
}

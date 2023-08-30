
import { LoginForm } from "./LoginForm/LoginForm"
import { Logo } from "./Logo"

export const LoginPg = () => {
  return (
    <div className="container-fluid row vh-100 p-0 g-0">
     
    
        <div className="col-md-6 p-0">
          <Logo/>   
        </div>

        <div className="col-md-6 p-0 overflow-visible" >
          <LoginForm  />

        </div>
        

    </div>
  )
}

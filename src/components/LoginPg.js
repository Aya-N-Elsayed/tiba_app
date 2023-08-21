
import { LoginForm } from "./LoginForm/LoginForm"
import { Logo } from "./Logo"

export const LoginPg = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-between w-100 flex-wrap">
      <Logo/>   
      <LoginForm />
      
    </div>
  )
}

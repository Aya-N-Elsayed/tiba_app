
import { LoginPg } from "./components/LoginPg/LoginPg";
import { HomePg } from "./components/HomePg/HomePg";
import { OperationPg } from "./components/operationPg/Operation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Doctors } from "./components/DoctorsPg/Doctors";

import react,{ useContext, useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { PopupProvider, PopupContext } from "./context/PopUpContext";







function App() {




  const router = createBrowserRouter([
    {
      
  
  
      path: '/', element: <PopupProvider><Main/></PopupProvider> 
      , children: [
        
        { index: true, element: <Dashboard /> },
        { path: '/dashboard', element: <Dashboard/> },
        { path: '/home', element: <HomePg /> },
        { path: '/login', element: <LoginPg /> },
        { path: 'operations', element: <OperationPg /> },
        { path: '/doctors', element: <Doctors />}
      ]
    },
  ]
  
  )



  const [flag, setflag] = useState(true);
  function toggleFlag() {
    console.log(flag);
    setflag(!flag);

  };



  return (
    <div className="App">
      {/* {console.log(flag)} */}
      {flag ? <LoginPg toggleFlag={ toggleFlag} />:<RouterProvider router={router} />} 

    </div>
  );
}

export default App;
// export setflag;

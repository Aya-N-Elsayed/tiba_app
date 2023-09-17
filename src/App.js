
import { LoginPg } from "./components/LoginPg/LoginPg";
import { HomePg } from "./components/HomePg/HomePg";
import { OperationPg } from "./components/operationPg/Operation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Doctors } from "./components/DoctorsPg/Doctors";

import react,{ useState } from "react";
import { DashBoard } from "./components/Dashboard/DashBoard";



const router = createBrowserRouter([
  {
    
    path: '/', element: <Main />, children: [
      
      { index: true, element: <DashBoard/> },
      { path: 'home', element: <HomePg /> },
      { path: 'login', element: <LoginPg /> },
      { path: 'operations', element: <OperationPg /> },
      { path:'doctors', element:<Doctors/>}
    ]
  },
]

)

function App() {


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


import { LoginPg } from "./components/LoginPg/LoginPg";
import { HomePg } from "./components/HomePg/HomePg";
import { OperationPg } from "./components/operationPg/Operation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Doctors } from "./components/DoctorsPg/Doctors";

const router = createBrowserRouter([

  {
    path: '', element: <Main />, children: [
      

      { path: '/home', element: <HomePg /> },
      { path: '/login', element: <LoginPg /> },
      { path: '/operations', element: <OperationPg /> },
      { path:'/doctors', element:<Doctors/>}
    ]
  
  
  
  
  },
  // { path: '/home', element: <HomePg /> },
  // { path: '/login', element: <LoginPg /> },
  // { path: '/operations', element: <OperationPg /> }


]

)



function App() {
  return (
    <div className="App">
      {/* <LoginPg /> */}
      {/* <HomePg/> */}

      {/* <OperationPg/> */}
      <RouterProvider router={router}/>

      {/* <Main/> */}
    </div>
  );
}

export default App;

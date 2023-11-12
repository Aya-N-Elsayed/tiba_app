
import { LoginPg } from "./components/LoginPg/LoginPg";
import { HomePg } from "./components/HomePg/HomePg";
import { OperationPg } from "./components/operationPg/Operation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Doctors } from "./components/DoctorsPg/Doctors";

import react,{ useContext, useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { PopupProvider, PopupContext } from "./context/PopUpContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from 'react-query/devtools';
import { Patients } from "./components/PatientsPg/Patients";


const queryClient = new QueryClient();

export const baseURL = process.env.REACT_APP_BASEURL;



function App() {




  const router = createBrowserRouter([
    {
      
  
  
      path: '/', element: <PopupProvider>
 <Main />
      </PopupProvider> 
      , children: [
        
        { index: true, element: <Dashboard /> },
        { path: '/dashboard', element: <Dashboard/> },
        { path: '/home', element: <HomePg /> },
        { path: '/login', element: <LoginPg /> },
        { path: '/operations/:month/:year/:day', element: <OperationPg /> },
        { path: '/doctors', element: <Doctors /> },
        { path: '/patients', element: <Patients />}
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
       <QueryClientProvider client={queryClient}>
      <Toaster />

        {flag ? <LoginPg toggleFlag={toggleFlag} /> : <RouterProvider router={router} />} 
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

    </div>
  );
}

export default App;


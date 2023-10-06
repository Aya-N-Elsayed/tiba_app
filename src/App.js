
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
import { DoctorsProvider } from "./context/DoctorsContext";
import { ReactQueryDevtools } from 'react-query/devtools';






const queryClient = new QueryClient();



export const baseURL = 'https://tiba-backend.vercel.app/api/';


function App() {




  const router = createBrowserRouter([
    {
      
  
  
      path: '/', element: <PopupProvider>
       <DoctorsProvider> <Main /></DoctorsProvider> 
      </PopupProvider> 
      , children: [
        
        { index: true, element: <Dashboard /> },
        { path: '/dashboard', element: <Dashboard/> },
        { path: '/home', element: <HomePg /> },
        { path: '/login', element: <LoginPg /> },
        { path: '/operations/:month/:year/:day', element: <OperationPg /> },
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
      <Toaster />
     <QueryClientProvider client={queryClient}>
        {flag ? <LoginPg toggleFlag={toggleFlag} /> : <RouterProvider router={router} />} 
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

    </div>
  );
}

export default App;


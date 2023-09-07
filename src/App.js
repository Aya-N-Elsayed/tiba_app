
import { LoginPg } from "./components/LoginPg/LoginPg";
import { HomePg } from "./components/HomePg/HomePg";
import { OperationPg } from "./components/operationPg/Operation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";

const router = createBrowserRouter([

  {path: '', element:<HomePg/>},
  { path: '/home', element: <HomePg /> },
  { path: '/login', element: <LoginPg /> },
  { path: '/operations', element: <OperationPg /> },
  {path: '/main', element:<Main/>}

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

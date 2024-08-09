import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import NewsDetails from './Pages/NewsDetails';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Routes/Private/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1 className='text-center text-4xl'>404. error this page not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('/news.json')
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)

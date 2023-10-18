import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root.jsx';
import Home from './pages/Home.jsx';
import AddProduct from './pages/AddProduct';
import MyCart from './pages/MyCart';
import Register from './pages/Register';
import Login from './pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch ('brands.json')
      
      },
      {
        path : '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myCart',
        element:<MyCart></MyCart>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element:<Login></Login>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

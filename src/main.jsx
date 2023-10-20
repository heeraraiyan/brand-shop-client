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
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute';
import BrandProduct from './pages/BrandProduct';
import About from './pages/About';
import UpdateProduct from './pages/UpdateProduct';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch ('/brands.json')
      
      },
      {
        path : '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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
      },
      {
        path:'/brandProduct/:brandName',
        element: <BrandProduct></BrandProduct>,
        loader: ({params}) =>fetch(`http://localhost:5000/products_Brand/${params.brandName}`)
      },

      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)

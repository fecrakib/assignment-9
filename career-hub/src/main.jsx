import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,RouterProvider,} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import AppliedJob from './component/AppliedJob/AppliedJob';
import Blog from './component/Blog/Blog';
import  Root from './component/Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/statistic",
        element:<Statistics></Statistics>
      },
      {
        path:"/appliedJob",
        element:<AppliedJob></AppliedJob>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"home",
        element:<Home></Home>,
        loader:()=>fetch('../public/fakedata.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

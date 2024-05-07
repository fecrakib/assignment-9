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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

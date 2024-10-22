import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './components/App.jsx'
import './main.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // children: [
    //   {
    //     path: "/",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

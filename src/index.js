import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from './Components/Project';
import AdminPssword from './Components/AdminPssword';
// import reportWebVitals \from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

  },

  {
    path:"/projects",
    element:<Project/>
  },
  {
    path:"/admin",
    element:<AdminPssword/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

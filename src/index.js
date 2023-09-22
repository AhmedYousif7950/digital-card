import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './compononets/preview/main/main';
import MockPhone from './compononets/add/mockPhone/mockPhone';
import AddLinks from './compononets/add/addLinks/addLinks';
import NavLinks from './compononets/add/navLinks';
import Profile from './compononets/add/profile/profile';
import MyContextProvider from './compononets/context';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },

  {
    path: "/editor",
    element: 
      <>
      <NavLinks/>
      <div className='content-con' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '15px' }}>
  <MockPhone />
  <AddLinks />
</div>
   </>
    ,
  },
  {
    path: "/links",
    element: 
      <>
      <NavLinks/>
      <div className='content-con' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '15px' }}>
  <MockPhone />
  <AddLinks />
</div>
   </>
    ,
  },
  {
    path: "/profile",
    element: 
      <>
      <NavLinks/>
      <div className='content-con' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '15px' }}>
  <MockPhone />
  <Profile />
</div>
   </>
    ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContextProvider>
     <RouterProvider router={router} />


  </MyContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

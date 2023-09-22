import './App.css';
import MockPhone from './compononets/add/mockPhone/mockPhone';
import AddLinks from './compononets/add/addLinks/addLinks';
import NavLinks from './compononets/add/navLinks';
import Profile from './compononets/add/profile/profile';
import Main from './compononets/preview/main/main';

import React from "react";
import ReactDom from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";


import { Link } from "react-router-dom";


function App() {
  return (

   
   

    <Routes>

      <Route path='/' element={<Main/>}/>
      <Route path='/Customize' element={
            <>
            <NavLinks/>
            <div className='content-con' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '15px' }}>
        <MockPhone />
        <AddLinks />
      </div>
         </>

      } />


    <Route path='/main' element={<Main/>}/>

    </Routes>

    
    

    

     

  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import LoginRestriction from './component/LoginRestriction';
import PrivateRoute from './component/PrivateRoute';
import { useSelector } from 'react-redux';
import CheckoutPage from './component/CheckoutPage';
import Catgories from './component/Categories';
import Signup from './component/Signup';
import Login from './component/Login';
import Homescreen from './screens/Homescreen'


function App() {
  const user = useSelector((state) => {
    console.log(state);
    return state.au.auth;
  });

  return (
    <div className='App'>
      <Navbar />
      <Routes>
      <Route path='/Shop' element={<Homescreen/>}/>

        <Route path='/Home' element={<Catgories/>}/>
        <Route exact path='/Checkout' element={<CheckoutPage />} />
        <Route exact path='/Categories' element={<Catgories />} />
        <Route exact path='/Signup' element={<Signup />} />
        <Route exact path='/Login' element={<Login/>} />


        <Route element={<LoginRestriction />}></Route>

        <Route element={<PrivateRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;

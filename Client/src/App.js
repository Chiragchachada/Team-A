import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import LoginRestriction from './component/LoginRestriction';
import PrivateRoute from './component/PrivateRoute';
import { useSelector } from 'react-redux';
import CheckoutPage from './component/CheckoutPage';
import Catgories from './component/Categories';
import Homescreen from './screens/Homescreen'

import Login from './component/Login';
import Signup from './component/Signup';
import Cart from './component/Cart';
import Footer from './component/Footer';

function App() {
  const user = useSelector((state) => {
    console.log(state);
    return state.au.auth;
  });

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/Shop' element={<Homescreen />} />
        <Route path='/Cart' element={<Cart />} />

        <Route path='/Home' element={<Catgories />} />
        <Route exact path='/Checkout' element={<CheckoutPage />} />
        <Route exact path='/Categories' element={<Catgories />} />
        <Route exact path='/Signup' element={<Signup />} />
        <Route exact path='/Login' element={<Login />} />



        {/* <Routes> */}
        {/* <Route exact path='/' element={<Catgories />} />
        <Route exact path='/shop' element={ <Homescreen />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />

        <Route exact path='login' element={<Login />} />
        <Route exact path='signup' element={<Signup />} />

        <Route element={<LoginRestriction />}></Route>

        <Route element={<PrivateRoute />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

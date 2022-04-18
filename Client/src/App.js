import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import LoginRestriction from './component/LoginRestriction';
import PrivateRoute from './component/PrivateRoute';
import { useSelector } from 'react-redux';
import Homescreen from '../src/component/shop/Homescreen';
import Cart from './component/cart/Cart';
import Catgories from './component/home/Categories';
import CheckoutPage from './component/checkout/CheckoutPage';
import Signup from './component/signup/Signup';
import Login from './component/login/Login';
import Footer from '../src/component/footer/Footer';
import Contact from './component/contact/Contact';

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
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Home' element={<Catgories />} />
        <Route exact path='/Checkout' element={<CheckoutPage />} />
        <Route exact path='/Signup' element={<Signup />} />
        <Route exact path='/Login' element={<Login />} />

     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

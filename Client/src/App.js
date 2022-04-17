import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import LoginRestriction from './component/LoginRestriction';
import PrivateRoute from './component/PrivateRoute';
import { useSelector } from 'react-redux';
import CheckoutPage from './component/CheckoutPage';
import Catgories from './component/Categories';

function App() {
  const user = useSelector((state) => {
    console.log(state);
    return state.au.auth;
  });

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/checkout' element={<CheckoutPage />} />
        {/* <Route exact path ="/navbar" element={<Navbar/>}/> */}
        <Route exact path='/categories' element={<Catgories />} />

        <Route element={<LoginRestriction />}></Route>

        <Route element={<PrivateRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;

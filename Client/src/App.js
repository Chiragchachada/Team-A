import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/header/Navbar';
import { useSelector } from 'react-redux';
import Homescreen from '../src/component/shop/Homescreen';
import Cart from './component/cart/Cart';
import Catgories from './component/home/Categories';
import CheckoutPage from './component/checkout/CheckoutPage';
import Signup from './component/signup/Signup';
import Login from './component/login/Login';
import Footer from '../src/component/footer/Footer';
import Contact from './component/contact/Contact';
import CategoryProducts from './component/CategoryProducts/CategoryProducts';
import DetailsProduct from './component/CategoryProducts/DetailsProduct';
import LoginRestriction from './component/LoginRestriction';
import PrivateRoute from './component/PrivateRoute';


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
        <Route path='/Contact' element={<Contact />} />
        <Route path='/' element={<Catgories />} />
        <Route exact path='/Checkout' element={<CheckoutPage />} />
        <Route exact path='/CategoryProduct' element={<CategoryProducts />} />

        <Route exact path='/Detail' element={<DetailsProduct />} />

        {/* Login restriction Private Route */}
        <Route element={<LoginRestriction />}>
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Signup' element={<Signup />} />
        </Route>


        {/* Private Route */}
        <Route element={<PrivateRoute />}>

          <Route path='/Cart' element={<Cart />} />

        </Route>


      </Routes>
      <Footer />
    </div>
  );
}

export default App;

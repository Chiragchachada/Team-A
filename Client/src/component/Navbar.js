import React from 'react';
// import './style.css';
import TopNavbar from './TopNavbar';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <TopNavbar />

      <div className='container'>
        <div className='row border-top px'>
          <div className='col-lg-9'>
            <nav className='navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0'>
              <button
                type='button'
                className='navbar-toggler'
                data-toggle='collapse'
                data-target='#navbarCollapse'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse justify-content-between'
                id='navbarCollapse'
              >
                <div className='navbar-nav mr-auto py-0'>
                  <Link to='/' className='nav-item nav-link active'>
                    Home
                  </Link>
                  <Link to='#' className='nav-item nav-link'>
                    Shop
                  </Link>
                  <Link to='#' className='nav-item nav-link'>
                    Shop Detail
                  </Link>
                  <div className='nav-item dropdown'>
                    <Link
                      to='#'
                      className='nav-link dropdown-toggle'
                      data-toggle='dropdown'
                    >
                      Pages
                    </Link>
                    <div className='dropdown-menu rounded-0 m-0'>
                      <Link to='#' className='dropdown-item'>
                        Shopping Cart
                      </Link>
                      <Link to='#' className='dropdown-item'>
                        Checkout
                      </Link>
                    </div>
                  </div>
                  <Link to='#' className='nav-item nav-link'>
                    Contact
                  </Link>
                </div>
                <div className='navbar-nav ml-auto py-0'>
                  <Link
                    to='login'
                    className='nav-item nav-link'
                    style={{ marginLeft: '160%' }}
                  >
                    Login
                  </Link>
                  <Link to='signup' className='nav-item nav-link'>
                    Register
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

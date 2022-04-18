import React from 'react';
import TopNavbar from './TopNavbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

  const user = useSelector((state) => {
    console.log(state);
    return state.au.auth;
  });
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
                   <a><Link to='/Home' className='nav-item nav-link active'> Home
                  </Link></a>
                   
                  <Link to='/Shop' className='nav-item nav-link'>
                    Shop
                  </Link>
                  <Link to='/About' className='nav-item nav-link'>
                    About
                  </Link>
                  {/* <div className='nav-item dropdown'>
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
                  </div> */}
                  <Link to='/Contact' className='nav-item nav-link'>
                    Contact
                  </Link>
                </div>
                <div className='navbar-nav ml-auto py-0'>
                 {!user.auth && <Link
                    to='/Login'
                    className='nav-item nav-link'
                    style={{ marginLeft: '160%' }}
                  >
                    Login
                  </Link>}
                  {!user.auth && <Link to='/Signup' className='nav-item nav-link'>
                    Register
                  </Link>}
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

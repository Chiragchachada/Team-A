import React from 'react';
// import '../../css/Style.css'
import { logout} from '../../store/auth.reducer'; 
import TopNavbar from './TopNavbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/cart-reducer';

function Navbar() {

  const user = useSelector((state) => {
    console.log(state);
    return state.au.auth;
  });
  const dispatch = useDispatch();
 


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
                <div className='navbar-nav  mr-auto py-0'>
                  <Link to='/' className='nav-item nav-link '>
                    Home
                  </Link>
                  <Link to='/Shop' className='nav-item nav-link '>
                    Shop
                  </Link>
                  <Link to='/About' className='nav-item nav-link'>
                    About
                  </Link>
                  
                  <Link to='/Contact' className='nav-item nav-link'>
                    Contact
                  </Link>
                </div>
                <div className='navbar-nav ml-auto py-0'>
                  {!user.auth &&<Link
                    to='login'
                    className='nav-item nav-link'
                    style={{ marginLeft: '160%' }}
                  >
                    Login
                  </Link>}
                  {!user.auth && <Link to='signup' className='nav-item nav-link'>
                    Register
                  </Link>}
                   {user.auth &&<Link  className='nav-item nav-link' onClick={()=>dispatch(logout())} to="">Log out</Link>}

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

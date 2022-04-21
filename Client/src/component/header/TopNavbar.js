import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function TopNavbar() {
  // const [name, setName] = useState('');
  // const [foundUsers, setFoundUsers] = useState(ShopData);

  // const ShopData = [];
  const user = useSelector((state) => {
    return state.au.auth;
  });

  const cart = useSelector((state) => {
    console.log(state);
    return state.cr.cart;
  });

  return (
    <>
      <div class='row align-items-center py-3 px-xl-5'>
        <div class='col-lg-3 d-none d-lg-block'>
          <Link to='/' class='text-decoration-none'>
            <h1 class='m-0 display-5 font-weight-semi-bold'>
              <span class='text-primary font-weight-bold border px-3 mr-1'>
                E
              </span>
              CART
            </h1>
          </Link>
        </div>
        <div class='col-lg-6 col-6 text-left'>
          <form action=''>
            <div class='input-group'>
              <input
                type='text'
                class='form-control'
                placeholder='Search for products'
              />
              <div class='input-group-append'>
                <span class='input-group-text bg-transparent text-primary'>
                  <i class='fa fa-search'></i>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div class='col-lg-3 col-6 text-right'>
          <Link to='/Cart' class='btn border'>
            <i class='fa fa-shopping-cart' aria-hidden='true'></i>
           {user.auth && <span class='badge text-dark'>{cart.length}</span>}
          </Link>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;

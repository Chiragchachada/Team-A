import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/product-reducer';
import { Link } from 'react-router-dom';
export default function Homescreen() {
  const [name, setName] = useState('');

  const ShopData = [];
  console.log(ShopData);
  const [foundUsers, setFoundUsers] = useState(ShopData);
  // ShopData.push(shop.)
  const shop = useSelector((state) => {
    return state.pr.products;
  });
  for (let i = 0; i < shop.length; i++) {
    let dt = shop[i].products;
    for (let j = 0; j < dt.length; j++) {
      ShopData.push(dt[j]);
    }
  }

  const user = useSelector((state) => {
    return state.au.auth;
  });
  const dispatch = useDispatch();

  const priceFilter = [];

  for (let i = 0; i < ShopData.length; i++) {
    let dat = ShopData[i].price;
    priceFilter.push(dat);
  }

  // console.log('price',priceFilter);
  const price = priceFilter.filter((x) => x >= 0 && x <= 300);
  const price1 = priceFilter.filter((x) => x >= 300 && x <= 800);
  const price2 = priceFilter.filter((x) => x >= 800 && x <= 10000);
  const price3 = priceFilter.filter((x) => x >= 10000 && x <= 30000);
  const price4 = priceFilter.filter((x) => x >= 30000 && x <= 90000);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const data = ShopData.filter((user) => {
        return user.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundUsers(data);
    } else {
      setFoundUsers(ShopData);
    }
    setName(keyword);
  };

 
const filterData = (item) => {
  const result = ShopData.filter((Data) => {
    console.log(Data.price);
    return Data.price === item;
  })
  setFoundUsers(result)
}




  useEffect(() => {
    console.log('Init ... View Products .... ');
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div>
      <div className='container-fluid bg-secondary mb-5'>
        <div
          className='d-flex flex-column align-items-center justify-content-center'
          style={{ minHeight: '250px' }}>
          <h1 className='font-weight-semi-bold text-uppercase mb-3'>
            Our Shop
          </h1>
          <div className='d-inline-flex'>
            <p className='m-0'>
              <Link to='/'>Home</Link>
            </p>
            <p className='m-0 px-2'>-</p>
            <p className='m-0'>Shop</p>
          </div>
        </div>
      </div>

      <div className='d-flex'>
        {/* <!-- Size Start --> */}
        <div className='border-bottom  col-3 '>
          <h5 className='font-weight-semi-bold mb-4'>Filter by price</h5>
          <form>
            <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3 '>
              <input
                type='checkbox'
                
                className='custom-control-input '
                onClick={()=> filterData(499)}
                id='price-all'></input>
              <label className='custom-control-label ' for='price-all'>
                All Price 
              </label>
              <span className='badge border font-weight-normal text-muted shadow'>
                {priceFilter.length}
              </span>
            </div>
            <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='price-1'></input>
              <label className='custom-control-label' for='price-1'>
                0Rs - 300Rs
              </label>
              <span className='badge border font-weight-normal text-muted shadow'>
                {price.length}
              </span>
            </div>
            <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='price-2'></input>
              <label className='custom-control-label' for='price-2'>
                300Rs - 800Rs
              </label>
              <span className='badge border font-weight-normal text-muted shadow'>
                {price1.length}
              </span>
            </div>
            <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='price-3'></input>
              <label className='custom-control-label' for='price-3'>
                800Rs - 10000RS
              </label>
              <span className='badge border font-weight-normal text-muted shadow'>
                {price2.length}
              </span>
            </div>
            <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='price-4'></input>
              <label className='custom-control-label' for='price-4'>
                10000Rs - 30000Rs
              </label>
              <span className='badge border font-weight-normal text-muted'>
                {price3.length}
              </span>
            </div>
            <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='price-5'></input>
              <label className='custom-control-label' for='price-5'>
                30000Rs - 90000Rs
              </label>
              <span className='badge border font-weight-normal text-muted shadow'>
                {price4.length}
              </span>
            </div>
          </form>
        </div>
        {/* <!-- Size End --> */}

        <div className='row'>
          <form className='mb-5 '>
            <div className='input-group col mx-auto' style={{ width: '450px' }}>
              <input
                type='text'
                onChange={filter}
                value={name}
                className='form-control mx-auto'
                placeholder='Search by name'></input>
              <div className='input-group-append'>
                <span className='input-group-text bg-transparent text-primary'>
                  <i className='fa fa-search'></i>
                </span>
              </div>
            </div>
          </form>
          {foundUsers.map((products) => {
            return (
              <div className='col-4'>
                <div>
                  <Product product={products} />
                  {/* {products.title} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

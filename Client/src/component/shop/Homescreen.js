import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/product-reducer';
import { Link } from 'react-router-dom';
export default function Homescreen() {
  const [name, setName] = useState('');
  const [filterprice, setFilterprice] = useState(false);
  const [filterData, setFilterdata] = useState(true);

  const ShopData = [];

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


  const dispatch = useDispatch();

  


  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const data = ShopData.filter((user) => {
        return user.title.toLowerCase().includes(keyword.toLowerCase());
      
      });
      setFoundUsers(data);
      setFilterdata(!filterData)
      
    } else {
    
      setFoundUsers(ShopData);
     
    }
    setName(keyword);
  };









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


        <div className='row'>
          <form className='mb-5 '>
            <div className='input-group col-5 mx-auto ' >
              <input
                type='text'
                onChange={filter}
                value={name}
                className='form-control mx-auto '
                placeholder='Search by title'></input>
              <div className='input-group-append'>
                <span className='input-group-text bg-transparent text-primary'>
                  <i className='fa fa-search'></i>
                </span>
              </div>
            </div>
          </form>
          { filterData?  ShopData.map((products) => {
            return (
              <div  className=' col-3 container ms-5 me-5' >
                <div>
                <Product product={products}  />
                 
           
                </div>
              </div>
            );
          }) : foundUsers.map((products) => {
            return (
              <div  className=' col-3 container ms-5 me-5' >
                <div>
                <Product product={products}  />
                 
           
                </div>
              </div>
            );
          })}
        </div>
      
    </div>
  );
}

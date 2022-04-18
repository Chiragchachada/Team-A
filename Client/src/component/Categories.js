import React, { useEffect } from 'react';
import './Categories.css';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/product-reducer'


function Catgories() {
  const products = useSelector((state) => {
      return state.pr.products
    })

    const user = useSelector((state) => {
        return state.au.auth
      })

    const dispatch = useDispatch();


    useEffect(() => {
      console.log('Init ... View Products .... ');
      dispatch(fetchProducts())
    }, [dispatch])
  return (
    <>
      <Slider />

      <div className='container-fluid pt-5'>
        <div className='row px-xl-5 pb-3'>
          
         {products.map((category)=>{;
           return( <div className='col-lg-4 col-md-6 pb-1  '>
           <div  className=' cat-item d-flex flex-column border card1  cart-item-padding1'>
             <p className='text-right'>{category.products.length} Products</p>
             <Link
               to='#'
               className='cat-img position-relative overflow-hidden mb-3'
             >
               <img className='img-fluid' src={category.categorypic} alt='image' />
             </Link>
             <h5 className='font-weight-semi-bold m-0'>{category.category}</h5>
           </div>
         </div>)
         })}
        </div>
      </div>
    </>
  );
}

export default Catgories;

import React from 'react';
import './Categories.css';
import cat1 from '../img/cat-1.jpg';
import cat2 from '../img/cat-2.jpg';
import cat3 from '../img/cat-3.jpg';
import cat4 from '../img/cat-4.jpg';
import cat5 from '../img/cat-5.jpg';
import cat6 from '../img/cat-6.jpg';
import Slider from './Slider';

function Catgories() {
  return (
    <>
      <Slider />

      <div className='container-fluid pt-5'>
        <div className='row px-xl-5 pb-3'>
          <div className='col-lg-4 col-md-6 pb-1'>
            <div className='cat-item d-flex flex-column border mb-4 cart-item-padding1'>
              <p className='text-right'>15 Products</p>
              <a
                href='#'
                className='cat-img position-relative overflow-hidden mb-3'
              >
                <img className='img-fluid' src={cat1} alt='cat1' />
              </a>
              <h5 className='font-weight-semi-bold m-0'>Men's dresses</h5>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 pb-1'>
            <div className='cat-item d-flex flex-column border mb-4 cart-item-padding5'>
              <p className='text-right'>15 Products</p>
              <a
                href=''
                className='cat-img position-relative overflow-hidden mb-3'
              >
                <img className='img-fluid' src={cat2} alt='' />
              </a>
              <h5 className='font-weight-semi-bold m-0'>Women's dresses</h5>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 pb-1'>
            <div className='cat-item d-flex flex-column border mb-4 cart-item-padding'>
              <p className='text-right'>15 Products</p>
              <a
                href=''
                className='cat-img position-relative overflow-hidden mb-3'
              >
                <img className='img-fluid' src={cat3} alt='' />
              </a>
              <h5 className='font-weight-semi-bold m-0'>Baby's dresses</h5>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 pb-1'>
            <div className='cat-item d-flex flex-column border mb-4 cart-item-padding2'>
              <p className='text-right'>15 Products</p>
              <a
                href=''
                className='cat-img position-relative overflow-hidden mb-3'
              >
                <img className='img-fluid' src={cat4} alt='' />
              </a>
              <h5 className='font-weight-semi-bold m-0'>Accerssories</h5>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 pb-1'>
            <div className='cat-item d-flex flex-column border mb-4 cart-item-padding3'>
              <p className='text-right'>15 Products</p>
              <a
                href='#'
                className='cat-img position-relative overflow-hidden mb-3'
              >
                <img className='img-fluid' src={cat5} alt='' />
              </a>
              <h5 className='font-weight-semi-bold m-0'>Bags</h5>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 pb-1'>
            <div className='cat-item d-flex flex-column border mb-4 cart-item-padding4'>
              <p className='text-right'>15 Products</p>
              <a
                href=''
                className='cat-img position-relative overflow-hidden mb-3'
              >
                <img className='img-fluid' src={cat6} alt='' />
              </a>
              <h5 className='font-weight-semi-bold m-0'>Shoes</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catgories;

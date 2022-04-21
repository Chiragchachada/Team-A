import React from 'react';
import './Slider.css';

import carousel1 from '../../img/carousel-1.jpg';
import carousel2 from '../../img/carousel-2.jpg';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <>
      <div id='header-carousel' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active carousel-item-heigth1'>
            <img className='img-fluid' src={carousel1} alt='' />

            <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
              <div className='p-3 carousel-text1'>
                <h4 className='text-light text-uppercase font-weight-medium mb-3'>
                  10% Off Your First Order
                </h4>
                <h3 className='display-4 text-white font-weight-semi-bold mb-4'>
                  Fashionable Dress
                </h3>
                <Link to='/Shop' className='btn btn-light py-2 px-3'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className='carousel-item carousel-item-heigth2'>
            <img className='img-fluid' src={carousel2} alt='' />
            <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
              <div className='p-3 carousel-text2'>
                <h4 className='text-light text-uppercase font-weight-medium mb-3'>
                  10% Off Your First Order
                </h4>
                <h3 className='display-4 text-white font-weight-semi-bold mb-4'>
                  Reasonable Price
                </h3>
                <Link to='#' className='btn btn-light py-2 px-3'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;

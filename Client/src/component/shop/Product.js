import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../../store/cart-reducer';
import { toast, ToastContainer } from 'react-toastify';

export default function Product({ product }) {
  const [quantity, setquantity] = useState();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.au.auth;
  });

  const userid = user.id;

  const valNot = () => {
    toast.success('Added successfully', {
      position: 'top-center',
      autoClose: 1000,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addToCart = (product, userid, quantity) => {
    dispatch(addtoCart(product, userid, quantity));
  };

  return (
    <>
      <div
        style={{ borderRadius: '30px' }}
        className='shadow-lg p-1 mb-5 bg-white cat-item '>
        <div
          onClick={handleShow}
          style={{ cursor: 'pointer' }}
          className='cat-item'>
          <h1 id='small'>{product.title}</h1>
          <img
            src={product.image}
            className='img-fluid cat-img mx-auto '
            style={{ height: '200px', width: '200px' }}></img>
        </div>
        <div className='flex-container'>
          <div className='w-100 m-1'>
            {/* <p>SIZE</p> */}
            <div className='w-100 d-flex m-1'>
              <p className='mt-3  text-muted'>Quantity</p>
              <select
                className='form-control mx-auto p-0 text-center mt-2 shadow rounded  text-muted'
                value={quantity}
                style={{ cursor: 'pointer', width: '40px' }}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}>
                {[...Array(10).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
            </div>
          </div>
          <div className=' mt-3 w-100'>
            <h1
              id='small'
              className='mt-2 text-muted'
              style={{ cursor: 'pointer' }}>
              Price: {product.price}₹
            </h1>
          </div>
        </div>

        <div className='flex-container'>
          <div className='m-1 w-100'>
            {user.auth && (
              <button
                className='btn btn-primary rounded shadow'
                onClick={() => {
                  addToCart(product, userid, quantity);
                  valNot();
                }}>
                {' '}
                ADD TO CART
              </button>
            )}
          </div>
        </div>

        <Modal show={show}>
          <Modal.Header closeButton onClick={handleClose}></Modal.Header>

          <Modal.Body>
            <img
              src={product.image}
              className='img-fluid mx-auto'
              style={{ height: '530px' }}></img>
          </Modal.Body>
        </Modal>
      </div>
      <ToastContainer theme='dark' />
    </>
  );
}

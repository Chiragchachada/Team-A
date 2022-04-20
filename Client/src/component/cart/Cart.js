import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteFromCart, fetchCart } from '../../store/cart-reducer';
import { addtoCart } from '../../store/cart-reducer';

// import '../../css/Style.css'

function Cart() {
  const [quantity, setquantity] = useState(0)
  const [fetch, setFetch] = useState(false)
  const dispatch = useDispatch();
  let navigate = useNavigate()
  const cart = useSelector((state) => {
    console.log(state)
    return state.cr.cart
  })
  const auth = (state) => {
    return state.au.auth
  }
  const user = useSelector(auth)
  const id = user.id
  useEffect(() => {
    dispatch(fetchCart({ id: id }));
  }, [fetch]);


  function deleteitem(id) {
    dispatch(deleteFromCart(id))
    setFetch(!fetch)

  }


  function total() {
    let total = 0
    cart.map(product => {
      total += product.price * product.quantity
    })
    return total
  }

  const checkOut = (product, quantity) => {
    console.log("in checkout")
    navigate('/checkout')
    // dispatch(checkout(product, quantity))


  }



  const addToCart = (product, id, quantity) => {
    dispatch(addtoCart(product, id, quantity));
  };
  const incNum = () => {
    setquantity(quantity + 1)
  }
  const decNum = () => {
    setquantity(quantity - 1)
  }










  return (
    <>
      <div className='container-fluid pt-5'>
        <div className='row px-xl-5'>
          <div className='col-lg-8 table-responsive mb-5'>
            <table className='table table-bordered text-center mb-0'>
              <thead className='bg-secondary text-dark'>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className='align-middle'>
                {cart.map((product) => {
                  return (
                    <tr>
                      <td className='align-middle'>
                        <img
                          src={product.image}
                          alt=''
                          style={{ width: '50px' }}
                        />{product.title}

                      </td>
                      <td className='align-middle'>{product.price}</td>
                      <td className='align-middle'>
                        <div
                          className='input-group quantity mx-auto'
                          style={{ width: '100px' }}>
                          <div className='input-group-btn'>
                            <button className='btn btn-sm btn-primary btn-minus' onClick={decNum} >
                              <i className='fa fa-minus'></i>
                            </button>
                          </div>
                          <input
                            type='text'
                            className='form-control form-control-sm bg-secondary text-center'
                            value={product.quantity}
                          />
                          <div className='input-group-btn'>
                            <button className='btn btn-sm btn-primary btn-plus' onClick={incNum} >
                              <i className='fa fa-plus'></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className='align-middle'>{product.price * product.quantity}</td>
                      <td className='align-middle'>
                        <button className='btn btn-sm btn-primary' onClick={() => deleteitem(product._id)}>
                          <i className='fa fa-times'></i>
                        </button>
                      </td>
                    </tr>

                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='col-lg-4'>
            <form className='mb-5' action=''>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control p-4'
                  placeholder='Coupon Code'
                />
                <div className='input-group-append'>
                  <button className='btn btn-primary'>Apply Coupon</button>
                </div>
              </div>
            </form>
            <div className='card border-secondary mb-5'>
              <div className='card-header bg-secondary border-0'>
                <h4 className='font-weight-semi-bold m-0'>Cart Summary</h4>
              </div>
              <div className='card-body'>
                <div className='d-flex justify-content-between mb-3 pt-1'>
                  <h6 className='font-weight-medium'>Subtotal</h6>
                  <h6 className='font-weight-medium'>{total()}</h6>
                </div>
                <div className='d-flex justify-content-between'>
                  <h6 className='font-weight-medium'>Shipping</h6>
                  <h6 className='font-weight-medium'>$0</h6>
                </div>
              </div>
              <div className='card-footer border-secondary bg-transparent'>
                <div className='d-flex justify-content-between mt-2'>
                  <h5 className='font-weight-bold'>Total</h5>
                  <h5 className='font-weight-bold'>{total()}</h5>
                </div>
                <button className='btn btn-block btn-primary my-3 py-3' onClick={() => checkOut(cart, quantity)}>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;

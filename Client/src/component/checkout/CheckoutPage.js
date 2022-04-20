import React from 'react';
import { useSelector } from 'react-redux';

function CheckoutPage() {

  const cart = useSelector((state) => {
    console.log(state)
    return state.cr.cart
  })
  const auth = (state) => {
    return state.au.auth
  }
  const user = useSelector(auth)
  const id = user.id

  function total() {
    let total = 0
    cart.map(product => {
      total += product.price * product.quantity
    })
    return total
  }

  return (
    <div className='container-fluid pt-5'>
      {/* Checkout start */}

      <div className='row px-xl-5'>
        <div className='col-lg-8' style={{ marginBottom: '100px' }}>
          <div className='mb-4'>
            <h4 className='font-weight-semi-bold mb-4'>Billing Address</h4>
            <div className='row'>
              <div className='col-md-6 form-group'>
                <label>First Name</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='John'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Last Name</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Doe'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>E-mail</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='example@email.com'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Mobile No</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='+123 456 789'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Address Line 1</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='123 Street'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Address Line 2</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='123 Street'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Country</label>
                <select className='custom-select'>
                  <option selected>United States</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>India</option>
                  <option>Algeria</option>
                </select>
              </div>
              <div className='col-md-6 form-group'>
                <label>City</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='New York'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>State</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='New York'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>ZIP Code</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='123'></input>
              </div>
              <div className='col-md-12 form-group'>
                <div className='custom-control custom-checkbox'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='newaccount'></input>
                  <label className='custom-control-label' for='newaccount'>
                    Create an account
                  </label>
                </div>
              </div>
              <div className='col-md-12 form-group'>
                <div className='custom-control custom-checkbox'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='shipto'></input>
                  <label
                    className='custom-control-label'
                    for='shipto'
                    data-toggle='collapse'
                    data-target='#shipping-address'>
                    Ship to different address
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className='collapse mb-5'
            style={{ marginBottom: '100px' }}
            id='shipping-address'>
            <h4 className='font-weight-semi-bold mb-4'>Shipping Address</h4>
            <div className='row'>
              <div className='col-md-6 form-group'>
                <label>First Name</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='John'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Last Name</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Doe'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>E-mail</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='example@email.com'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Mobile No</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='+123 456 789'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Address Line 1</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='123 Street'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Address Line 2</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='123 Street'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>Country</label>
                <select className='custom-select'>
                  <option selected>United States</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                </select>
              </div>
              <div className='col-md-6 form-group'>
                <label>City</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='New York'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>State</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='New York'></input>
              </div>
              <div className='col-md-6 form-group'>
                <label>ZIP Code</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='123'></input>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4' style={{ marginBottom: '100px' }}>
          <div className='card border-secondary mb-5'>
            <div className='card-header bg-secondary border-0'>
              <h4 className='font-weight-semi-bold m-0'>Order Total</h4>
            </div>
            <div className='card-body'>
              <h5 className='font-weight-medium mb-3'>Products</h5>
              {cart.map(product => {
                return (
                  <div className='d-flex justify-content-between'>
                    <p>{product.title}</p>
                    <p>{product.price * product.quantity}</p>
                  </div>)
              })}
              <hr className='mt-0'></hr>
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
            </div>
          </div>
          <div className='card border-secondary mb-5'>
            <div className='card-header bg-secondary border-0'>
              <h4 className='font-weight-semi-bold m-0'>Payment</h4>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <div className='custom-control custom-radio'>
                  <input
                    type='radio'
                    className='custom-control-input'
                    name='payment'
                    id='paypal'></input>
                  <label className='custom-control-label' for='paypal'>
                    Credit Card
                  </label>
                </div>
              </div>
              <div className='form-group'>
                <div className='custom-control custom-radio'>
                  <input
                    type='radio'
                    className='custom-control-input'
                    name='payment'
                    id='directcheck'></input>
                  <label className='custom-control-label' for='directcheck'>
                    UPI Transfer
                  </label>
                </div>
              </div>
              <div className=''>
                <div className='custom-control custom-radio'>
                  <input
                    type='radio'
                    className='custom-control-input'
                    name='payment'
                    id='banktransfer'></input>
                  <label className='custom-control-label' for='banktransfer'>
                    Debit Card
                  </label>
                </div>
              </div>
            </div>
            <div className='card-footer border-secondary bg-transparent'>
              <button className='btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3'>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout end */}
    </div>
  );
}

export default CheckoutPage;

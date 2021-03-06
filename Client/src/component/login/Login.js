import './Logincss.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { login } from '../../store/auth.reducer';
import { ToastContainer } from 'react-toastify';

export default function Login() {
 
  const [condition, setcondition] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => {
    console.log(state);
    return state.au.auth;
  });

  if (user.auth) {
   
  } else {
    console.log('Display error message!');
  }



  const formik = useFormik({
    initialValues: {
      email: '',
      Password: '',
    },
    validationSchema: Yup.object({
      Password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),

    onSubmit: async (values) => {
      dispatch(login({ email: values.email, password: values.Password }));
      if (condition === true) {
        // valNot();
        setTimeout(() => {
          // navigate('/');
        }, 2000);
      }
    },
  });

  return (
    <>
      <div className='d-flex main nodiv justify-content-evenly mb-28'>
        <div className='text-center   m-5-auto'>
          <div className='myleftctn ml-80'>
            <h2 className='myleftctn_header'>Log In</h2>

            <form onSubmit={formik.handleSubmit}>
              <p>
                <br />
                <input
                  htmlFor='email '
                  id='email'
                  name='email'
                  type='email'
                  className='myinput'
                  // value={emailId}
                  // onChange={(e)=>updateEmailId(e.target.value)}
                  placeholder='Email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='text-red-500 font-bold '>
                    {formik.errors.email}
                  </div>
                ) : null}
              </p>
              <p>
                <br />
                <input
                  htmlFor='Password'
                  type='password'
                  className='myinput'
                  id='Password'
                  name='Password'
                  // value={password}
                  // onChange={(e)=>updatePassword(e.target.value)}
                  placeholder='Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Password}
                />
                {formik.touched.Password && formik.errors.Password ? (
                  <div className='text-red-500 font-bold '>
                    {formik.errors.Password}
                  </div>
                ) : null}
              </p>
              <div className='text-red-500 font-bold'>{user.err}</div>
              <div className='text-red-500 font-bold'>{user.usererr}</div>
              <p>
                <button className='butt' type='submit'>
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer theme='dark' />
    </>
  );
}

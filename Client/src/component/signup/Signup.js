import React from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { singup } from '../../store/auth.reducer';

function Signup() {
  //   const [email, setEmail] = useState('');
  //   const [pass, setPass] = useState('');
  //   const [userName, setUserName] = useState('');
  //   const [confirmPass, setConfirmPass] = useState('');
  //   const [role, setRole] = useState('');
  const user = useSelector((state) => {
    console.log(state);
    return state.au.auth;
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();
  if (user.auth ) {
    navigate('/');
  } else {
    console.log('Display error message!');
  }

  //   const createAccount = (e) => {
  //     e.preventDefault();
  //     dispatch(
  //       singup({ username: userName, email: email, password: pass, role: role })
  //     );
  //     navigate('/products');
  //   };

  const formik = useFormik({
    initialValues: {
      email: '',
      Password: '',
      confirmPass: '',
      username: '',
      role: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      Password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
      confirmPass: Yup.string().when('Password', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('Password')],
          'Both password need to be same'
        ),
      }),
      role: Yup.string().required('Required'),
    }),

    onSubmit: (values) => {
      dispatch(
        singup({
          username: values.username,
          email: values.email,
          password: values.Password,
          role: values.role,
        })
      );
    },
  });

  return (
    <div className='d-flex main nodiv justify-content-evenly mb-28'>
      <div className='myrightctn w-26 '>
        <h2 className='myrightctn_header'>Create New Account</h2>
        <form onSubmit={formik.handleSubmit}>
          <p>
            <br />
            <input
              htmlFor='username '
              id='username'
              name='username'
              className='myinput '
              //   onChange={(e) => setUserName(e.target.value)}
              placeholder='UserName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className='text-red-500 font-bold '>
                {formik.errors.username}
              </div>
            ) : null}
          </p>
          <p>
            <input
              htmlFor='email '
              id='email'
              name='email'
              type='email'
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              className='myinput'
              placeholder='email'
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
            <input
              htmlFor='Password '
              id='Password'
              name='Password'
              type='Password'
              className='myinput'
              //   value={pass}
              //   onChange={(e) => setPass(e.target.value)}
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

          <p>
            <input
              htmlFor='confirmPass '
              id='confirmPass'
              name='confirmPass'
              type='Password'
              className='myinput'
              //   value={confirmPass}
              //   onChange={(e) => setConfirmPass(e.target.value)}
              placeholder='Confirm Password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPass}
            />
            {formik.touched.confirmPass && formik.errors.confirmPass ? (
              <div className='text-red-500 font-bold '>
                {formik.errors.confirmPass}
              </div>
            ) : null}
          </p>

          <p>
            <input
              htmlFor='role '
              id='role'
              name='role'
              type='submit /'
              className='myinput'
              //   value={role}
              //   onChange={(e) => setRole(e.target.value)}
              placeholder='Role'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role}
            />
            {formik.touched.role && formik.errors.role ? (
              <div className='text-red-500 font-bold '>
                {formik.errors.role}
              </div>
            ) : null}
          </p>
          <div className='font-bold mb-2'>{user.err}</div>

          <p>
            <button className='butt' type='submit'>
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

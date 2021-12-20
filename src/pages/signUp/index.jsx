/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import BeatLoader from 'react-spinners/BeatLoader';

import { StickyPagebanner } from '../../components';
import API from '../../network/api';
import setAuthToken from '../../network/setAuthToken';

const index = () => {
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(40, 'Password must not exceed 40 characters'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(
        /^\+?\(?(([2][3][3])|[0])?\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{4}?$/g,
        'Invalid phone number.Valid format : + 233 xx xxx xxx or 0 xx xxx xxxx or xx xxx xxxx'
      ),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });

  const formik = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      phone: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // make a post request to strapi
        const response = await API.post('/auth/local/register', values);
        const { jwt } = response.data;
        // save the jwt in the local storage
        const valToStoreInLocalStorage = {
          isAuthenticated: false,
          jwt,
        };
        localStorage.setItem(
          'diamond-user',
          JSON.stringify(valToStoreInLocalStorage)
        );
        // set auth token
        setAuthToken(jwt);
        // todo: navigate to whever he was expect for if he was at the auth pages, then send him to store
        history.push('/store');
      } catch (error) {
        console.log('error sata ---', error.data);
        toast.error('Unable to sign up, please try again!');
      }
    },
  });

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
  } = formik;

  return (
    <>
      <StickyPagebanner title="Signing Up" className2="item-bg3" />
      <section className="login-area ptb-100">
        <div className="container">
          <div className="register-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  name="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                />
                {touched.fullname && errors.fullname ? (
                  <div className="error-message">
                    <i className="error-icon fas fa-exclamation-triangle" />
                    <span>{errors.fullname}</span>
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {touched.username && errors.username ? (
                  <div className="error-message">
                    <i className="error-icon fas fa-exclamation-triangle" />
                    <span>{errors.username}</span>
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <div className="error-message">
                    <i className="error-icon fas fa-exclamation-triangle" />
                    <span>{errors.email}</span>
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {touched.phone && errors.phone ? (
                  <div className="error-message">
                    <i className="error-icon fas fa-exclamation-triangle" />
                    <span>{errors.phone}</span>
                  </div>
                ) : null}
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <div className="error-message">
                    <i className="error-icon fas fa-exclamation-triangle" />
                    <span>{errors.password}</span>
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword ? (
                  <div className="error-message">
                    <i className="error-icon fas fa-exclamation-triangle" />
                    <span>{errors.confirmPassword}</span>
                  </div>
                ) : null}
              </div>
              <div className="wrapper">
                <div className="lost-your-password">
                  <Link to="/login" className="lost-your-password">
                    Have an account already? Sign in
                  </Link>
                </div>
              </div>
              <button type="submit" className="default-btn">
                {isSubmitting ? (
                  <BeatLoader size={16} color="#fff" />
                ) : (
                  'Sign Up'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

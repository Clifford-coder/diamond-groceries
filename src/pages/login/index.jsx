/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import BeatLoader from 'react-spinners/BeatLoader';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StickyPagebanner } from '../../components';
import API from '../../network/api';
import setAuthToken from '../../network/setAuthToken';

const index = () => {
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(40, 'Password must not exceed 40 characters'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // make a post request to strapi
        const response = await API.post('/auth/local', {
          identifier: values.email,
          password: values.password,
        });
        const { jwt } = response.data;
        // save the jwt in the local storage
        const valToStoreInLocalStorage = {
          isAuthenticated: true,
          jwt,
        };
        localStorage.setItem(
          'diamond-user',
          JSON.stringify(valToStoreInLocalStorage)
        );
        // set auth token
        setAuthToken(jwt);
        // save the user to a global state.
        // todo: navigate to whever he was expect for if he was at the auth pages, then send him to store
        history.push('/store');
      } catch (error) {
        toast.error(
          'Unable to log in, Check your credentials and please try again!'
        );
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
      <StickyPagebanner title="Logging in" className2="item-bg3" />
      <section className="login-area ptb-100">
        <div className="container">
          <div className="register-form">
            <h3>Login form</h3>
            <form onSubmit={handleSubmit}>
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
              <div className="wrapper">
                <div className="lost-your-password">
                  <Link to="/sign-up" className="lost-your-password">
                    Don't have an account?
                  </Link>
                </div>
                <div className="lost-your-password">
                  <Link to="/forget-password" className="lost-your-password">
                    Lost your password?
                  </Link>
                </div>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="default-btn"
              >
                {isSubmitting ? <BeatLoader size={16} color="#fff" /> : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import BillingDetails from './billingDetails';
import OrderTable from './orderTable';
import { CartContext } from '../../context/Cart';
import API from '../../network/api';
import setAuthToken from '../../network/setAuthToken';

const checkout = () => {
  const [user, setUser] = React.useState(null);
  const { cartItems } = React.useContext(CartContext);
  const [userDetailsInitialFormValues, setUserDetailsInitialFormValues] =
    React.useState({
      fullname: '',
      email: '',
      phone: '',
    });

  // user details form validation schema
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(
        /^\+?\(?(([2][3][3])|[0])?\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{4}?$/g,
        'Invalid phone number.Valid format : + 233 xx xxx xxx or 0 xx xxx xxxx or xx xxx xxxx'
      ),
  });

  const formik = useFormik({
    initialValues: userDetailsInitialFormValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('form values ----- ', values);
    },
  });

  const { handleSubmit } = formik;

  React.useEffect(() => {
    (async () => {
      try {
        // get user
        const userFromLocalStorage = JSON.parse(
          localStorage.getItem('diamond-user')
        );
        if (!userFromLocalStorage) return;
        setAuthToken(userFromLocalStorage.jwt);
        const response = await API.get('/users/me');
        console.log('User Details ------ ', response.data);
        setUser(response.data);
        setUserDetailsInitialFormValues({
          fullname: response.data?.fullname,
          email: response.data?.email,
          phone: response.data?.phone,
        });
      } catch (error) {
        console.log('error -----', error);
        console.log('error obj -----', error?.response?.data?.message);
      }
    })();
  }, []);

  React.useEffect(() => {
    const userDetailsInitialFormVal = {
      fullname: user?.fullname,
      email: user?.email,
      phone: user?.phone,
    };
    console.log('Calling---- ', user);
    setUserDetailsInitialFormValues(userDetailsInitialFormVal);
  }, [user]);
  /*
	TODO 
	0. Check for cart items, if none, redirect the user to store or cart page
	1. Populate user details in strapi into the billing details if user is logged in 
	2. Populate cart items into the order  	
	*/

  if (cartItems.length === 0) {
    return <Redirect to="/cart" />;
  }

  return (
    <>
      <section className="checkout-area">
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          className="container"
        >
          <div className="row">
            {!user && (
              <div className="col-lg-12 col-md-12">
                <div className="user-actions">
                  <i className="fas fa-external-link-alt" />
                  <span>
                    Returning customer?
                    <Link to="/login"> Click here to login</Link>
                  </span>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="order-details">
                  <OrderTable cartItems={cartItems} />
                </div>
              </div>
              <BillingDetails formik={formik} />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default checkout;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import PaymentCard from './paymentCard';

const billingDetails = ({ formik }) => {
  const { handleChange, handleBlur, values, errors, touched } = formik;
  console.log('form values ---- ', values);
  return (
    <>
      <div className="col-lg-6 col-md-12">
        <div className="billing-details">
          <h3 className="title">Billing Details</h3>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  name="fullname"
                  value={values.fullname}
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                />
                {touched.fullname && errors.fullname ? (
                  <div className="error-message">
                    <i className="error-icon fas fa-exclamation-triangle" />
                    <span>{errors.fullname}</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>
                  Email Address<span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                />
                {touched.email && errors.email ? (
                  <div className="error-message">
                    <i className="error-icon fas fa-exclamation-triangle" />
                    <span>{errors.email}</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  className="form-control"
                />
                {touched.phone && errors.phone ? (
                  <div className="error-message">
                    <i className="error-icon fas fa-exclamation-triangle" />
                    <span>{errors.phone}</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-lg-12 col-md-12 order-details">
              <PaymentCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default billingDetails;

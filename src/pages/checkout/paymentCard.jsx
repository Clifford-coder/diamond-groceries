/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';

const paymentCard = () => {
  return (
    <>
      <div className="payment-box">
        <h4>How do you want it to be delivered?</h4>
        <div className="payment-method">
          <p>
            <input type="radio" id="pickup" name="delivery" />
            <label htmlFor="pickup">Pick it up from station</label>
          </p>
          {/* display the available pickup station here */}
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <label>
                Country <span className="required">*</span>
              </label>
              <div className="select-box">
                <select className="form-control">
                  <option value="5">United Arab Emirates</option>
                  <option value="1">China</option>
                  <option value="2">United Kingdom</option>
                  <option value="0">Germany</option>
                  <option value="3">France</option>
                  <option value="4">Japan</option>
                </select>
              </div>
            </div>
          </div>
          <p>
            <input type="radio" id="door-step-delivery" name="delivery" />
            <label htmlFor="door-step-delivery">Doorstep delivery</label>
          </p>
          <p>
            Delivery fee is
            <b> GH₵ 30</b>
          </p>
        </div>
      </div>
      <div className="payment-box">
        <h4>How do you want pay?</h4>
        <div className="payment-method">
          <p>
            <input type="radio" id="momo" name="payment" />
            <label htmlFor="momo">Mobile Money</label>
          </p>
          <p>
            <input type="radio" id="cash-on-delivery" name="payment" />
            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
          </p>
        </div>

        <div
          className="form-check"
          style={{
            marginTop: '16px',
            marginBottom: '16px',
            fontWeight: 'bold',
          }}
        >
          <input
            type="checkbox"
            className="form-check-input"
            id="agree_to_terms"
            name="agree_to_terms"
          />
          <label className="form-check-label" htmlFor="agree_to_terms">
            <em
              style={{
                fontWeight: 'bold',
              }}
            >
              I agree with the terms and conditions
            </em>
          </label>
        </div>
        <span className="default-btn">Place Order</span>
      </div>
    </>
  );
};

export default paymentCard;

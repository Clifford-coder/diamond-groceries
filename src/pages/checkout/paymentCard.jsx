/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const paymentCard = () => {
	const g = 'fss';
	return (
		<>
			<div className="payment-box">
				<div className="payment-method">
					<p>
						<input type="radio" id="paypal" name="radio-group" checked />
						<label htmlFor="paypal">Mobile Money</label>
					</p>
					<p>
						<input type="radio" id="cash-on-delivery" name="radio-group" />
						<label htmlFor="cash-on-delivery">Cash on Delivery</label>
					</p>
				</div>
				<Link to="/" className="default-btn">
					Place Order
				</Link>
			</div>
		</>
	);
};

export default paymentCard;

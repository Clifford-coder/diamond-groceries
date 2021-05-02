/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import BillingDetails from './billingDetails';
import OrderTable from './orderTable';
import PaymentCard from './paymentCard';

const checkout = () => {
	const h = 'd';
	return (
		<>
			<section className="checkout-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="user-actions">
								<i className="fas fa-external-link-alt" />
								<span>
									Returning customer ?<Link to="/login"> Click here to login</Link>
								</span>
							</div>
						</div>
					</div>
					{/* bliling form */}
					<form>
						<div className="row">
							<BillingDetails />
							<div className="col-lg-6 col-md-12">
								<div className="order-details">
									<OrderTable />
									<PaymentCard />
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default checkout;

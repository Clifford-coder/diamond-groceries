/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import { CartItem, StickyPagebanner } from '../../components';

const Cart = () => {
	const jack = 'jack';
	return (
		<>
			<StickyPagebanner title="My Cart" className2="item-bg1" />
			<section className="cart-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<form>
								<div className="cart-table table-responsive">
									<table className="table table-bordered">
										<thead>
											<tr>
												<th scope="col">Product</th>
												<th scope="col">Name</th>
												<th scope="col">Unit Price</th>
												<th scope="col">Quantity</th>
												<th scope="col">Total</th>
											</tr>
										</thead>
										<tbody>
											<CartItem />
											<CartItem />
											<CartItem />
											<CartItem />
										</tbody>
									</table>
								</div>
								<div className="cart-buttons">
									<div className="row align-items-center">
										<div className="col-lg-7 col-sm-7 col-md-7">
											<a href="shop-1.html" className="default-btn">
												Back to Store
											</a>
										</div>
										<div className="col-lg-5 col-sm-5 col-md-5 text-right">
											<Link to="/" className="default-btn">
												Update Cart
											</Link>
										</div>
									</div>
								</div>

								<div className="cart-totals">
									<h3>Cart Totals</h3>
									<ul>
										<li>
											Subtotal
											<span>$1683.50</span>
										</li>
										<li>
											Delivery fee
											<span>$30.00</span>
										</li>
										<li>
											Total
											<span>
												<b>$1713.50</b>
											</span>
										</li>
									</ul>
									<Link to="/" className="default-btn">
										Proceed to Checkout
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cart;

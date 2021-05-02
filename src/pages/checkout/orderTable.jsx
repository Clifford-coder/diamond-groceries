/* eslint-disable no-unused-vars */
import React from 'react';

const orderTable = () => {
	const dg = 'sf';
	return (
		<>
			<h3 className="title">Your Order</h3>
			<div className="order-table table-responsive">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th scope="col">Product Name</th>
							<th scope="col">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="product-name">
								<a href="shop-details.html">Darling Oranges</a>
							</td>
							<td className="product-total">
								<span className="subtotal-amount">$455.00</span>
							</td>
						</tr>
						<tr>
							<td className="product-name">
								<a href="shop-details.html">Strawberry</a>
							</td>
							<td className="product-total">
								<span className="subtotal-amount">$541.50</span>
							</td>
						</tr>
						<tr>
							<td className="product-name">
								<a href="shop-details.html">Cabbage</a>
							</td>
							<td className="product-total">
								<span className="subtotal-amount">$140.50</span>
							</td>
						</tr>
						<tr>
							<td className="product-name">
								<a href="shop-details.html">Nectarine</a>
							</td>
							<td className="product-total">
								<span className="subtotal-amount">$547.00</span>
							</td>
						</tr>
						<tr>
							<td className="order-subtotal">
								<span>Seasoned Tomatoes</span>
							</td>
							<td className="order-subtotal-price">
								<span className="order-subtotal-amount">$1683.50</span>
							</td>
						</tr>
						<tr>
							<td className="order-shipping">
								<span>Seasoned Carrot</span>
							</td>
							<td className="shipping-price">
								<span>$30.00</span>
							</td>
						</tr>
						<tr>
							<td className="total-price">
								<span>Order Total</span>
							</td>
							<td className="product-subtotal">
								<span className="subtotal-amount">$1713.50</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default orderTable;

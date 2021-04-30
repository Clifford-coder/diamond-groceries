/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import chicken from '../assets/foods/chicken1.png';

const CartItem = () => {
	const jack = 'jack';
	return (
		<>
			<tr>
				<td className="product-thumbnail">
					<Link to="/">
						<img src={chicken} alt="item" />
					</Link>
				</td>
				<td className="product-name">
					<a href="shop-details.html">Chicken meat</a>
				</td>
				<td className="product-price">
					<span className="unit-amount">$455.00</span>
				</td>
				<td className="product-quantity">
					<div className="input-counter">
						<span className="minus-btn">
							<i className="fas fa-minus" />
						</span>
						<input type="text" value="1" />
						<span className="plus-btn">
							<i className="fas fa-plus" />
						</span>
					</div>
				</td>
				<td className="product-subtotal">
					<span className="subtotal-amount">$455.00</span>
					<Link to="/" className="remove">
						<i className="fas fa-trash" />
					</Link>
				</td>
			</tr>
		</>
	);
};

export default CartItem;

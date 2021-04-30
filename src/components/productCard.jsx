/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import fruit from '../assets/foods/beautifully-laid-fish-fresh-fish-136449874.jpg';

const ProductCard = () => {
	const hello = 'h1';
	return (
		<>
			<div className="top-products-item">
				<div className="products-image">
					<Link href="shop-details.html">
						<img src={fruit} alt="product" />
					</Link>

					<ul className="products-action">
						<li>
							<a href="cart.html" data-tooltip="tooltip" data-placement="top" title="Add to Cart">
								<i className="flaticon-shopping-cart" />
							</a>
						</li>
						<li>
							<Link to="/" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist">
								<i className="flaticon-heart" />
							</Link>
						</li>
						<li>
							<Link
								to="/"
								data-tooltip="tooltip"
								data-placement="top"
								title="Quick View"
								data-toggle="modal"
								data-target="#productsQuickView"
							>
								<i className="flaticon-search" />
							</Link>
						</li>
					</ul>

					<div className="sale">
						<span>Sale</span>
					</div>
				</div>

				<div className="products-content">
					<h3>
						<a href="shop-details.html">Darling Oranges</a>
					</h3>
					<div className="price">
						<span className="new-price">$38.00 </span>
						<span className="old-price">$125.00</span>
					</div>
					<ul className="rating">
						<li>
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="far fa-star" />
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default ProductCard;

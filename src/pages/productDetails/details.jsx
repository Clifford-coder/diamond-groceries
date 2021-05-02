/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import chicken from '../../assets/foods/assortment2.jpg';

const description = () => {
	const hi = 'gs';
	return (
		<div className="row">
			<div className="col-lg-6 col-md-12">
				<div className="product-details-image">
					<img src={chicken} alt="item" />
				</div>
			</div>

			<div className="col-lg-6 col-md-12">
				<div className="product-details-desc">
					<h3>Seasoned Tomatoes</h3>
					<div className="price">
						<span className="new-price">$541.00</span>
						<span className="old-price"> $652.00</span>
					</div>
					<div className="product-review">
						<div className="rating">
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
						</div>
						<Link to="/" className="rating-count">
							3 reviews
						</Link>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et.
					</p>
					<div className="product-add-to-cart">
						<div className="input-counter">
							<span className="minus-btn">
								<i className="fas fa-minus" />
							</span>
							<input type="text" min="1" value="1" onChange={(jsk) => console.log(jsk)} />
							<span className="plus-btn">
								<i className="fas fa-plus" />
							</span>
						</div>

						<button type="submit" className="default-btn">
							Add to cart
							<span></span>
						</button>
					</div>

					<div className="buy-checkbox-btn">
						<div className="item">
							<input className="inp-cbx" id="cbx" type="checkbox" />
							<label className="cbx" htmlFor="cbx">
								<span>
									<svg width="12px" height="10px" viewBox="0 0 12 10">
										<polyline points="1.5 6 4.5 9 10.5 1" />
									</svg>
								</span>
								<span>I agree with the terms and conditions</span>
							</label>
						</div>
						<div className="item">
							<Link to="/" className="btn btn-light">
								Buy it now!
							</Link>
						</div>
					</div>

					<div className="products-share">
						<ul className="social">
							<li>
								<span>Share:</span>
							</li>
							<li>
								<Link className="facebook" to="/facebook.com">
									<i className="fab fa-facebook" />
								</Link>
							</li>
							<li>
								<Link className="twitter" to="/facebook.com">
									<i className="fab fa-twitter" />
								</Link>
							</li>
							<li>
								<Link className="instagram" to="/facebook.com">
									<i className="fab fa-instagram" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default description;

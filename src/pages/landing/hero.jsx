import React from 'react';
import womanWithGroceries from '../../assets/a-lady-with-chicken.png';
import leafBanner from '../../assets/banner-shape-1.png';

export const Hero = () => (
	<>
		<div className="main-banner cus-main-banner">
			<div className="main-banner-item banner-item-two">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="main-banner-content">
										<span>Take Natural Taste From Our Shop</span>
										<h1>Lead a Healthier Life with Organic Food</h1>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse
										</p>
										<div className="banner-btn">
											<a href="shop-1.html" className="default-btn">
												Our Shop
											</a>
											<a href="cart.html" className="optional-btn">
												Sign Up
											</a>
										</div>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="main-banner-image">
										<img src={womanWithGroceries} alt="woman-with-groceries" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="main-banner-shape">
				<div className="shape-1">
					<img src={leafBanner} alt="a-leaf" />
				</div>
			</div>
		</div>
	</>
);

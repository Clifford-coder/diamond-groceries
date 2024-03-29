/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReview from './customerReview';
import Description from './details';
import RelatedProduct from './relatedProducts';
import PopularProducts from './popularProducts';

const ItemDetails = () => {
	const jek = 'sfs';
	return (
		<>
			<section className="product-details-area pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<Description />
							{/* row 2 */}
							<div className="tab products-details-tab">
								<div className="row">
									<div className="col-lg-12 col-md-12">
										<ul className="tabs">
											<li>
												<Link to="/">
													<div className="dot" />
													Description
												</Link>
											</li>
											<li>
												<Link to="/">
													<div className="dot" />
													Reviews
												</Link>
											</li>
										</ul>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="tab_content">
											<div className="tabs_item">
												<div className="products-details-tab-content">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
														eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
														enim ad minim veniam quis nostrud exercitation ullamco laboris
														nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
														in reprehenderit in voluptate velit esse fugiat nulla pariatur.
														Excepteur sint occaecat cupidatat non proident sunt in culpa qui
														officia deserunt mollit anim id est laborum. Sed ut perspiciatis
														unde omnis iste.
													</p>
												</div>
											</div>

											<div className="tabs_item">
												<div className="products-details-tab-content">
													<CustomerReview />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<RelatedProduct />
						</div>
						{/* col - 4 */}
						<div className="col-lg-4 col-md-12">
							<aside className="widget-area">
								<section className="widget widget_search">
									<h3 className="widget-title">Search</h3>

									<form className="search-form">
										<label>
											<span className="screen-reader-text">Search for:</span>
											<input type="search" className="search-field" placeholder="Search..." />
										</label>
										<button type="submit">
											<i className="flaticon-search" />
										</button>
									</form>
								</section>
								<PopularProducts />
							</aside>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ItemDetails;

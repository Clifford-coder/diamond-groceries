/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import { ProductCard, StickyPagebanner } from '../../components';

const Store = () => {
	const hello = 'Hell0';
	return (
		<>
			<StickyPagebanner title="Welcome to Diamond Frozen Store" />
			<section className="top-products-area pt-100 pb-100">
				<div className="container">
					<div className="orgo-grid-sorting row align-items-center">
						<div className="col-lg-6 col-md-6 result-count">
							<p>
								We found <span className="count">10</span> products available for you
							</p>
						</div>

						<div className="col-lg-6 col-md-6 ordering">
							<div className="select-box">
								<label>Sort By:</label>
								<select>
									<option>Default</option>
									<option>Popularity</option>
									<option>Latest</option>
									<option>Price: low to high</option>
									<option>Price: high to low</option>
								</select>
							</div>
						</div>
					</div>

					{/* continue */}
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<ProductCard />
						</div>
						<div className="col-lg-3 col-md-6">
							<ProductCard />
						</div>
						<div className="col-lg-3 col-md-6">
							<ProductCard />
						</div>
						<div className="col-lg-3 col-md-6">
							<ProductCard />
						</div>
						<div className="col-lg-3 col-md-6">
							<ProductCard />
						</div>
						<div className="col-lg-3 col-md-6">
							<ProductCard />
						</div>
						<div className="col-lg-3 col-md-6">
							<ProductCard />
						</div>
						<div className="col-lg-3 col-md-6">
							<ProductCard />
						</div>
					</div>
					<div className="col-lg-12 col-md-12">
						<div className="pagination-area">
							<Link to="/" className="prev page-numbers">
								<i className="flaticon-left-arrow" />
							</Link>
							<a to="/" className="page-numbers">
								1
							</a>
							<span className="page-numbers current" aria-current="page">
								2
							</span>
							<Link to="/" className="page-numbers">
								3
							</Link>
							<a to="/" className="page-numbers">
								4
							</a>
							<Link to="/" className="next page-numbers">
								<i className="flaticon-right-arrow" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Store;

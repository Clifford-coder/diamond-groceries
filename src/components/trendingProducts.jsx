import React from 'react';
import { ProductCard } from '.';

const TrendingProducts = () => (
	<>
		<section className="top-products-area pb-70">
			<div className="container">
				<div className="section-title">
					<h2>Trending Products</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua quis ipsum suspendisse
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<ProductCard />
					</div>

					<div className="col-lg-4 col-md-6">
						<ProductCard />
					</div>

					<div className="col-lg-4 col-md-6">
						<ProductCard />
					</div>

					<div className="col-lg-4 col-md-6">
						<ProductCard />
					</div>

					<div className="col-lg-4 col-md-6">
						<ProductCard />
					</div>
					<div className="col-lg-4 col-md-6">
						<ProductCard />
					</div>
				</div>
			</div>
		</section>
	</>
);

export default TrendingProducts;

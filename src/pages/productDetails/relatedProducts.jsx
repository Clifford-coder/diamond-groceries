/* eslint-disable no-unused-vars */
import React from 'react';
import { ProductCard } from '../../components';

const relatedProducts = () => {
	const ho = 'hoe';
	return (
		<div className="related-shop">
			<h4>Related Products</h4>
			<div className="row">
				<div className="col-lg-6 col-md-6">
					<ProductCard />
				</div>

				<div className="col-lg-6 col-md-6">
					<ProductCard />
				</div>

				<div className="col-lg-6 col-md-6">
					<ProductCard />
				</div>

				<div className="col-lg-6 col-md-6">
					<ProductCard />
				</div>
			</div>
		</div>
	);
};

export default relatedProducts;

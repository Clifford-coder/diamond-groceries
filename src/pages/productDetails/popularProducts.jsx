/* eslint-disable no-unused-vars */
import React from 'react';

import { ProductWidget } from '../../components';

const popularProducts = () => {
	const he = 'a';
	return (
		<>
			<section className="widget widget_popular_products">
				<h3 className="widget-title">Popular Products</h3>
				<ProductWidget />
				<ProductWidget />
				<ProductWidget />
			</section>
		</>
	);
};

export default popularProducts;

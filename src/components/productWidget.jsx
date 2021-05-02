/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import food from '../assets/foods/gizzard.jpg';

const productWidget = () => {
	const hi = '';
	return (
		<>
			<article className="item">
				<Link to="/" className="thumb">
					<img src={food} alt="product" />
				</Link>
				<div className="info">
					<span>$49.00</span>
					<h4 className="title usmall">
						<Link to="/">Random Romance Novel Title Generator</Link>
					</h4>
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
			</article>
		</>
	);
};

export default productWidget;

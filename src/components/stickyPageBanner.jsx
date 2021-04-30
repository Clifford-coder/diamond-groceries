/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const StickyPageBanner = ({ title, className2 }) => {
	const titi = 'titi';
	return (
		<>
			<div className={`page-banner-area ${className2}`}>
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="page-banner-content">
								<h2>{title}</h2>
								<ul>
									<li>
										<Link to="/store">Diamond Frozen Store</Link>
									</li>
									<li>Fresh and healthy only</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StickyPageBanner;

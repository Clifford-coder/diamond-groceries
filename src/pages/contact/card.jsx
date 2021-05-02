/* eslint-disable no-unused-vars */
import React from 'react';

export default function card({ children, iconName, title }) {
	const ke = 'sf';
	return (
		<div className="col-lg-4 col-md-6 col-sm-6">
			<div className="contact-info-box">
				<div className="icon">
					<i className={`${iconName}`} />
				</div>
				<h3>{title}</h3>
				{children}
			</div>
		</div>
	);
}

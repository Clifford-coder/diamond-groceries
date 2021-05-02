/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { StickyPagebanner } from '../../components';

const index = () => {
	const gs = 'sf';
	return (
		<>
			<StickyPagebanner title="Signing Up" className2="item-bg3" />
			<section className="login-area ptb-100">
				<div className="container">
					<div className="login-form">
						<h2>Sign Up</h2>

						<form>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Username" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Email" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Phone Number" />
							</div>

							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Confirm password" />
							</div>
							<button type="submit" className="default-btn">
								Sign Up
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default index;

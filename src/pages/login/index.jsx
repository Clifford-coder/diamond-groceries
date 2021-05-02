/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { StickyPagebanner } from '../../components';

const index = () => {
	const he = 'fsf';
	return (
		<>
			<StickyPagebanner title="Logging in" className2="item-bg3" />
			<section className="login-area ptb-100">
				<div className="container">
					<div className="login-form">
						<h2>Login</h2>

						<form>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Username or email" />
							</div>

							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" />
							</div>

							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="form-check">
										<input type="checkbox" className="form-check-input" id="checkme" />
										<label className="form-check-label" htmlFor="checkme">
											Remember me
										</label>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
									<Link to="/" className="lost-your-password">
										Lost your password?
									</Link>
								</div>
							</div>

							<button type="submit" className="default-btn">
								Login
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default index;

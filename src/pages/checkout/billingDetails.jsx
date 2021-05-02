/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';

const billingDetails = () => {
	const h = 'ds';
	return (
		<>
			<div className="col-lg-6 col-md-12">
				<div className="billing-details">
					<h3 className="title">Billing Details</h3>
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="form-group">
								<label>
									Country <span className="required">*</span>
								</label>
								<div className="select-box">
									<select className="form-control">
										<option value="5">United Arab Emirates</option>
										<option value="1">China</option>
										<option value="2">United Kingdom</option>
										<option value="0">Germany</option>
										<option value="3">France</option>
										<option value="4">Japan</option>
									</select>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<label>
									First Name <span className="required">*</span>
								</label>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<label>
									Last Name <span className="required">*</span>
								</label>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="form-group">
								<label>Company Name</label>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="col-lg-12 col-md-6">
							<div className="form-group">
								<label>
									Address <span className="required">*</span>
								</label>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="col-lg-12 col-md-6">
							<div className="form-group">
								<label>
									Town / City <span className="required">*</span>
								</label>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<label>
									State / County <span className="required">*</span>
								</label>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<label>
									Postcode / Zip <span className="required">*</span>
								</label>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<label>
									Email Address<span className="required">*</span>
								</label>
								<input type="email" className="form-control" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<label>
									Phone <span className="required">*</span>
								</label>
								<input type="text" className="form-control" />
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="form-check">
								<input type="checkbox" className="form-check-input" id="create-an-account" />
								<label className="form-check-label" htmlFor="create-an-account">
									Create an account?
								</label>
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="form-check">
								<input type="checkbox" className="form-check-input" id="ship-different-address" />
								<label className="form-check-label" htmlFor="ship-different-address">
									Ship to a different address?
								</label>
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="form-group">
								<textarea
									name="notes"
									id="notes"
									cols="30"
									rows="5"
									placeholder="Order Notes"
									className="form-control"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default billingDetails;

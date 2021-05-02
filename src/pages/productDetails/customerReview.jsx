/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const customerReview = () => {
	const hi = 'sf';
	return (
		<div className="product-review-form">
			<h3>Customer Reviews</h3>
			<div className="review-title">
				<div className="rating">
					<i className="bx bxs-star" />
					<i className="bx bxs-star" />
					<i className="bx bxs-star" />
					<i className="bx bxs-star" />
					<i className="bx bxs-star" />
				</div>
				<p>Based on 3 reviews</p>
				<Link to="/" className="default-btn">
					{' '}
					Write a Review{' '}
				</Link>
			</div>
			<div className="review-comments">
				<div className="review-item">
					<div className="rating">
						<i className="fa fas-star" />
						<i className="fa fas-star" />
						<i className="fa fas-star" />
						<i className="fa fas-star" />
						<i className="fa fas-star" />
					</div>
					<h3>Good</h3>
					<span>
						<strong>Admin</strong> on
						<strong>Sep 21, 2020</strong>
					</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
					</p>
					<Link to="/" className="review-report-link">
						Report as Inappropriate
					</Link>
				</div>
				<div className="review-item">
					<div className="rating">
						<i className="fa fas-star" />
						<i className="fa fas-star" />
						<i className="fa fas-star" />
						<i className="fa fas-star" />
						<i className="fa fas-star" />
					</div>
					<h3>Good</h3>
					<span>
						<strong>Admin</strong> on
						<strong>Sep 21, 2020</strong>
					</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
					</p>
					<Link to="/" className="review-report-link">
						Report as Inappropriate
					</Link>
				</div>
				<div className="review-item">
					<div className="rating">
						<i className="fa fas-star" />
						<i className="fa fas-star" />
						<i className="fa fas-star" />
						<i className="fa fas-star" />
						<i className="fa fas-star" />
					</div>
					<h3>Good</h3>
					<span>
						<strong>Admin</strong> on
						<strong>Sep 21, 2020</strong>
					</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
					</p>
					<Link to="/" className="review-report-link">
						Report as Inappropriate
					</Link>
				</div>
			</div>
			<div className="review-form">
				<h3>Write a Review</h3>
				<form>
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Enter your name"
									className="form-control"
								/>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Enter your email"
									className="form-control"
								/>
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="form-group">
								<input
									type="text"
									id="review-title"
									name="review-title"
									placeholder="Enter your review a title"
									className="form-control"
								/>
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="form-group">
								<textarea
									name="review-body"
									id="review-body"
									cols="30"
									rows="7"
									placeholder="Write your comments here"
									className="form-control"
								/>
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<button type="submit" className="default-btn">
								Submit Review
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default customerReview;

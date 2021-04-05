import React from 'react';
import { Link } from 'react-router-dom';
import something from '../../assets/deal/deal-1.png';

const Footer = () => (
	<>
		<div className="footer-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget">
							<div className="logo">
								<h2>
									<Link to="/">D.F.Foods</Link>
								</h2>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
							<ul className="social">
								<li>
									<Link to="/" className="facebook" target="_blank">
										<i className="bx bxl-facebook" />
									</Link>
								</li>
								<li>
									<Link to="/" className="twitter" target="_blank">
										<i className="bx bxl-facebook" />
									</Link>
								</li>
								<li>
									<Link to="/" className="facebook" target="_blank">
										<i className="bx bxl-facebook" />
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget">
							<h3>Instagram</h3>

							<ul className="instagram-list">
								<li>
									<div className="box">
										<img src={something} alt="product" />
										<a href="instagram.com" target="_blank" className="link-btn">
											<i className="bx bxl-instagram" />
										</a>
									</div>
								</li>

								<li>
									<div className="box">
										<img src={something} alt="product" />
										<a href="instagram.com" target="_blank" className="link-btn">
											<i className="bx bxl-instagram" />
										</a>
									</div>
								</li>

								<li>
									<div className="box">
										<img src={something} alt="product" />
										<a href="instagram.com" target="_blank" className="link-btn">
											<i className="bx bxl-instagram" />
										</a>
									</div>
								</li>

								<li>
									<div className="box">
										<img src={something} alt="product" />
										<a href="instagram.com" target="_blank" className="link-btn">
											<i className="bx bxl-instagram" />
										</a>
									</div>
								</li>

								<li>
									<div className="box">
										<img src={something} alt="product" />
										<a href="instagram.com" target="_blank" className="link-btn">
											<i className="bx bxl-instagram" />
										</a>
									</div>
								</li>

								<li>
									<div className="box">
										<img src={something} alt="product" />
										<a href="instagram.com" target="_blank" className="link-btn">
											<i className="bx bxl-instagram" />
										</a>
									</div>
								</li>
								<li>
									<div className="box">
										<img src={something} alt="product" />
										<a href="instagram.com" target="_blank" className="link-btn">
											<i className="bx bxl-instagram" />
										</a>
									</div>
								</li>

								<li>
									<div className="box">
										<img src={something} alt="product" />
										<a href="instagram.com" target="_blank" className="link-btn">
											<i className="bx bxl-instagram" />
										</a>
									</div>
								</li>

								<li>
									<div className="box">
										<img src={something} alt="product" />
										<a href="instagram.com" target="_blank" className="link-btn">
											<i className="bx bxl-instagram" />
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget pl-5">
							<h3>Quick Links</h3>

							<ul className="quick-links">
								<li>
									<Link to="/">About Us</Link>
								</li>
								<li>
									<Link to="/">About Us</Link>
								</li>
								<li>
									<Link to="/">About Us</Link>
								</li>
								<li>
									<Link to="/">About Us</Link>
								</li>
								<li>
									<Link to="/">About Us</Link>
								</li>
								<li>
									<Link to="/">About Us</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-footer-widget">
							<h3>Contact Us</h3>

							<ul className="footer-contact-info">
								<li>
									<i className="bx bxs-phone" />
									<span>Phone</span>
									<a href="tel:407409202288">(+40) 74 0920 2288</a>
								</li>
								<li>
									<i className="bx bx-envelope" />
									<span>Email</span>
									<a href="mailto:hello@orgo.com">hello@orgo.com</a>
								</li>
								<li>
									<i className="bx bx-map" />
									<span>Address</span>
									175 5th Ave Premium Area, New York, NY 10010, United States
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* copyright */}
		<div className="copyright-area">
			<div className="container">
				<div className="copyright-area-content">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<p>
								<i className="far fa-copyright" />
								Copyright @2020 Orgo. All Rights Reserved by{' '}
								<a href="google.com" target="_blank">
									Diamond Frozen Foods
								</a>
							</p>
						</div>

						<div className="col-lg-6 col-md-6">
							<ul>
								<li>
									<a href="terms-of-service.html">Terms & Conditions</a>
								</li>
								<li>
									<a href="privacy-policy.html">Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default Footer;

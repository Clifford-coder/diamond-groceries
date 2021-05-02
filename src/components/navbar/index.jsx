import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/small-logo.png';

const Navbar = () => (
	<>
		<div className="navbar-area">
			<div className="main-responsive-nav">
				<div className="container">
					<div className="main-responsive-menu">
						<div className="logo">
							<Link to="/">
								<img src={logo} alt="logo" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="main-navbar">
				<div className="container">
					<nav className="navbar navbar-expand-md navbar-light">
						<Link className="navbar-brand" to="/store">
							<div className="logo">
								<img src={logo} alt="logo" />
							</div>
						</Link>

						<div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/store" className="nav-link">
										Store
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/login" className="nav-link">
										Sign In
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/sign-up" className="nav-link">
										Sign Up
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/contact" className="nav-link">
										Contact Us
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/about-us" className="nav-link">
										About Us
									</Link>
								</li>
							</ul>

							<div className="others-options d-flex align-items-center">
								<div className="option-item">
									<div className="cart-btn">
										<Link to="/cart">
											<i className="fas fa-shopping-cart" />
											<span>0</span>
										</Link>
									</div>
								</div>

								<div className="option-item">
									<form className="search-box">
										<input type="text" className="form-control" placeholder="Search" />
										<button type="submit">
											<i className="fas fa-search" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div className="others-option-for-responsive">
				<div className="container">
					<div className="dot-menu">
						<div className="inner">
							<div className="circle circle-one" />
							<div className="circle circle-two" />
							<div className="circle circle-three" />
						</div>
					</div>
					<div className="container">
						<div className="option-inner">
							<div className="others-options d-flex align-items-center">
								<div className="option-item">
									<div className="cart-btn">
										<a href="cart.html">
											<i className="fas fa-cart" />
											<span>0</span>
										</a>
									</div>
								</div>
								<div className="option-item">
									<form className="search-box">
										<input type="text" className="form-control" placeholder="Search" />
										<button type="submit">
											<i className="flaticon-search" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default Navbar;

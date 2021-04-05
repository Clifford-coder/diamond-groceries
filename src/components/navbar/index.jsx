import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<>
		<div className="navbar-area">
			<div className="main-responsive-nav">
				<div className="container">
					<div className="main-responsive-menu">
						<div className="logo">
							<Link to="/">
								{/* <img src="assets/img/logo.png" alt="logo" /> */}
								<h1>Logo</h1>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="main-navbar">
				<div className="container">
					<nav className="navbar navbar-expand-md navbar-light">
						<Link className="navbar-brand" to="/">
							{/* <img src="assets/img/logo.png" alt="image" /> */}
							<h1>Logo</h1>
						</Link>

						<div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Shop
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Contact Us
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/" className="nav-link">
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

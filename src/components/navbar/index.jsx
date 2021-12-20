/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/small-logo.png';
import { CartContext } from '../../context/Cart';
import MobileNav from './mobile';

const Navbar = () => {
  const location = useLocation();
  const [showMobileNav, setMobileNav] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMobileNav = () => {
    setMobileNav(!showMobileNav);
  };

  // get user
  const fromLoclStorage = localStorage.getItem('diamond-user');
  const user = JSON.parse(fromLoclStorage);

  if (
    location.pathname === '/' ||
    location.pathname === '/sign-up' ||
    location.pathname === '/login'
  )
    return null;

  return (
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

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
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
                  {!user?.isAuthenticated && !user?.jwt ? (
                    <li className="nav-item">
                      <Link to="/sign-up" className="nav-link">
                        Sign Up
                      </Link>
                    </li>
                  ) : null}
                  {!user?.isAuthenticated ? (
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        Sign In
                      </Link>
                    </li>
                  ) : null}
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
                        <span>{cartItems.length}</span>
                      </Link>
                    </div>
                  </div>

                  <div className="option-item">
                    <form className="search-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
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
            <div onClick={toggleMobileNav} className="dot-menu">
              {showMobileNav ? (
                <i
                  style={{ fontSize: '24px' }}
                  className="fas fa-times inner"
                />
              ) : (
                <div className="inner">
                  <div className="circle circle-one" />
                  <div className="circle circle-two" />
                  <div className="circle circle-three" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      {showMobileNav && (
        <MobileNav
          cartItemsNum={cartItems.length}
          user={user}
          setMobileNav={setMobileNav}
        />
      )}
    </>
  );
};

export default Navbar;

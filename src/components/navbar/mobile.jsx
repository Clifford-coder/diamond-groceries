/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({ user, setMobileNav, cartItemsNum }) => {
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Store', to: '/store' },
    { name: 'Contact Us', to: '/contact-us' },
    { name: 'About US', to: '/about-us' },
  ];

  return (
    <div className="mobile-nav-wrap">
      {navLinks.map((nav) => (
        <div key={nav.name} onClick={() => setMobileNav(false)}>
          <Link to={nav.to}>{nav.name}</Link>
        </div>
      ))}
      {!user?.user && !user?.jwt ? (
        <div onClick={() => setMobileNav(false)}>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      ) : null}
      {!user?.user ? (
        <div onClick={() => setMobileNav(false)}>
          <Link to="/login">Sign In</Link>
        </div>
      ) : null}

      <div
        style={{ position: 'relative' }}
        onClick={() => setMobileNav(false)}
        className="cart-btn"
      >
        <Link to="/cart">
          <i className="fas fa-shopping-cart" />
          <span
            style={{
              position: 'absolute',
              bottom: 14,
              left: 14,
              paddingLeft: '7px',
              paddingRight: '7px',
              paddingTop: '1.6px',
              paddingBottom: '1.6px',
              borderRadius: '100%',
              background: 'white',
            }}
          >
            {cartItemsNum}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;

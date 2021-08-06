/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { StickyPagebanner } from '../../components';

const index = () => {
  const hi = 's';
  return (
    <>
      <StickyPagebanner title="Error Page" className2="item-bg4" />
      <section className="error-area ptb-100">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <h3>Error 404 : Page Not Found</h3>
                <p>
                  The page you are looking for might have been removed or had
                  its name changed or is temporarily unavailable
                </p>

                <Link to="/" className="default-btn">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

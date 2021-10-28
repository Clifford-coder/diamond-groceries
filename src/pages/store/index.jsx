/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import { ProductCard, StickyPagebanner } from '../../components';

const Store = () => {
  const hello = 'Hell0';
  return (
    <>
      <StickyPagebanner title="Welcome to Diamond Frozen Store" />
      <div className="orgo-grid-sorting row pt-70 cus-store-sort">
        <div className="col-lg-4 col-md-4 result-count">
          <p>
            We found <span className="count">10</span> products available for
            you
          </p>
        </div>

        <div className="col-lg-4 col-md-4 result-count">
          <form style={{ display: 'flex' }} className="search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Search for product"
            />
            <button type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>

        <div className="col-lg-4 col-md-4 ordering option-item">
          <div className="select-box">
            <label>Sort By:</label>
            <select>
              <option>Default</option>
              <option>Popularity</option>
              <option>Latest</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
            </select>
          </div>
          {/* search form */}
        </div>
      </div>
      <section className="top-products-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <ProductCard />
            </div>

            <div className="col-lg-4 col-md-6">
              <ProductCard />
            </div>

            <div className="col-lg-4 col-md-6">
              <ProductCard />
            </div>

            <div className="col-lg-4 col-md-6">
              <ProductCard />
            </div>

            <div className="col-lg-4 col-md-6">
              <ProductCard />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { ProductCard, StickyPagebanner, CenterContent } from '../../components';
import { useFetchProducts } from '../../hooks';

const Store = () => {
  const [products, isLoading, error] = useFetchProducts('/products');

  if (error)
    return toast.error(
      'Oops! There was an error in getting products, try again'
    );

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

        {/* search form */}
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
        </div>
      </div>
      <section className="top-products-area pb-70">
        <div className="container">
          {isLoading ? (
            <CenterContent>
              <h4 style={{ marginRight: '10px' }}>Please wait</h4>
              <BeatLoader size={30} color="#0c00a0" />
            </CenterContent>
          ) : (
            <div className="row">
              {!products || products.length === 0 ? (
                <h1>No Products</h1>
              ) : (
                products.map((product) => (
                  <div key={product._id} className="col-lg-4 col-md-6">
                    <ProductCard product={product} />
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Store;

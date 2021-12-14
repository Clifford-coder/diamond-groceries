/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { ProductCard, StickyPagebanner, CenterContent } from '../../components';
import { shuffle } from '../../helper/functions';
import { useFetchProducts } from '../../hooks';

const Store = () => {
  const [userInput, setUserInput] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredProduct, setFilteredProduct] = useState(null);
  const [products, isLoading, error] = useFetchProducts('/products');

  // fetch products whiles user is typing
  useEffect(() => {
    const newProducts = products?.filter((product) => {
      if (
        product.title.toLowerCase().includes(userInput) ||
        product.category.toLowerCase().includes(userInput)
      ) {
        return product;
      }
    });

    if (!newProducts) return setFilteredProduct(null);

    setFilteredProduct([...newProducts]);
  }, [userInput]);

  // sort products
  useEffect(() => {
    // low to high
    if (sortOption === 'lowToHigh') {
      const sortedP = !filteredProduct
        ? products?.sort((a, b) => a.price - b.price)
        : filteredProduct?.sort((a, b) => a.price - b.price);
      if (!sortedP) return setFilteredProduct(sortedP);
      setFilteredProduct([...sortedP]);
    } else if (sortOption === 'highToLow') {
      const sortedP = !filteredProduct
        ? products?.sort((a, b) => b.price - a.price)
        : filteredProduct?.sort((a, b) => b.price - a.price);
      if (!sortedP) return setFilteredProduct(sortedP);
      setFilteredProduct([...sortedP]);
    } else {
      const newP = shuffle(!filteredProduct ? products : filteredProduct);
      if (!newP) return setFilteredProduct(newP);
      setFilteredProduct([...newP]);
    }
  }, [sortOption]);

  const searchProduct = (e) => {
    e.preventDefault();
    // eslint-disable-next-line array-callback-return
    const newProducts = products.filter((product) => {
      if (
        product.title.toLowerCase().includes(userInput) ||
        product.category.toLowerCase().includes(userInput)
      ) {
        return product;
      }
    });
    setFilteredProduct([newProducts]);
  };

  if (error) {
    toast.error('Oops! There was an error in getting products, try again');
    return (
      <h1 style={{ textAlign: 'center', paddingBottom: '0.9rem' }}>
        No Products found
      </h1>
    );
  }

  return (
    <>
      <StickyPagebanner title="Welcome to Diamond Frozen Store" />
      <div className="orgo-grid-sorting row pt-70 cus-store-sort">
        <div className="col-lg-4 col-md-4 result-count">
          <p>
            We found{' '}
            <span className="count">
              {!products
                ? '0'
                : !filteredProduct
                ? products.length
                : filteredProduct.length}
            </span>{' '}
            products available for you
          </p>
        </div>

        {/* search form */}
        <div className="col-lg-4 col-md-4 result-count">
          <form
            onSubmit={searchProduct}
            style={{ display: 'flex' }}
            className="search-box"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Search for product"
              onChange={(e) => setUserInput(e.target.value.toLowerCase())}
              value={userInput}
            />
            <button type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>

        <div className="col-lg-4 col-md-4 ordering option-item">
          <div className="select-box">
            <label>Sort By:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Default</option>
              <option value="highToLow">Price: high to low</option>
              <option value="lowToHigh">Price: low to high</option>
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
              {!products || products.length === 0 || error ? (
                <h1>No Products</h1>
              ) : !filteredProduct ? (
                products.map((product) => (
                  <div key={product._id} className="col-lg-4 col-md-6">
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                filteredProduct.map((product) => (
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

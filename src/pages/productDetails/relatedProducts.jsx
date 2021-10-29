/* eslint-disable no-unused-vars */
import React from 'react';
import { BeatLoader } from 'react-spinners';
import { CenterContent, ProductCard } from '../../components';

const relatedProducts = ({ products, isLoading }) => {
  return (
    <div className="related-shop">
      <h4>Related Products</h4>
      <div className="row">
        {isLoading ? (
          <CenterContent>
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
    </div>
  );
};

export default relatedProducts;

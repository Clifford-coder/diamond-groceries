import React, { useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { ProductCard, CenterContent } from '.';
import { ProductContext } from '../context/ProductsContext';

const TrendingProducts = () => {
  const [products, isLoading, error] = useContext(ProductContext);

  if (error)
    return toast.error(
      'Oops! There was an error in getting trending products, try again'
    );

  return (
    <>
      <section className="top-products-area pb-70">
        <div
          className="container"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div className="section-title">
            <h2>Trending Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              ipsum suspendisse
            </p>
          </div>

          <div className="row">
            {isLoading ? (
              <CenterContent>
                <BeatLoader size={30} color="#0c00a0" />
              </CenterContent>
            ) : (
              <div className="row">
                {!products || products.length === 0 ? (
                  <h1>No Trending Products</h1>
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
      </section>
    </>
  );
};

export default TrendingProducts;

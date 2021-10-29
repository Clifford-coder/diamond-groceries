/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { title, images, _id, price, discount } = product;
  return (
    <>
      <div className="top-products-item">
        <div className="products-image">
          <Link to={`/store/${_id}`}>
            <img src={images[0].url} alt="product" />
          </Link>

          <ul className="products-action">
            <li>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Add to Cart"
              >
                <i className="flaticon-shopping-cart" />
              </span>
            </li>
            <li>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Add to Wishlist"
              >
                <i className="flaticon-heart" />
              </span>
            </li>
            <li>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Quick View"
                data-toggle="modal"
                data-target="#productsQuickView"
              >
                <i className="flaticon-search" />
              </span>
            </li>
          </ul>

          <div className="sale">
            <span>Sale</span>
          </div>
        </div>

        <div className="products-content">
          <h3>
            <a href="shop-details.html">{title}</a>
          </h3>
          <div className="price">
            <span className="new-price">
              {`$ ${price - price * (discount / 100)}`}{' '}
            </span>
            <span className="old-price">{`$ ${price}`}</span>
          </div>
          <ul className="rating">
            <li>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    id: PropTypes.string,
  }),
};

export default ProductCard;

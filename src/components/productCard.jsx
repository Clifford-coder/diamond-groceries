/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartContext } from '../context/Cart';

const ProductCard = ({ product }) => {
  const { title, images, _id, price, discount, category } = product;
  const { cartItems, addItemToCart } = useContext(CartContext);

  // check if item already exist in cart
  const existInCartAlready = () =>
    cartItems.findIndex((item) => item.product.id === _id) !== -1;

  const addToCart = () => {
    if (existInCartAlready())
      return toast.warn('This product has already been added to cart.');
    addItemToCart(product);
  };

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
                title={existInCartAlready() ? 'Already In Cart' : 'Add to cart'}
                onClick={addToCart}
                style={{
                  cursor: existInCartAlready() ? 'not-allowed' : 'pointer',
                }}
                role="button"
              >
                <i className="fas fa-cart-plus" />
              </span>
            </li>
            {/* <li>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Add to Wishlist"
              >
                <i className="fas fa-heart" />
              </span>
            </li> */}
            <li>
              <Link to={`/store/${_id}`}>
                <span
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="View product details"
                  data-toggle="modal"
                  data-target="#productsQuickView"
                >
                  <i className="fas fa-eye" />
                </span>
              </Link>
            </li>
          </ul>

          <div className="sale">
            <span>{category}</span>
          </div>
        </div>

        <div className="products-content">
          <h3>
            <Link to={`/store/${_id}`}>{title}</Link>
          </h3>
          <div className="price">
            <span className="new-price">
              {`GH₵ ${price - price * (discount / 100)}`}{' '}
            </span>
            {discount !== 0 ? (
              <span className="old-price">{`GH₵ ${price}`}</span>
            ) : null}
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

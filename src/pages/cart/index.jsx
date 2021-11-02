import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartItem, CenterContent, StickyPagebanner } from '../../components';
import { CartContext } from '../../context/Cart';

const Cart = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeCompletelyFromCart,
  } = useContext(CartContext);

  return (
    <>
      <StickyPagebanner title="My Cart" className2="item-bg1" />
      <section className="ptb-30">
        <div className="container">
          <div className="col-lg-8 col-md-8">
            <div className="cart-table table-responsive">
              {cartItems.length === 0 ? (
                <CenterContent>
                  <h5 style={{ textTransform: 'none' }}>
                    Your cart is empty. Please, add some products from the store
                  </h5>
                </CenterContent>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.product.id}
                        addItemToCart={addItemToCart}
                        itemDetails={item}
                        removeCompletelyFromCart={removeCompletelyFromCart}
                        decreaseItemFromCart={removeItemFromCart}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="cart-buttons">
              <div className="row align-items-center">
                <div className="col-lg-7 col-sm-7 col-md-7">
                  <Link to="/store" className="default-btn">
                    Back to Store
                  </Link>
                </div>
                <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                  {cartItems.length !== 0 && (
                    <Link to="/" className="default-btn">
                      Update Cart
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="cart-totals">
              <h3>Cart Totals</h3>
              <ul>
                <li>
                  Subtotal
                  <span>{`GH₵ ${cartItems
                    .reduce(
                      (prev, curr) =>
                        prev +
                        curr.quantity *
                          (curr.product.price -
                            curr.product.price * (curr.product.discount / 100)),
                      0
                    )
                    .toFixed(2)}`}</span>
                </li>
                <li>
                  Delivery fee
                  <span>$30.00</span>
                </li>
                <li>
                  Total
                  <span>
                    <b>$1713.50</b>
                  </span>
                </li>
              </ul>
              <Link to="/" className="default-btn">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

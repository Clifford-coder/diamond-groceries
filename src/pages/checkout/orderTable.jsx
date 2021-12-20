/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const orderTable = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <>
      <h3 className="title">Your Order</h3>
      <div className="order-table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr>
                <td className="product-name">
                  <Link to={`/store/${item.product._id}`}>
                    {`${item.product.title} (${item.quantity})`}
                  </Link>
                </td>
                <td className="product-total">
                  <span className="subtotal-amount">{`GH₵ ${(
                    (item.product.price -
                      item.product.price * (item.product.discount / 100)) *
                    item.quantity
                  ).toFixed(2)}`}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default orderTable;

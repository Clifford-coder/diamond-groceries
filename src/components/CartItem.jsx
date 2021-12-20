/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({
  itemDetails,
  addItemToCart,
  removeItemFromCart,
  removeCompletelyFromCart,
}) => {
  const { title, images, _id, price, discount } = itemDetails.product;
  const [unitPrice, setUnitPrice] = useState(price - price * (discount / 100));
  const [unitSubTotal, setUnitSubTotal] = useState(
    ((price - price * (discount / 100)) * itemDetails.quantity).toFixed(2)
  );

  useEffect(() => {
    setUnitPrice(price - price * (discount / 100));
    setUnitSubTotal(
      ((price - price * (discount / 100)) * itemDetails.quantity).toFixed(2)
    );
  }, [itemDetails.quantity]);

  const increaseItemQuantity = () => addItemToCart(itemDetails);
  const decreaseItemQuantity = () => removeItemFromCart(_id);

  return (
    <>
      <tr>
        <td className="product-thumbnail">
          <Link to={`/store/${_id}`}>
            <img src={images[0]?.url} alt="item" />
          </Link>
        </td>
        <td className="product-name">
          <Link to={`/store/${_id}`}>{title}</Link>
        </td>
        <td className="product-price">
          <span className="unit-amount">{`GH₵ ${unitPrice}`}</span>
        </td>
        <td className="product-quantity">
          <div className="input-counter">
            <span onClick={decreaseItemQuantity} className="minus-btn">
              <i className="fas fa-minus" />
            </span>
            <input type="number" name="quantity" value={itemDetails.quantity} />
            <span onClick={increaseItemQuantity} className="plus-btn">
              <i className="fas fa-plus" />
            </span>
          </div>
        </td>
        <td className="product-subtotal">
          <span className="subtotal-amount">{`GH₵ ${unitSubTotal}`}</span>
          <span
            onClick={() => removeCompletelyFromCart(_id)}
            className="remove"
            style={{ cursor: 'pointer' }}
          >
            <i className="fas fa-trash" />
          </span>
        </td>
      </tr>
    </>
  );
};

export default CartItem;

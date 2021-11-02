/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from '../context/Cart';

const CartItem = ({
  itemDetails,
  addItemToCart,
  decreaseItemFromCart,
  removeCompletelyFromCart,
}) => {
  const { title, images, _id, price, discount } = itemDetails.product;
  // const { cartItems } = useContext(CartContext);
  // const [itemQuantity, setItemQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(price - price * (discount / 100));
  const [unitSubTotal, setUnitSubTotal] = useState(
    ((price - price * (discount / 100)) * itemDetails.quantity).toFixed(2)
  );

  // useEffect(() => {
  //   setItemQuantity(itemDetails.quantity);
  //   console.log('item quantity -----', itemQuantity);
  // }, [itemDetails.quantity]);

  console.log('item detailssss ---', itemDetails);

  useCallback(() => {
    setUnitPrice(price - price * (discount / 100));
    setUnitSubTotal(
      ((price - price * (discount / 100)) * itemDetails.quantity).toFixed(2)
    );
  }, [itemDetails.quantity]);
  const increaseItemQuantity = () => addItemToCart(itemDetails);

  return (
    <>
      <tr>
        <td className="product-thumbnail">
          <Link to={`/store/${_id}`}>
            <img src={images[0].url} alt="item" />
          </Link>
        </td>
        <td className="product-name">
          <a href="shop-details.html">{title}</a>
        </td>
        <td className="product-price">
          <span className="unit-amount">{`GH₵ ${unitPrice}`}</span>
        </td>
        <td className="product-quantity">
          <div className="input-counter">
            <span
              onClick={() => decreaseItemFromCart(_id)}
              className="minus-btn"
            >
              <i className="fas fa-minus" />
            </span>
            <input type="number" value={itemDetails.quantity} />
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
          >
            <i className="fas fa-trash" />
          </span>
        </td>
      </tr>
    </>
  );
};

export default CartItem;

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // get user to identify multiple users in one browser.
  const user = JSON.parse(localStorage.getItem('diamond-user'));

  // todo: get the previous cart items in the local storage on init render

  // add to cart
  const addItemToCart = (product) => {
    const temp = cartItems;
    // const userId = user?.user?.id || null;
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    // increment the quantity if the same
    console.log('products to be added to cart ----- ', product);
    if (productIndex !== -1) temp[productIndex].quantity += 1;
    else
      temp.push({
        product,
        quantity: 1,
        userId: user?.user?.id ? user.user.id : null,
      });
    setCartItems(temp);
  };

  // reduce item quantity in cart
  const removeItemFromCart = (id) => {
    const temp = cartItems;
    console.log('product id to be removed from cart ----- ', id);

    const productIndex = cartItems.findIndex((item) => item.id === id);
    if (productIndex === -1) return;
    if (temp[productIndex].quantity === 1) {
      temp.splice(productIndex, 1);
    } else {
      temp[productIndex].quantity -= 1;
    }
    setCartItems(temp);
  };

  // remove completely from cart.
  const removeCompletelyFromCart = (id) => {
    const temp = cartItems;
    const productIndex = cartItems.findIndex((item) => item.id === id);
    if (productIndex === -1) return;
    temp.splice(productIndex, 1);
    setCartItems(temp);
  };
  // clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeCompletelyFromCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

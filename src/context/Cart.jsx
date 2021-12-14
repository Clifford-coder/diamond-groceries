import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // get user to identify multiple users in one browser.
  const user = JSON.parse(localStorage.getItem('diamond-user'));

  // get the previous cart items in the local storage on init render
  useEffect(() => {
    const localStorageCartItems = JSON.parse(
      localStorage.getItem('diamond-frozen-cart') || '[]'
    );
    setCartItems(localStorageCartItems);
  }, []);

  // add to cart
  const addItemToCart = (product) => {
    const temp = [...cartItems];
    const productIndex = temp.findIndex((item) => {
      return item.product?.id === product.product?.id;
    });
    // increment the quantity if the same
    if (productIndex !== -1) temp[productIndex].quantity += 1;
    else {
      temp.push({
        product,
        quantity: 1,
        userId: user?.user?.id ? user.user.id : null,
      });
    }
    // save cart items to localstorage to persist
    setCartItems(temp);
    localStorage.setItem('diamond-frozen-cart', JSON.stringify(temp));
  };

  // reduce item quantity in cart
  const removeItemFromCart = (id) => {
    const temp = [...cartItems];
    const productIndex = cartItems.findIndex(
      (item) => item?.product?.id === id
    );
    if (productIndex === -1) return;
    if (temp[productIndex].quantity === 1) {
      temp.splice(productIndex, 1);
    } else {
      temp[productIndex].quantity -= 1;
    }
    // localStorage.setItem('diamond-frozen-cart', JSON.stringify(temp));
    localStorage.setItem('diamond-frozen-cart', JSON.stringify(temp));
    setCartItems(temp);
  };

  // remove completely from cart.
  const removeCompletelyFromCart = (id) => {
    const temp = [...cartItems];
    const productIndex = cartItems.findIndex((item) => item.product.id === id);
    if (productIndex === -1) return;
    temp.splice(productIndex, 1);
    localStorage.setItem('diamond-frozen-cart', JSON.stringify(temp));
    setCartItems(temp);
  };

  // clear cart
  const clearCart = () => {
    localStorage.setItem('diamond-frozen-cart', JSON.stringify([]));
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

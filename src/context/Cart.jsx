import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // get user to identify multiple users in one browser.
  const user = JSON.parse(localStorage.getItem('diamond-user'));

  // todo: get the previous cart items in the local storage on init render

  // add to cart
  const addItemToCart = (product) => {
    // const userId = user?.user?.id || null;
    const productIndex = cartItems.findIndex((item) => {
      return item.product?.id === product.product?.id;
    });
    // increment the quantity if the same
    if (productIndex !== -1) cartItems[productIndex].quantity += 1;
    else {
      cartItems.push({
        product,
        quantity: 1,
        userId: user?.user?.id ? user.user.id : null,
      });
    }

    setCartItems([...cartItems]);
  };

  // reduce item quantity in cart
  const removeItemFromCart = (id) => {
    const temp = [...cartItems];
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
    const temp = [...cartItems];
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

/* eslint-disable react/prop-types */
import { createContext, useState, React, useEffect } from 'react';
import api from '../network/api';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    // get all the products
    (async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/products');
        const { data } = response;
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={[products, isLoading, error]}>
      {children}
    </ProductContext.Provider>
  );
};

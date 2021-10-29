import { useEffect, useState } from 'react';
import api from '../network/api';

const useFetchProducts = (url) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await api.get(url);
        const { data } = response;
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    })();
  }, []);

  return [products, isLoading, error];
};

export default useFetchProducts;

import { useContext } from 'react';
import { productsStateContext } from '../contexts/ProductsContext';

export const useProductsContext = () => {
  const productsState = useContext(productsStateContext);

  if (!productsState) {
    throw new Error(
      'useProductsContext must be used within a ProductsProvider',
    );
  }

  return productsState;
};

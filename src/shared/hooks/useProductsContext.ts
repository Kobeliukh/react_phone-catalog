import { useContext } from 'react';
import { ProductsStateContext } from '../contexts/ProductsContext';

export const useProductsContext = () => {
  const productsState = useContext(ProductsStateContext);

  if (!productsState) {
    throw new Error(
      'useProductsContext must be used within a ProductsProvider',
    );
  }

  return productsState;
};

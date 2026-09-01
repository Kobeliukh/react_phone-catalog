import { ProductsState } from '@/types/ProductsState';
import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';

interface Props {
  children: React.ReactNode;
}

export const ProductsStateContext = createContext<ProductsState | null>(null);

export const ProductsProvider = ({ children }: Props) => {
  const productsState = useProducts();

  return (
    <ProductsStateContext.Provider value={productsState}>
      {children}
    </ProductsStateContext.Provider>
  );
};

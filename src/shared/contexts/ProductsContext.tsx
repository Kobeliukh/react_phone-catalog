import { ProductsState } from '@/types/ProductsState';
import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';

interface Props {
  children: React.ReactNode;
}

export const productsStateContext = createContext<ProductsState | null>(null);

export const ProductsProvider = ({ children }: Props) => {
  const productsState = useProducts();

  return (
    <productsStateContext.Provider value={productsState}>
      {children}
    </productsStateContext.Provider>
  );
};

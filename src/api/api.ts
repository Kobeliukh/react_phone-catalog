import { Product } from '@/types/product';

export const getProducts = async (): Promise<Product[]> => {
  return (await fetch('/api/products.json')).json();
};

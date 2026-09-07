import { Categories } from '@/types/Categories';
import { Product } from '@/types/Product';
import { ProductDetails } from '@/types/ProductDetails';

export const getProducts = async (): Promise<Product[]> => {
  return (await fetch('/api/products.json')).json();
};

export const getCategory = async (
  category: Categories,
): Promise<ProductDetails[]> => {
  return (await fetch(`/api/${category}.json`)).json();
};

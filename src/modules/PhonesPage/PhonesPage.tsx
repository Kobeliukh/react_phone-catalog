import { CategoryPage } from '@/shared/components/CategoryPage';
import { useProductsContext } from '@/shared/hooks/useProductsContext';
import { Categories } from '@/types/Categories';

export const PhonesPage = () => {
  const productsState = useProductsContext();

  const products = productsState.products.filter(
    product => product.category === Categories.Phones,
  );

  return (
    <CategoryPage
      products={products}
      title="Mobile phones"
      emptyMessage="There are no phones yet"
    />
  );
};

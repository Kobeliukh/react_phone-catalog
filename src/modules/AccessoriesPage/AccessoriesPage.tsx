import { CategoryPage } from '@/shared/components/CategoryPage';
import { useProductsContext } from '@/shared/hooks/useProductsContext';
import { Categories } from '@/types/Categories';

export const AccessoriesPage = () => {
  const productsState = useProductsContext();

  const products = productsState.products.filter(
    product => product.category === Categories.Accessories,
  );

  return (
    <CategoryPage
      products={products}
      title="Accessories"
      emptyMessage="There are no accessories yet"
    />
  );
};

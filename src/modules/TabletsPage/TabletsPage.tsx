import { CategoryPage } from '@/shared/components/CategoryPage';
import { useProductsContext } from '@/shared/hooks/useProductsContext';
import { Categories } from '@/types/Categories';

export const TabletsPage = () => {
  const productsState = useProductsContext();

  const products = productsState.products.filter(
    product => product.category === Categories.Tablets,
  );

  return (
    <CategoryPage
      title="Tablets"
      products={products}
      emptyMessage="There are no tablets yet"
    />
  );
};

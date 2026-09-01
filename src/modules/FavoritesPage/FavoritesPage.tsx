import { CategoryPage } from '@/shared/components/CategoryPage';
import { useFavoritesState } from '@/shared/hooks/useFavoritesState';
import { useProductsContext } from '@/shared/hooks/useProductsContext';
import { useMemo } from 'react';

export const FavoritesPage = () => {
  const productsState = useProductsContext();
  const favoritesState = useFavoritesState();

  const favorites = useMemo(
    () =>
      productsState.products.filter(product =>
        favoritesState.includes(product.id),
      ),
    [favoritesState, productsState.products],
  );

  return (
    <CategoryPage
      title="Favourites"
      products={favorites}
      hasFilters={false}
      productsName="items"
    />
  );
};

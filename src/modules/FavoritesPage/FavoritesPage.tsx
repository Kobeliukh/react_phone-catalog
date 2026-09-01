import { Breadcrumbs } from '@/shared/components/Breadcrumbs';
import { PageHeader } from '@/shared/components/PageHeader';
import { PageLayout } from '@/shared/components/PageLayout';
import { ProductsList } from '@/shared/components/ProductsList';
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

  const headerElement = (
    <PageHeader
      title="Favourites"
      productsCount={favorites.length}
      productsName="items"
    />
  );

  return (
    <PageLayout topNav={<Breadcrumbs />} header={headerElement}>
      <ProductsList products={favorites} hasFilters={false} />
    </PageLayout>
  );
};

import { Breadcrumbs } from '@/shared/components/Breadcrumbs';
import { PageHeader } from '@/shared/components/PageHeader';
import { PageLayout } from '@/shared/components/PageLayout';
import { ProductsList } from '@/shared/components/ProductsList';
// eslint-disable-next-line max-len
import { ProductsListSkeleton } from '@/shared/components/ProductsList/components/ProductsListSkeleton';
import { useFavoritesState } from '@/shared/hooks/useFavoritesState';
import { useProducts } from '@/shared/hooks/useProducts';
import { useMemo } from 'react';

export const FavoritesPage = () => {
  const productsState = useProducts();
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
      isLoading={productsState.isLoading}
    />
  );

  return (
    <PageLayout topNav={<Breadcrumbs />} header={headerElement}>
      {productsState.isLoading ? (
        <ProductsListSkeleton hasFilters={false} hasPagination={false} />
      ) : (
        <ProductsList products={favorites} hasFilters={false} />
      )}
    </PageLayout>
  );
};

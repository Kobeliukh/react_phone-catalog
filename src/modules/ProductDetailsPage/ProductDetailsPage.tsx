import { PageLayout } from '@/shared/components/PageLayout';
import { useProductDetails } from '@/shared/hooks/useProductDetails';
import { Breadcrumbs } from '@/shared/components/Breadcrumbs';
import { ProductDetailsHeader } from './components/ProductDetailsHeader';
import { ProductDetails } from './components/ProductDetails';
import { useProducts } from '@/shared/hooks/useProducts';
import { NotFoundPage } from '../NotFoundPage';
/* eslint-disable max-len */
import { ProductDetailsSkeleton } from './components/ProductDetails/components/ProductDetailsSkeleton';

export const ProductDetailsPage = () => {
  const productDetailsState = useProductDetails();
  const productsState = useProducts();

  const product = productDetailsState.product;

  const isLoading = productDetailsState.isLoading || productsState.isLoading;

  const catalogProduct = productsState.products.find(
    cProduct => cProduct.itemId === product?.id,
  );

  if (!isLoading && (!product || !catalogProduct)) {
    return <NotFoundPage />;
  }

  let content: React.ReactNode = null;

  if (isLoading) {
    content = <ProductDetailsSkeleton />;
  } else if (product && catalogProduct) {
    content = (
      <ProductDetails
        product={product}
        catalogProducts={productsState.products}
        catalogProduct={catalogProduct}
      />
    );
  }

  return (
    <PageLayout
      topNav={<Breadcrumbs />}
      header={
        <ProductDetailsHeader
          title={product?.name || ''}
          isLoading={isLoading}
        />
      }
    >
      {content}
    </PageLayout>
  );
};

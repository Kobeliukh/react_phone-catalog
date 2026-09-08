import { PageLayout } from '@/shared/components/PageLayout';
import { useProductDetails } from '@/shared/hooks/useProductDetails';
import { Breadcrumbs } from '@/shared/components/Breadcrumbs';
import { ProductDetailsHeader } from './components/ProductDetailsHeader';
import { ProductDetails } from './components/ProductDetails';
import { useProducts } from '@/shared/hooks/useProducts';
import { NotFoundPage } from '../NotFoundPage';

export const ProductDetailsPage = () => {
  const productDetailsState = useProductDetails();
  const productsState = useProducts();

  const product = productDetailsState.product;

  if (!product || productDetailsState.isLoading || productsState.isLoading) {
    return 'loading...';
  }

  const catalogProduct = productsState.products.find(
    cProduct => cProduct.itemId === product.id,
  );

  if (!catalogProduct) {
    return <NotFoundPage />;
  }

  return (
    <PageLayout
      topNav={<Breadcrumbs />}
      header={<ProductDetailsHeader title={product.name} />}
    >
      <ProductDetails
        product={product}
        catalogProducts={productsState.products}
        catalogProduct={catalogProduct}
      />
    </PageLayout>
  );
};

import { PageLayout } from '@/shared/components/PageLayout';
import { useProductDetails } from '@/shared/hooks/useProductDetails';
import { Breadcrumbs } from '@/shared/components/Breadcrumbs';
import { ProductDetailsHeader } from './components/ProductDetailsHeader';
import { ProductDetails } from './components/ProductDetails';

export const ProductDetailsPage = () => {
  const productDetailsState = useProductDetails();

  const product = productDetailsState.product;

  if (!product) {
    return 'loading...';
  }

  return (
    <PageLayout
      topNav={<Breadcrumbs />}
      header={<ProductDetailsHeader title={product.name} />}
    >
      <ProductDetails product={product} />
    </PageLayout>
  );
};

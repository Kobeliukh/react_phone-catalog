import { Product } from '@/types/Product';
import { PageHeader } from '../PageHeader';
import styles from './CategoryPage.module.scss';
import { Breadcrumbs } from '../Breadcrumbs';
import { PageLayout } from '../PageLayout';
import { ProductsList } from '../ProductsList';
// eslint-disable-next-line max-len
import { ProductsListSkeleton } from '../ProductsList/components/ProductsListSkeleton';

interface Props {
  products: Product[];
  title: string;
  emptyMessage: string;
  isLoading?: boolean;
}

export const CategoryPage = ({
  products,
  title,
  emptyMessage,
  isLoading = false,
}: Props) => {
  const headerElement = (
    <PageHeader
      title={title}
      productsCount={products.length}
      productsName="models"
      isLoading={isLoading}
    />
  );

  let content: React.ReactNode = null;

  if (isLoading) {
    content = <ProductsListSkeleton />;
  } else if (products.length > 0) {
    content = <ProductsList products={products} />;
  } else {
    content = <span className={styles.emptyMessage}>{emptyMessage}</span>;
  }

  return (
    <PageLayout topNav={<Breadcrumbs />} header={headerElement}>
      {content}
    </PageLayout>
  );
};

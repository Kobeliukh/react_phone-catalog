import { Product } from '@/types/Product';
import { PageHeader } from '../PageHeader';
import styles from './CategoryPage.module.scss';
import { Breadcrumbs } from '../Breadcrumbs';
import { PageLayout } from '../PageLayout';
import { ProductsList } from '../ProductsList';

interface Props {
  products: Product[];
  title: string;
  emptyMessage: string;
}

export const CategoryPage = ({ products, title, emptyMessage }: Props) => {
  const headerElement = (
    <PageHeader
      title={title}
      productsCount={products.length}
      productsName="models"
    />
  );

  return (
    <PageLayout topNav={<Breadcrumbs />} header={headerElement}>
      {products.length > 0 ? (
        <ProductsList products={products} />
      ) : (
        <span className={styles.emptyMessage}>{emptyMessage}</span>
      )}
    </PageLayout>
  );
};

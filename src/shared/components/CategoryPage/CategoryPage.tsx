import styles from './CategoryPage.module.scss';
import { Breadcrumbs } from '../Breadcrumbs';
import { ProductsList } from './components/ProductsList';
import { CategoryHeader } from './components/CategoryHeader';
import { Product } from '@/types/Product';

interface Props {
  title: string;
  products: Product[];
  hasFilters?: boolean;
  productsName?: string;
}

export const CategoryPage = ({
  title,
  products,
  productsName = 'models',
  hasFilters = true,
}: Props) => {
  return (
    <main className={styles.categoryPage}>
      <Breadcrumbs />

      <section className={styles.content}>
        <CategoryHeader
          title={title}
          productsCount={products.length}
          productsName={productsName}
        />

        <ProductsList products={products} hasFilters={hasFilters} />
      </section>
    </main>
  );
};

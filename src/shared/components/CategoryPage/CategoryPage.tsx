import styles from './CategoryPage.module.scss';
import { Breadcrumbs } from '../Breadcrumbs';
import { ProductsList } from './components/ProductsList';
import { CategoryHeader } from './components/CategoryHeader';
import { Product } from '@/types/Product';

interface Props {
  title: string;
  products: Product[];
}

export const CategoryPage = ({ title, products }: Props) => {
  return (
    <main className={styles.categoryPage}>
      <Breadcrumbs />

      <section className={styles.content}>
        <CategoryHeader title={title} productsCount={products.length} />

        <ProductsList products={products} />
      </section>
    </main>
  );
};

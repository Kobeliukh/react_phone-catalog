import styles from './HomePage.module.scss';
import { PicturesSlider } from './components/PicturesSlider';

import { ProductsSlider } from './components/ProductsSlider';
import { ShopByCategory } from './components/ShopByCategory';
import { Categories } from '@/types/Categories';
import { useMemo } from 'react';
import { ModelsCount } from '@/types/ModelsCount';
import { useProductsContext } from '@/shared/hooks/useProductsContext';

export const HomePage = () => {
  const productsState = useProductsContext();

  const modelsCount: ModelsCount = useMemo(
    () =>
      productsState.products.reduce(
        (acc, product) => ({
          ...acc,
          [product.category]: acc[product.category] + 1,
        }),
        Object.fromEntries(
          Object.values(Categories).map(category => [category, 0]),
        ) as ModelsCount,
      ),
    [productsState.products],
  );

  const newestModels = [...productsState.products].sort(
    (modelA, modelB) => modelB.year - modelA.year,
  );

  const cheapestModels = [...productsState.products].sort((modelA, modelB) => {
    const modelAdiff = modelA.fullPrice - modelA.price;
    const modelBdiff = modelB.fullPrice - modelB.price;

    return modelBdiff - modelAdiff;
  });

  return (
    <main className={styles.homePage}>
      <section className={styles.heroSection}>
        <h1 className={styles.hiddenTitle}>Product Catalog</h1>

        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{'Welcome to Nice\n Gadgets store!'}</h2>
        </div>

        <PicturesSlider />
      </section>

      <div className={styles.sectionWrapper}>
        <ProductsSlider title={'Brand new\n models'} products={newestModels} />
      </div>

      <div className={styles.sectionWrapper}>
        <ShopByCategory modelsCount={modelsCount} />
      </div>

      <div className={styles.sectionWrapper}>
        <ProductsSlider title="Hot prices" products={cheapestModels} />
      </div>
    </main>
  );
};

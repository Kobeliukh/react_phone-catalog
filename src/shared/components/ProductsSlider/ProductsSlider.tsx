import { IconButton } from '@/shared/components/IconButton';
import styles from './ProductsSlider.module.scss';
import { ProductCard } from '@/shared/components/ProductCard';
import { useRef, useState } from 'react';
import { Product } from '@/types/Product';

interface Props {
  title: string;
  products: Product[];
}

export const ProductsSlider = ({ title, products }: Props) => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const sliderContentRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    const sliderContent = sliderContentRef.current;

    sliderContent?.scrollBy({
      left: sliderContent.clientWidth,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    const sliderContent = sliderContentRef.current;

    sliderContent?.scrollBy({
      left: -sliderContent.clientWidth,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const sliderContent = sliderContentRef.current;

    if (!sliderContent) {
      return;
    }

    setIsAtStart(sliderContent.scrollLeft === 0);

    setIsAtEnd(
      Math.ceil(sliderContent.scrollLeft + sliderContent.clientWidth) >=
        sliderContent.scrollWidth,
    );
  };

  return (
    <section className={styles.productsSlider}>
      <div className={styles.topRow}>
        <h2 className={styles.sliderTitle}>{title}</h2>
        <div className={styles.controls}>
          <IconButton
            variant="arrow"
            rotate={270}
            onClick={scrollLeft}
            disabled={isAtStart}
          />
          <IconButton
            variant="arrow"
            rotate={90}
            onClick={scrollRight}
            disabled={isAtEnd}
          />
        </div>
      </div>

      <div
        className={styles.content}
        ref={sliderContentRef}
        onScroll={handleScroll}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            category={product.category}
            itemId={product.itemId}
            imgURL={product.image}
            title={product.name}
            price={product.price}
            fullPrice={product.fullPrice}
            screen={product.screen}
            capacity={product.capacity}
            ram={product.ram}
          />
        ))}
      </div>
    </section>
  );
};

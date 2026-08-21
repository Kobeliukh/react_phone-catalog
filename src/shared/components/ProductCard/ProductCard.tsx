import { Button } from '../Button';
import { IconButton } from '../IconButton';
import styles from './ProductCard.module.scss';

interface Props {
  imgURL: string;
  title: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductCard = ({
  imgURL,
  title,
  price,
  fullPrice,
  screen,
  capacity,
  ram,
}: Props) => {
  return (
    <div className={styles.productCard}>
      <img src={imgURL} alt={title} className={styles.img} />

      <p className={styles.title}>{title}</p>

      <div className={styles.prices}>
        {price === fullPrice ? (
          <h3 className={styles.price}>{`$${price}`}</h3>
        ) : (
          <>
            <h3 className={styles.price}>{`$${price}`}</h3>
            <h3 className={styles.fullPrice}>{`$${fullPrice}`}</h3>
          </>
        )}
      </div>

      <div className={styles.divider} />

      <div className={styles.specs}>
        <div className={styles.spec}>
          <span className={styles.specTitle}>Screen</span>
          <span className={styles.specValue}>{screen}</span>
        </div>

        <div className={styles.spec}>
          <span className={styles.specTitle}>Capacity</span>
          <span className={styles.specValue}>{capacity}</span>
        </div>

        <div className={styles.spec}>
          <span className={styles.specTitle}>RAM</span>
          <span className={styles.specValue}>{ram}</span>
        </div>
      </div>

      <div className={styles.buttons}>
        <Button text="Add to cart" />
        <IconButton variant="favorite" className={styles.favoriteButton} />
      </div>
    </div>
  );
};

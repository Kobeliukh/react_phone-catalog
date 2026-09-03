import { IconButton } from '@/shared/components/IconButton';
import styles from './CartItem.module.scss';
import { useCartDispatch } from '@/shared/hooks/useCartDispatch';

interface Props {
  id: number;
  imgURL: string;
  title: string;
  price: number;
  amount: number;
}

export const CartItem = ({ id, imgURL, title, price, amount }: Props) => {
  const cartDispatch = useCartDispatch();

  const handleIncrease = () => {
    cartDispatch(currentProducts =>
      currentProducts.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };

  const handleDecrease = () => {
    cartDispatch(currentProducts =>
      currentProducts.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  };

  const handleRemove = () => {
    cartDispatch(currentProducts =>
      currentProducts.filter(product => product.id !== id),
    );
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.details}>
        <IconButton variant="close" hasBorder={false} onClick={handleRemove} />

        <div className={styles.imgContainer}>
          <img src={imgURL} alt={title} className={styles.img} />
        </div>

        <p className={styles.title}>{title}</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.amountBlock}>
          <IconButton
            variant="minus"
            disabled={amount === 1}
            onClick={handleDecrease}
          />
          <span className={styles.amount}>{amount}</span>
          <IconButton variant="plus" onClick={handleIncrease} />
        </div>

        <h3 className={styles.price}>${price}</h3>
      </div>
    </div>
  );
};

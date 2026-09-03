import { Button } from '@/shared/components/Button';
import styles from './Cart.module.scss';
import { CartItem } from './components/CartItem';
import { useCartState } from '@/shared/hooks/useCartState';
import { useProducts } from '@/shared/hooks/useProducts';
import { useMemo, useState } from 'react';
import { SavedProduct } from '@/types/SavedProduct';
import { Modal } from '@/shared/components/Modal';
import { useCartDispatch } from '@/shared/hooks/useCartDispatch';

export const Cart = () => {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const productsState = useProducts();
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();

  const saved: SavedProduct[] = useMemo(
    () =>
      cartState.reduce((acc, savedProduct) => {
        const actualProduct = productsState.products.find(
          product => product.id === savedProduct.id,
        );

        if (!actualProduct) {
          return acc;
        }

        acc.push({
          ...savedProduct,
          product: actualProduct,
        });

        return acc;
      }, [] as SavedProduct[]),
    [cartState, productsState],
  );

  const totals = saved.reduce(
    (acc, item) => ({
      price: acc.price + item.product.price * item.quantity,
      amount: acc.amount + item.quantity,
    }),
    { price: 0, amount: 0 },
  );

  const handleCheckoutModalOpen = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleCheckoutModalClose = () => {
    setIsCheckoutModalOpen(false);
  };

  const handleCartClear = () => {
    cartDispatch([]);
    setIsCheckoutModalOpen(false);
  };

  const Empty = (
    <div className={styles.emptyMessageContainer}>
      <h2 className={styles.emptyMessage}>Your cart is empty</h2>
      <img
        src="img/cart-is-empty.png"
        alt="Empty cart image"
        className={styles.emptyMessageImg}
      />
    </div>
  );

  const CartContent = (
    <div className={styles.cart}>
      <div className={styles.list}>
        {saved.map(({ id, product, quantity }) => (
          <CartItem
            key={id}
            id={id}
            imgURL={product.image}
            title={product.name}
            price={product.price * quantity}
            amount={quantity}
          />
        ))}
      </div>

      <div className={styles.total}>
        <div className={styles.priceDetails}>
          <h2 className={styles.totalPrice}>${totals.price}</h2>
          <p className={styles.itemsCount}>Total for {totals.amount} items</p>
        </div>

        <div className={styles.divider} />

        <Button
          text="Checkout"
          className={styles.button}
          onClick={handleCheckoutModalOpen}
        />
      </div>
    </div>
  );

  return (
    <>
      {saved.length === 0 ? Empty : CartContent}{' '}
      <Modal isOpen={isCheckoutModalOpen}>
        <div className={styles.checkoutModalContent}>
          <p className={styles.checkoutModalMessage}>
            {'Checkout is not implemented.\n Do you want to clear the Cart?'}
          </p>

          <div className={styles.checkoutModalButtons}>
            <Button text="Confirm" onClick={handleCartClear} />
            <Button text="Close" onClick={handleCheckoutModalClose} />
          </div>
        </div>
      </Modal>
    </>
  );
};

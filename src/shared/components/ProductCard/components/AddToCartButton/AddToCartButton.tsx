import { Button } from '@/shared/components/Button';
import { useCartDispatch } from '@/shared/hooks/useCartDispatch';
import { useCartState } from '@/shared/hooks/useCartState';

interface Props {
  id: number;
}

export const AddToCartButton = ({ id }: Props) => {
  const cartDispatch = useCartDispatch();
  const cartState = useCartState();

  const isAdded = cartState.some(product => product.id === id);

  const handleAdd = () => {
    if (isAdded) {
      return;
    }

    cartDispatch(currentProducts => {
      return [...currentProducts, { id, quantity: 1 }];
    });
  };

  return (
    <Button
      text="Add to cart"
      activeText="Added"
      selected={isAdded}
      disabled={isAdded}
      onClick={handleAdd}
    />
  );
};

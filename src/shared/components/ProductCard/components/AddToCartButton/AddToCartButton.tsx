import { Button } from '@/shared/components/Button';
import { useCartDispatch } from '@/shared/hooks/useCartDispatch';
import { useCartState } from '@/shared/hooks/useCartState';

interface Props {
  id: number;
}

export const AddToCartButton = ({ id }: Props) => {
  const cartDispatch = useCartDispatch();
  const cartState = useCartState();

  const handleToggleAdd = () => {
    cartDispatch(currentProducts => {
      if (currentProducts.some(product => product.id === id)) {
        return currentProducts.filter(product => product.id !== id);
      }

      return [...currentProducts, { id: id, quantity: 1 }];
    });
  };

  return (
    <Button
      text="Add to cart"
      activeText="Added"
      selected={cartState.some(product => product.id === id)}
      onClick={handleToggleAdd}
    />
  );
};

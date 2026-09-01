import { HeaderLink } from '../HeaderLink';

interface Props {
  className?: string;
}

export const CartButton = ({ className }: Props) => {
  return (
    <HeaderLink
      to={'/cart'}
      iconURL={'/img/icons/cart.svg'}
      className={className}
    />
  );
};

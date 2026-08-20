import classNames from 'classnames';
import { HeaderLink } from '../HeaderLink';
import { Nav } from '../Nav';
import styles from './BurgerMenu.module.scss';

interface Props {
  className?: string;
  isOpen: boolean;
}

export const BurgerMenu = ({ isOpen, className }: Props) => {
  return (
    <div
      className={classNames(
        styles.burgerMenu,
        { [styles.isOpen]: isOpen },
        className,
      )}
    >
      <Nav />

      <div className={styles.buttons}>
        <HeaderLink
          to={'/favorites'}
          iconURL={'/img/icons/favourites.svg'}
          className={styles.link}
        />
        <HeaderLink
          to={'/cart'}
          iconURL={'/img/icons/cart.svg'}
          className={styles.link}
        />
      </div>
    </div>
  );
};

import { NavLink, To } from 'react-router-dom';
import styles from './HeaderLink.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
  iconURL: string;
  to: To;
}

export const HeaderLink = ({ className, to, iconURL }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return classNames(
          styles.headerLink,
          { [styles.isActive]: isActive },
          className,
        );
      }}
    >
      <span
        className={styles.icon}
        style={{ backgroundImage: `url('${iconURL}')` }}
      ></span>
    </NavLink>
  );
};

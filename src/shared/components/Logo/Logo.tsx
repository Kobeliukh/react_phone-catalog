import classNames from 'classnames';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  size?: 's' | 'm' | 'l';
}

export const Logo = ({ className, size = 's' }: Props) => (
  <Link to={'/'}>
    <img
      src="/img/icons/logo.svg"
      alt="Logo"
      className={classNames(styles.logo, styles[size], className)}
    />
  </Link>
);

import { BackButton } from '@/shared/components/BackButton';
import styles from './ProductDetailsHeader.module.scss';

interface Props {
  title: string;
}

export const ProductDetailsHeader = ({ title }: Props) => {
  return (
    <div className={styles.productDetailsHeader}>
      <BackButton />

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

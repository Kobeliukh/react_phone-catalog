import styles from './CategoryHeader.module.scss';

interface Props {
  title: string;
  productsCount: number;
}

export const CategoryHeader = ({ title, productsCount }: Props) => {
  return (
    <div className={styles.categoryHeader}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.modelsCount}>{productsCount} models</p>
    </div>
  );
};

import styles from './CategoryHeader.module.scss';

interface Props {
  title: string;
  productsCount: number;
  productsName: string;
}

export const CategoryHeader = ({
  title,
  productsCount,
  productsName,
}: Props) => {
  return (
    <div className={styles.categoryHeader}>
      <h1 className={styles.title}>{title}</h1>

      {productsCount > 0 && (
        <p className={styles.modelsCount}>
          {productsCount} {productsName}
        </p>
      )}
    </div>
  );
};

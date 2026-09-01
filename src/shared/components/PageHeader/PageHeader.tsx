import styles from './PageHeader.module.scss';

interface Props {
  title: string;
  productsCount: number;
  productsName?: string;
}

export const PageHeader = ({
  title,
  productsCount,
  productsName = 'items',
}: Props) => {
  return (
    <div className={styles.pageHeader}>
      <h1 className={styles.title}>{title}</h1>

      {productsCount > 0 && (
        <p className={styles.modelsCount}>
          {productsCount} {productsName}
        </p>
      )}
    </div>
  );
};

import { Button } from '@/shared/components/Button';
import styles from './CategoryPageError.module.scss';

interface Props {
  reloadFunction: () => void;
}

export const CategoryPageError = ({ reloadFunction }: Props) => {
  return (
    <div className={styles.categoryPageError}>
      <h2 className={styles.errorMessage}>Something went wrong</h2>
      <Button
        text="Reload"
        onClick={reloadFunction}
        className={styles.reloadButton}
      />
    </div>
  );
};

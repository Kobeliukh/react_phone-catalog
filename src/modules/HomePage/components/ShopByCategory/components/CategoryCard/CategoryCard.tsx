import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.scss';

interface Props {
  linkURL: string;
  imgURL: string;
  title: string;
  modelsCount: number;
}

export const CategoryCard = ({
  linkURL,
  imgURL,
  title,
  modelsCount,
}: Props) => {
  return (
    <Link to={linkURL} className={styles.categoryCard}>
      <img
        src={imgURL}
        alt={`${title} category `}
        className={styles.categoryImg}
      />

      <div className={styles.descr}>
        <h4 className={styles.title}>{title}</h4>

        <p className={styles.modelsCount}>{modelsCount} models</p>
      </div>
    </Link>
  );
};

import classNames from 'classnames';
import styles from './Button.module.scss';

interface Props {
  text: string;
  selected?: boolean;
}

export const Button = ({ text, selected = false }: Props) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, { [styles.isSelected]: selected })}
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
};

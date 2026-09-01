import classNames from 'classnames';
import styles from './Button.module.scss';

interface Props {
  text: string;
  activeText: string;
  selected?: boolean;
  onClick?: () => void;
}

export const Button = ({
  text,
  activeText,
  selected = false,
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, { [styles.isSelected]: selected })}
      onClick={onClick}
    >
      <span className={styles.text}>{selected ? activeText : text}</span>
    </button>
  );
};

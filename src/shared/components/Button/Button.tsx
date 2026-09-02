import classNames from 'classnames';
import styles from './Button.module.scss';

interface Props {
  text: string;
  activeText?: string;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  text,
  activeText,
  selected = false,
  className,
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        { [styles.isSelected]: selected },
        className,
      )}
      onClick={onClick}
    >
      <span className={styles.text}>{selected ? activeText : text}</span>
    </button>
  );
};

import styles from './IconButton.module.scss';
import classNames from 'classnames';

interface BaseProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

type Props =
  | (BaseProps & { variant: 'pagination'; number: number; selected?: boolean })
  | (BaseProps & { variant: 'arrow'; selected?: never; rotate?: number })
  | (BaseProps & { variant: 'favorite'; selected?: boolean; rotate?: never });

export const IconButton = (props: Props) => {
  const { className, variant, disabled = false, onClick } = props;

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(
        styles.baseButton,
        styles[variant],
        {
          [styles.selected]: props.selected,
        },
        className,
      )}
      onClick={onClick}
    >
      {variant === 'pagination' ? (
        <span className={styles.number}>{props.number}</span>
      ) : (
        <span
          className={classNames(styles.icon, styles[variant])}
          style={{
            transform: props.rotate ? `rotate(${props.rotate}deg)` : undefined,
          }}
        />
      )}
    </button>
  );
};

import styles from './IconButton.module.scss';
import classNames from 'classnames';

interface BaseProps {
  className?: string;
  disabled?: boolean;
}

type Props =
  | (BaseProps & { variant: 'pagination'; number: number; selected?: boolean })
  | (BaseProps & { variant: 'arrow'; selected?: never })
  | (BaseProps & { variant: 'favorite'; selected?: boolean });

export const IconButton = (props: Props) => {
  const { className, variant, disabled = false } = props;

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
    >
      {variant === 'pagination' ? (
        <span className={styles.number}>{props.number}</span>
      ) : (
        <span className={classNames(styles.icon, styles[variant])} />
      )}
    </button>
  );
};

import type { SelectButtonProps } from './SelectButton.types'
import styles from './SelectButton.module.css'

export function SelectButton({
  children,
  placeholder = 'Select...',
  onClick,
  disabled,
  invalid,
  size = 'm',
  'aria-label': ariaLabel,
  className,
  style,
}: SelectButtonProps) {
  const classes = [
    styles.root,
    styles[size],
    invalid ? styles.invalid : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const hasContent = children != null && children !== ''

  return (
    <button
      className={classes}
      style={style}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      type="button"
    >
      <span className={[styles.text, !hasContent ? styles.placeholder : ''].join(' ')}>
        {hasContent ? children : placeholder}
      </span>
      <span className={styles.chevron}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  )
}

import type { ChipProps } from './Chip.types'
import styles from './Chip.module.css'

export function Chip({
  text,
  color,
  small,
  onDelete,
  onClick,
  disabled,
  children,
  className,
  style,
}: ChipProps) {
  const classes = [
    styles.root,
    small ? styles.s : styles.m,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onDelete) {
      onDelete()
    }
    onClick?.(e)
  }

  return (
    <button
      className={classes}
      style={{ ...style, ...(color ? { background: color, color: '#fff' } : {}) }}
      disabled={disabled}
      onClick={handleClick}
      type="button"
    >
      <span>{text ?? children}</span>
      {onDelete && (
        <svg className={styles.deleteIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )
}

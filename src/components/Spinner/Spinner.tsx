import type { SpinnerProps } from './Spinner.types'
import styles from './Spinner.module.css'

const sizeMap = { s: 16, m: 24, l: 50 }

export function Spinner({
  size = 'm',
  'aria-label': ariaLabel = 'Loading',
  className,
  style,
}: SpinnerProps) {
  const classes = [styles.root, styles[size], className]
    .filter(Boolean)
    .join(' ')
  const px = sizeMap[size]

  return (
    <svg
      className={classes}
      style={style}
      width={px}
      height={px}
      viewBox="0 0 50 50"
      role="status"
      aria-label={ariaLabel}
    >
      <circle className={styles.circle} cx="25" cy="25" r="20" />
    </svg>
  )
}

import type { IconProps } from './Icon.types'
import styles from './Icon.module.css'

export function Icon({
  name,
  size = 'm',
  color,
  'aria-label': ariaLabel,
  className,
  style,
}: IconProps) {
  const classes = [styles.root, styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <span
      className={classes}
      style={{ ...style, color }}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      {name}
    </span>
  )
}

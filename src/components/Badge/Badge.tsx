import type { BadgeProps } from './Badge.types'
import styles from './Badge.module.css'

export function Badge({
  label,
  children,
  variant = 'neutral',
  size = 'm',
  dot = false,
  className,
  style,
}: BadgeProps) {
  const classes = [
    styles.root,
    styles[variant],
    styles[size],
    dot ? styles.dot : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} style={style}>
      {!dot && (label ?? children)}
    </span>
  )
}

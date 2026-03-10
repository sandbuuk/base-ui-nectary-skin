import type { TagProps } from './Tag.types'
import styles from './Tag.module.css'

export function Tag({
  text,
  color,
  size = 'm',
  children,
  className,
  style,
}: TagProps) {
  const classes = [styles.root, styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <span
      className={classes}
      style={{ ...style, ...(color ? { background: color, color: '#fff' } : {}) }}
    >
      {text ?? children}
    </span>
  )
}

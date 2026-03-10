import type { ColorSwatchProps } from './ColorSwatch.types'
import styles from './ColorSwatch.module.css'

export function ColorSwatch({
  color,
  size = 'm',
  selected,
  onClick,
  className,
  style,
}: ColorSwatchProps) {
  const classes = [
    styles.root,
    styles[size],
    selected ? styles.selected : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={classes}
      style={style}
      onClick={() => onClick?.(color)}
      aria-label={`Color ${color}`}
      aria-pressed={selected}
      type="button"
    >
      <span className={styles.inner} style={{ background: color }} />
    </button>
  )
}

import type { GridProps } from './Grid.types'
import styles from './Grid.module.css'

export function Grid({
  columns = 12,
  gap = 16,
  children,
  className,
  style,
}: GridProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')
  const gapValue = typeof gap === 'number' ? `${gap}px` : gap

  return (
    <div
      className={classes}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: gapValue,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

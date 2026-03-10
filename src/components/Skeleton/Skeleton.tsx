import type { SkeletonProps } from './Skeleton.types'
import styles from './Skeleton.module.css'

export function Skeleton({
  width = '100%',
  height = 16,
  circle,
  className,
  style,
}: SkeletonProps) {
  const classes = [
    styles.root,
    circle ? styles.circle : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const w = typeof width === 'number' ? `${width}px` : width
  const h = typeof height === 'number' ? `${height}px` : height

  return (
    <div
      className={classes}
      style={{
        width: circle ? h : w,
        height: h,
        ...style,
      }}
      aria-hidden
    />
  )
}

import type { TitleProps } from './Title.types'
import styles from './Title.module.css'

export function Title({
  level = 2,
  size = 'm',
  ellipsis,
  children,
  className,
  style,
}: TitleProps) {
  const classes = [
    styles.root,
    styles[size],
    ellipsis ? styles.ellipsis : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const Tag = `h${level}` as const

  return (
    <Tag className={classes} style={style}>
      {children}
    </Tag>
  )
}

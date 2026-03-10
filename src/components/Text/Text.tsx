import type { TextProps } from './Text.types'
import styles from './Text.module.css'

export function Text({
  size = 'm',
  emphasized,
  inline = true,
  ellipsis,
  children,
  className,
  style,
}: TextProps) {
  const classes = [
    styles.root,
    styles[size],
    emphasized ? styles.emphasized : undefined,
    ellipsis ? styles.ellipsis : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const Tag = inline ? 'span' : 'div'

  return (
    <Tag className={classes} style={style}>
      {children}
    </Tag>
  )
}

import type { ButtonGroupProps } from './ButtonGroup.types'
import styles from './ButtonGroup.module.css'

export function ButtonGroup({
  children,
  orientation = 'horizontal',
  className,
  style,
}: ButtonGroupProps) {
  const classes = [
    styles.root,
    orientation === 'vertical' ? styles.vertical : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div role="group" className={classes} style={style}>
      {children}
    </div>
  )
}

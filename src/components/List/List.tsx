import type { ListProps, ListItemProps } from './List.types'
import styles from './List.module.css'

function ListRoot({
  dividers = true,
  children,
  className,
  style,
}: ListProps) {
  const classes = [
    styles.root,
    dividers ? styles.dividers : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={style} role="list">
      {children}
    </div>
  )
}

function Item({
  onClick,
  disabled,
  selected,
  children,
  className,
  style,
}: ListItemProps) {
  const classes = [
    styles.item,
    onClick ? styles.itemClickable : undefined,
    selected ? styles.itemSelected : undefined,
    disabled ? styles.itemDisabled : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      style={style}
      role="listitem"
      data-disabled={disabled || undefined}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </div>
  )
}

export const List = Object.assign(ListRoot, { Item })

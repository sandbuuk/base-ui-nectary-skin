import type { CardProps } from './Card.types'
import styles from './Card.module.css'

export function Card({
  clickable,
  selected,
  disabled,
  onClick,
  children,
  className,
  style,
}: CardProps) {
  const isClickable = clickable || !!onClick
  const classes = [
    styles.root,
    isClickable ? styles.clickable : undefined,
    selected ? styles.selected : undefined,
    disabled ? styles.disabled : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      style={style}
      data-disabled={disabled || undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable && !disabled ? 0 : undefined}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={
        isClickable && !disabled
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>)
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  )
}

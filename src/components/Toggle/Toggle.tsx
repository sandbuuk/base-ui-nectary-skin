import { Toggle as BaseToggle } from '@base-ui-components/react/toggle'
import type { ToggleProps } from './Toggle.types'
import styles from './Toggle.module.css'

export function Toggle({
  pressed,
  defaultPressed,
  onPressedChange,
  disabled,
  value,
  'aria-label': ariaLabel,
  children,
  className,
  style,
}: ToggleProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <BaseToggle
      className={classes}
      style={style}
      pressed={pressed}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      disabled={disabled}
      value={value}
      aria-label={ariaLabel}
    >
      {children}
    </BaseToggle>
  )
}

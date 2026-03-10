import { Switch as BaseSwitch } from '@base-ui-components/react/switch'
import type { SwitchProps } from './Switch.types'
import styles from './Switch.module.css'

export function Switch({
  checked,
  defaultChecked,
  disabled,
  size = 'm',
  'aria-label': ariaLabel,
  id,
  name,
  onCheckedChange,
  className,
  style,
}: SwitchProps) {
  const classes = [
    styles.root,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <BaseSwitch.Root
      className={classes}
      style={style}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      aria-label={ariaLabel}
      id={id}
      name={name}
      onCheckedChange={onCheckedChange}
    >
      <BaseSwitch.Thumb className={styles.thumb} />
    </BaseSwitch.Root>
  )
}

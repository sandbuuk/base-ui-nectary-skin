import { ToggleGroup as BaseToggleGroup } from '@base-ui-components/react/toggle-group'
import type { ToggleGroupProps } from './ToggleGroup.types'
import styles from './ToggleGroup.module.css'

export function ToggleGroup({
  value,
  defaultValue,
  onValueChange,
  multiple = false,
  disabled,
  orientation = 'horizontal',
  loopFocus,
  children,
  className,
  style,
}: ToggleGroupProps) {
  const classes = [styles.root, styles[orientation], className]
    .filter(Boolean)
    .join(' ')

  return (
    <BaseToggleGroup
      className={classes}
      style={style}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      multiple={multiple}
      disabled={disabled}
      loopFocus={loopFocus}
    >
      {children}
    </BaseToggleGroup>
  )
}

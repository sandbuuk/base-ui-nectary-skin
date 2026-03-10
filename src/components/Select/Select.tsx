import { Select as BaseSelect } from '@base-ui-components/react/select'
import type {
  SelectRootProps,
  SelectTriggerProps,
  SelectPopupProps,
  SelectItemProps,
  SelectGroupProps,
  SelectGroupLabelProps,
} from './Select.types'
import styles from './Select.module.css'

function Root({ value, defaultValue, onValueChange, disabled, name, children }: SelectRootProps) {
  return (
    <BaseSelect.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      name={name}
    >
      {children}
    </BaseSelect.Root>
  )
}

function Trigger({ placeholder, className, style, 'aria-label': ariaLabel }: SelectTriggerProps) {
  const classes = [styles.trigger, className].filter(Boolean).join(' ')
  return (
    <BaseSelect.Trigger className={classes} style={style} aria-label={ariaLabel}>
      <BaseSelect.Value className={styles.triggerValue}>
        {(value: string | null) => value ?? placeholder ?? ''}
      </BaseSelect.Value>
      <BaseSelect.Icon className={styles.icon}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  )
}

function Popup({ side = 'bottom', align = 'start', children, className, style }: SelectPopupProps) {
  const classes = [styles.popup, className].filter(Boolean).join(' ')
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner side={side} align={align} sideOffset={4}>
        <BaseSelect.Popup className={classes} style={style}>
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  )
}

function Item({ value, children, disabled, className, style }: SelectItemProps) {
  const classes = [styles.option, className].filter(Boolean).join(' ')
  return (
    <BaseSelect.Item className={classes} style={style} value={value} disabled={disabled}>
      <BaseSelect.ItemIndicator className={styles.optionIndicator}>
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
          <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </BaseSelect.ItemIndicator>
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
    </BaseSelect.Item>
  )
}

function Group({ children, className, style }: SelectGroupProps) {
  return (
    <BaseSelect.Group className={className} style={style}>
      {children}
    </BaseSelect.Group>
  )
}

function GroupLabel({ children, className, style }: SelectGroupLabelProps) {
  const classes = [styles.groupLabel, className].filter(Boolean).join(' ')
  return (
    <BaseSelect.GroupLabel className={classes} style={style}>
      {children}
    </BaseSelect.GroupLabel>
  )
}

export const Select = {
  Root,
  Trigger,
  Popup,
  Item,
  Group,
  GroupLabel,
}

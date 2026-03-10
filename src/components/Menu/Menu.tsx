import { Menu as BaseMenu } from '@base-ui-components/react/menu'
import type {
  MenuRootProps,
  MenuTriggerProps,
  MenuPopupProps,
  MenuItemProps,
  MenuGroupProps,
  MenuSeparatorProps,
  MenuCheckboxItemProps,
  MenuRadioGroupProps,
  MenuRadioItemProps,
} from './Menu.types'
import styles from './Menu.module.css'

function Root({ open, defaultOpen, onOpenChange, children }: MenuRootProps) {
  return (
    <BaseMenu.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </BaseMenu.Root>
  )
}

function Trigger({ children, className, style }: MenuTriggerProps) {
  return (
    <BaseMenu.Trigger className={className} style={style}>
      {children}
    </BaseMenu.Trigger>
  )
}

function Popup({
  side = 'bottom',
  align = 'start',
  sideOffset = 4,
  children,
  className,
  style,
}: MenuPopupProps) {
  const classes = [styles.popup, className].filter(Boolean).join(' ')
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner side={side} align={align} sideOffset={sideOffset}>
        <BaseMenu.Popup className={classes} style={style}>
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}

function Item({ children, onClick, disabled, className, style }: MenuItemProps) {
  const classes = [styles.item, className].filter(Boolean).join(' ')
  return (
    <BaseMenu.Item className={classes} style={style} disabled={disabled} onClick={onClick}>
      {children}
    </BaseMenu.Item>
  )
}

function Group({ label, children, className, style }: MenuGroupProps) {
  return (
    <BaseMenu.Group className={className} style={style}>
      {label && <BaseMenu.GroupLabel className={styles.groupLabel}>{label}</BaseMenu.GroupLabel>}
      {children}
    </BaseMenu.Group>
  )
}

function Separator({ className, style }: MenuSeparatorProps) {
  const classes = [styles.separator, className].filter(Boolean).join(' ')
  return <BaseMenu.Separator className={classes} style={style} />
}

function CheckboxItem({
  checked,
  defaultChecked,
  onCheckedChange,
  children,
  disabled,
  className,
  style,
}: MenuCheckboxItemProps) {
  const classes = [styles.checkboxItem, className].filter(Boolean).join(' ')
  return (
    <BaseMenu.CheckboxItem
      className={classes}
      style={style}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
    >
      <BaseMenu.CheckboxItemIndicator className={styles.itemIndicator}>
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
          <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </BaseMenu.CheckboxItemIndicator>
      {children}
    </BaseMenu.CheckboxItem>
  )
}

function RadioGroup({ value, defaultValue, onValueChange, children }: MenuRadioGroupProps) {
  return (
    <BaseMenu.RadioGroup value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
      {children}
    </BaseMenu.RadioGroup>
  )
}

function RadioItem({ value, children, disabled, className, style }: MenuRadioItemProps) {
  const classes = [styles.radioItem, className].filter(Boolean).join(' ')
  return (
    <BaseMenu.RadioItem className={classes} style={style} value={value} disabled={disabled}>
      <BaseMenu.RadioItemIndicator className={styles.itemIndicator}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
          <circle cx="4" cy="4" r="4" fill="currentColor" />
        </svg>
      </BaseMenu.RadioItemIndicator>
      {children}
    </BaseMenu.RadioItem>
  )
}

export const Menu = {
  Root,
  Trigger,
  Popup,
  Item,
  Group,
  Separator,
  CheckboxItem,
  RadioGroup,
  RadioItem,
}

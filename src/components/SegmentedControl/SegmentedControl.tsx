import { useState, Children, isValidElement, cloneElement } from 'react'
import type { SegmentedControlProps, SegmentedControlItemProps } from './SegmentedControl.types'
import styles from './SegmentedControl.module.css'

function Item({
  value,
  children,
  disabled,
  className,
  style,
  ...internal
}: SegmentedControlItemProps & { _selected?: boolean; _onSelect?: (v: string) => void }) {
  const { _selected, _onSelect } = internal as { _selected?: boolean; _onSelect?: (v: string) => void }
  const classes = [
    styles.item,
    _selected ? styles.itemActive : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={classes}
      style={style}
      disabled={disabled}
      onClick={() => _onSelect?.(value)}
      role="tab"
      aria-selected={_selected}
      type="button"
    >
      {children}
    </button>
  )
}

function Root({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
  className,
  style,
}: SegmentedControlProps) {
  const [internal, setInternal] = useState(defaultValue ?? '')
  const isControlled = controlledValue !== undefined
  const currentValue = isControlled ? controlledValue : internal

  const handleSelect = (v: string) => {
    if (!isControlled) setInternal(v)
    onValueChange?.(v)
  }

  const classes = [styles.root, className].filter(Boolean).join(' ')

  const enhanced = Children.map(children, (child) => {
    if (!isValidElement<SegmentedControlItemProps>(child)) return child
    return cloneElement(child, {
      _selected: child.props.value === currentValue,
      _onSelect: handleSelect,
    } as Partial<SegmentedControlItemProps>)
  })

  return (
    <div className={classes} style={style} role="tablist">
      {enhanced}
    </div>
  )
}

export const SegmentedControl = Object.assign(Root, { Item })

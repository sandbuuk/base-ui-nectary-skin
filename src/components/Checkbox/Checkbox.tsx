import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox'
import type { CheckboxProps } from './Checkbox.types'
import styles from './Checkbox.module.css'

export function Checkbox({
  checked,
  indeterminate,
  defaultChecked,
  disabled,
  size = 'm',
  id,
  name,
  value,
  'aria-label': ariaLabel,
  label,
  onCheckedChange,
  className,
  style,
}: CheckboxProps) {
  const classes = [
    styles.root,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const indicatorSize = size === 's' ? 10 : 12

  return (
    <BaseCheckbox.Root
      className={classes}
      style={style}
      checked={checked}
      indeterminate={indeterminate}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      name={name}
      value={value}
      aria-label={ariaLabel}
      onCheckedChange={onCheckedChange}
    >
      <BaseCheckbox.Indicator className={styles.indicator}>
        {/* Check icon */}
        <svg
          className={styles.checkIcon}
          width={indicatorSize}
          height={indicatorSize}
          viewBox="0 0 12 10"
          fill="none"
          aria-hidden
        >
          <path
            d="M1 5l3.5 3.5L11 1"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Indeterminate icon */}
        <svg
          className={styles.indeterminateIcon}
          width={indicatorSize}
          height={indicatorSize}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 6h8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </BaseCheckbox.Indicator>
      {label && <span className={styles.label}>{label}</span>}
    </BaseCheckbox.Root>
  )
}

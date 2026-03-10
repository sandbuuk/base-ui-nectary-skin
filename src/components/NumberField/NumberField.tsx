import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field'
import type { NumberFieldProps } from './NumberField.types'
import styles from './NumberField.module.css'

export function NumberField({
  value,
  defaultValue,
  onValueChange,
  min,
  max,
  step = 1,
  disabled,
  readOnly,
  required,
  id,
  name,
  'aria-label': ariaLabel,
  className,
  style,
}: NumberFieldProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <BaseNumberField.Root
      className={classes}
      style={style}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      id={id}
      aria-label={ariaLabel}
    >
      <BaseNumberField.Group className={styles.group}>
        <BaseNumberField.Decrement className={styles.button} aria-label="Decrease">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </BaseNumberField.Decrement>
        <BaseNumberField.Input className={styles.input} name={name} />
        <BaseNumberField.Increment className={styles.button} aria-label="Increase">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  )
}

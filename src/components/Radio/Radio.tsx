import { Radio as BaseRadio } from '@base-ui-components/react/radio'
import { RadioGroup as BaseRadioGroup } from '@base-ui-components/react/radio-group'
import type { RadioProps, RadioGroupProps } from './Radio.types'
import styles from './Radio.module.css'

export function Radio({
  value,
  label,
  disabled,
  'aria-label': ariaLabel,
  className,
  style,
}: RadioProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <BaseRadio.Root
      className={classes}
      style={style}
      value={value}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <BaseRadio.Indicator className={styles.indicator}>
        <span className={styles.knob} />
      </BaseRadio.Indicator>
      {label && <span className={styles.label}>{label}</span>}
    </BaseRadio.Root>
  )
}

export function RadioGroup({
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  'aria-label': ariaLabel,
  children,
  className,
  style,
}: RadioGroupProps) {
  const classes = [styles.group, className].filter(Boolean).join(' ')

  return (
    <BaseRadioGroup
      className={classes}
      style={style}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      name={name}
      aria-label={ariaLabel}
    >
      {children}
    </BaseRadioGroup>
  )
}

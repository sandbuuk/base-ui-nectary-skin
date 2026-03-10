import type { InputProps } from './Input.types'
import styles from './Input.module.css'

export function Input({
  value,
  defaultValue,
  placeholder,
  name,
  id,
  type = 'text',
  size = 'm',
  disabled,
  readOnly,
  required,
  invalid,
  autoComplete,
  maxLength,
  startIcon,
  endIcon,
  'aria-label': ariaLabel,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  className,
  style,
}: InputProps) {
  const wrapperClasses = [styles.wrapper, styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={wrapperClasses}
      style={style}
      data-disabled={disabled || undefined}
      data-invalid={invalid || undefined}
    >
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      <input
        className={styles.input}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-label={ariaLabel}
        aria-invalid={invalid || undefined}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </div>
  )
}

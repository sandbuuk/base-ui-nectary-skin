import { Field } from '@base-ui-components/react/field'
import type { TextFieldProps } from './TextField.types'
import styles from './TextField.module.css'

export function TextField({
  value,
  defaultValue,
  placeholder,
  label,
  helperText,
  status = 'default',
  size = 'm',
  disabled = false,
  readOnly = false,
  required = false,
  id,
  name,
  type = 'text',
  startIcon,
  endIcon,
  onChange,
  onFocus,
  onBlur,
  className,
  style,
}: TextFieldProps) {
  const classes = [
    styles.root,
    styles[size],
    status === 'invalid' ? styles.invalid : undefined,
    disabled ? styles.disabled : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Field.Root
      className={classes}
      style={style}
      disabled={disabled}
      invalid={status === 'invalid'}
    >
      {label && (
        <Field.Label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </Field.Label>
      )}

      <div className={styles.inputWrapper}>
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}

        <Field.Control
          id={id}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          className={styles.input}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
      </div>

      {helperText && (
        <Field.Description className={styles.helperText}>
          {helperText}
        </Field.Description>
      )}
    </Field.Root>
  )
}

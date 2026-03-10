import { Field as BaseField } from '@base-ui-components/react/field'
import type { FieldRootProps } from './Field.types'
import styles from './Field.module.css'

export function Field({
  label,
  optionalText,
  helperText,
  errorText,
  disabled,
  invalid,
  children,
  className,
  style,
}: FieldRootProps) {
  const isInvalid = invalid || !!errorText
  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <BaseField.Root
      className={classes}
      style={style}
      disabled={disabled}
      invalid={isInvalid}
    >
      {(label || optionalText) && (
        <div className={styles.top}>
          {label && <BaseField.Label className={styles.label}>{label}</BaseField.Label>}
          {optionalText && <span className={styles.optional}>{optionalText}</span>}
        </div>
      )}

      {children}

      {(helperText || errorText) && (
        <div className={styles.bottom}>
          {errorText ? (
            <BaseField.Error className={styles.errorText}>
              {errorText}
            </BaseField.Error>
          ) : (
            <BaseField.Description className={styles.helperText}>
              {helperText}
            </BaseField.Description>
          )}
        </div>
      )}
    </BaseField.Root>
  )
}

import type { TextareaProps } from './Textarea.types'
import styles from './Textarea.module.css'

const resizeClassMap: Record<string, string> = {
  none: styles.resizeNone,
  vertical: styles.resizeVertical,
  horizontal: styles.resizeHorizontal,
  both: styles.resizeBoth,
}

export function Textarea({
  value,
  defaultValue,
  placeholder,
  name,
  id,
  rows = 3,
  disabled,
  readOnly,
  required,
  invalid,
  resize = 'vertical',
  'aria-label': ariaLabel,
  onChange,
  onFocus,
  onBlur,
  className,
  style,
}: TextareaProps) {
  const rootClasses = [styles.root, className].filter(Boolean).join(' ')
  const textareaClasses = [styles.textarea, resizeClassMap[resize]]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={rootClasses}
      style={style}
      data-disabled={disabled || undefined}
      data-invalid={invalid || undefined}
    >
      <div className={styles.wrapper}>
        <textarea
          className={textareaClasses}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          name={name}
          id={id}
          rows={rows}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-label={ariaLabel}
          aria-invalid={invalid || undefined}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  )
}

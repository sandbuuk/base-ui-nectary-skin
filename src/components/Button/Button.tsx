import { Button as BaseButton } from '@base-ui-components/react/button'
import type { ButtonProps } from './Button.types'
import styles from './Button.module.css'

const variantClassMap: Record<string, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  'subtle-primary': styles.subtlePrimary,
  'subtle-secondary': styles.subtleSecondary,
  'cta-primary': styles.ctaPrimary,
  'cta-secondary': styles.ctaSecondary,
  destructive: styles.destructive,
}

export function Button({
  variant = 'primary',
  size = 'm',
  text,
  children,
  disabled,
  toggled,
  formType = 'button',
  form,
  'aria-label': ariaLabel,
  onClick,
  onFocus,
  onBlur,
  className,
  style,
}: ButtonProps) {
  const classes = [
    styles.root,
    variantClassMap[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <BaseButton
      className={classes}
      style={style}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={toggled}
      data-disabled={disabled || undefined}
      data-toggled={toggled || undefined}
      type={formType}
      form={form}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {text ?? children}
    </BaseButton>
  )
}

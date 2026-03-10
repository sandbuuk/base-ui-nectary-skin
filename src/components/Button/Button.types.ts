export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'subtle-primary'
  | 'subtle-secondary'
  | 'cta-primary'
  | 'cta-secondary'
  | 'destructive'

export type ButtonSize = 'xs' | 's' | 'm' | 'l'

export type ButtonFormType = 'submit' | 'reset' | 'button'

export interface ButtonProps {
  /** Visual variant */
  variant?: ButtonVariant
  /** Size */
  size?: ButtonSize
  /** Text content (alternative to children) */
  text?: string
  /** Children content */
  children?: React.ReactNode
  /** Disabled state */
  disabled?: boolean
  /** Toggled/pressed state */
  toggled?: boolean
  /** HTML form type */
  formType?: ButtonFormType
  /** Associated form element id */
  form?: string
  /** Aria label */
  'aria-label'?: string
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

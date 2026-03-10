export type InputSize = 's' | 'm' | 'l'

export interface InputProps {
  /** Input value (controlled) */
  value?: string
  /** Default value (uncontrolled) */
  defaultValue?: string
  /** Placeholder text */
  placeholder?: string
  /** Input name */
  name?: string
  /** Input id */
  id?: string
  /** Input type */
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | 'search'
  /** Size variant */
  size?: InputSize
  /** Disabled state */
  disabled?: boolean
  /** Read-only state */
  readOnly?: boolean
  /** Required state */
  required?: boolean
  /** Invalid state */
  invalid?: boolean
  /** Autocomplete attribute */
  autoComplete?: string
  /** Max length */
  maxLength?: number
  /** Leading icon slot */
  startIcon?: React.ReactNode
  /** Trailing icon/action slot */
  endIcon?: React.ReactNode
  /** Aria label */
  'aria-label'?: string
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  /** Key down handler */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

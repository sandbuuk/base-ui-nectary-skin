export type TextFieldSize = 's' | 'm' | 'l'
export type TextFieldStatus = 'default' | 'invalid' | 'disabled'

export interface TextFieldProps {
  /** Input value */
  value?: string
  /** Default value (uncontrolled) */
  defaultValue?: string
  /** Placeholder text */
  placeholder?: string
  /** Label displayed above the input */
  label?: string
  /** Helper / error message displayed below */
  helperText?: string
  /** Visual status */
  status?: TextFieldStatus
  /** Size variant */
  size?: TextFieldSize
  /** Whether the field is disabled */
  disabled?: boolean
  /** Whether the field is read-only */
  readOnly?: boolean
  /** Whether the field is required */
  required?: boolean
  /** Input id (links label + input) */
  id?: string
  /** Input name */
  name?: string
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'
  /** Icon slot rendered at the start of the input */
  startIcon?: React.ReactNode
  /** Icon slot rendered at the end of the input */
  endIcon?: React.ReactNode
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  /** Additional CSS class for the root element */
  className?: string
  /** Additional inline style for the root element */
  style?: React.CSSProperties
}

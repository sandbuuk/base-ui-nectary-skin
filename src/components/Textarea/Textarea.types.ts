export interface TextareaProps {
  /** Textarea value (controlled) */
  value?: string
  /** Default value (uncontrolled) */
  defaultValue?: string
  /** Placeholder text */
  placeholder?: string
  /** Input name */
  name?: string
  /** Input id */
  id?: string
  /** Number of visible rows */
  rows?: number
  /** Disabled state */
  disabled?: boolean
  /** Read-only state */
  readOnly?: boolean
  /** Required state */
  required?: boolean
  /** Invalid state */
  invalid?: boolean
  /** Resize behavior */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  /** Aria label */
  'aria-label'?: string
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

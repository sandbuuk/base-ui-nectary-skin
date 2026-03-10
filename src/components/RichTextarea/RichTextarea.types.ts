export interface RichTextareaProps {
  /** HTML value */
  value?: string
  /** Value change handler (returns HTML string) */
  onValueChange?: (value: string) => void
  /** Placeholder text */
  placeholder?: string
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

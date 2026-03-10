export interface FieldRootProps {
  /** Label text */
  label?: string
  /** Optional indicator text */
  optionalText?: string
  /** Helper/description text */
  helperText?: string
  /** Error/invalid text (also sets invalid state) */
  errorText?: string
  /** Disabled state */
  disabled?: boolean
  /** Invalid state (auto-set if errorText provided) */
  invalid?: boolean
  /** Children (typically an Input or Textarea) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

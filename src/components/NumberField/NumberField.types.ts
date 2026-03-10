export interface NumberFieldProps {
  /** Controlled value */
  value?: number | null
  /** Default value (uncontrolled) */
  defaultValue?: number
  /** Value change handler */
  onValueChange?: (value: number | null, eventDetails: { event: Event; reason: string }) => void
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Step increment */
  step?: number
  /** Disabled state */
  disabled?: boolean
  /** Read-only state */
  readOnly?: boolean
  /** Required state */
  required?: boolean
  /** Input id */
  id?: string
  /** Input name */
  name?: string
  /** Aria label */
  'aria-label'?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

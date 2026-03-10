export interface TimePickerProps {
  /** Time value in "HH:MM" format */
  value?: string
  /** Default value */
  defaultValue?: string
  /** Value change handler */
  onValueChange?: (time: string) => void
  /** Step in minutes for dropdown options */
  step?: number
  /** Disabled state */
  disabled?: boolean
  /** Placeholder */
  placeholder?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

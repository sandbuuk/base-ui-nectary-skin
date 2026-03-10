export interface DatePickerProps {
  /** Selected date */
  value?: Date | null
  /** Default date */
  defaultValue?: Date
  /** Date change handler */
  onValueChange?: (date: Date | null) => void
  /** Minimum selectable date */
  min?: Date
  /** Maximum selectable date */
  max?: Date
  /** Placeholder text */
  placeholder?: string
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

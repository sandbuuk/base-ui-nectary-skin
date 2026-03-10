export interface SliderProps {
  /** Controlled value */
  value?: number
  /** Default value (uncontrolled) */
  defaultValue?: number
  /** Change handler */
  onValueChange?: (value: number) => void
  /** Committed change handler (on pointer up) */
  onValueCommitted?: (value: number) => void
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Step increment */
  step?: number
  /** Disabled state */
  disabled?: boolean
  /** Accessible label */
  'aria-label'?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

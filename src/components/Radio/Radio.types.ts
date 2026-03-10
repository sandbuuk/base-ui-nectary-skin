export interface RadioProps {
  /** The value of this radio option */
  value: string
  /** Label text rendered next to the radio */
  label?: string
  /** Disabled state */
  disabled?: boolean
  /** Accessible label */
  'aria-label'?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface RadioGroupProps {
  /** Controlled value */
  value?: string
  /** Default value (uncontrolled) */
  defaultValue?: string
  /** Change handler */
  onValueChange?: (value: unknown, eventDetails: any) => void
  /** Disabled all radios */
  disabled?: boolean
  /** Group name */
  name?: string
  /** Accessible label */
  'aria-label'?: string
  /** Children (Radio items) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

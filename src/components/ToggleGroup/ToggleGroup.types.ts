export interface ToggleGroupProps {
  /** Controlled value (array of pressed toggle values) */
  value?: string[]
  /** Default value (uncontrolled) */
  defaultValue?: string[]
  /** Value change handler */
  onValueChange?: (value: string[]) => void
  /** Allow multiple toggles pressed at once */
  multiple?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Orientation */
  orientation?: 'horizontal' | 'vertical'
  /** Loop keyboard focus */
  loopFocus?: boolean
  /** Children (Toggle components) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

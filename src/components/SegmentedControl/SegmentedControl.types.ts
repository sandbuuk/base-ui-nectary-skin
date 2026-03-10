export interface SegmentedControlProps {
  /** Controlled value */
  value?: string
  /** Default value */
  defaultValue?: string
  /** Value change handler */
  onValueChange?: (value: string) => void
  /** Children (SegmentedControl.Item elements) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface SegmentedControlItemProps {
  /** Item value */
  value: string
  /** Children content */
  children?: React.ReactNode
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

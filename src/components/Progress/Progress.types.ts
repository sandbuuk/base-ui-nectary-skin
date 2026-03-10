export interface ProgressProps {
  /** Current value (0-100). Omit for indeterminate. */
  value?: number
  /** Accessible label */
  'aria-label'?: string
  /** Label text displayed alongside the bar */
  label?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

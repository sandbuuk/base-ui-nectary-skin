export type SpinnerSize = 's' | 'm' | 'l'

export interface SpinnerProps {
  /** Spinner size */
  size?: SpinnerSize
  /** Aria label */
  'aria-label'?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

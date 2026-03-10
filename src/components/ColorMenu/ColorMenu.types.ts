export interface ColorMenuProps {
  /** Selected color value (hex) */
  value?: string
  /** Color change handler */
  onValueChange?: (color: string) => void
  /** Array of hex color strings */
  colors?: string[]
  /** Number of columns */
  columns?: number
  /** Aria label */
  'aria-label'?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

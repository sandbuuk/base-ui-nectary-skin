export interface GridProps {
  /** Number of columns */
  columns?: number
  /** Gap between items (px or CSS value) */
  gap?: number | string
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

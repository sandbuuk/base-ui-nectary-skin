export interface CodeTagProps {
  /** Code text (alternative to children) */
  text?: string
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

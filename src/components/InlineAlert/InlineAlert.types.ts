export type InlineAlertVariant = 'info' | 'warning' | 'error' | 'success'

export interface InlineAlertProps {
  /** Alert variant */
  variant?: InlineAlertVariant
  /** Optional caption/title */
  caption?: string
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

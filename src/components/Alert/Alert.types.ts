export type AlertVariant = 'info' | 'warning' | 'error' | 'success'

export interface AlertProps {
  /** Alert variant */
  variant?: AlertVariant
  /** Alert title */
  title?: string
  /** Alert content */
  children?: React.ReactNode
  /** Close handler (shows close button) */
  onClose?: () => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

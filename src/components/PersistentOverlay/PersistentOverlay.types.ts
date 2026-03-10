export type PersistentOverlayPosition = 'top' | 'bottom'

export interface PersistentOverlayProps {
  /** Controlled open state */
  open?: boolean
  /** Close handler */
  onClose?: () => void
  /** Position */
  position?: PersistentOverlayPosition
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

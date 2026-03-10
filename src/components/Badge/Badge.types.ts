export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info'
export type BadgeSize = 's' | 'm'

export interface BadgeProps {
  /** Text content of the badge */
  label?: string
  /** Children content */
  children?: React.ReactNode
  /** Visual variant */
  variant?: BadgeVariant
  /** Size variant */
  size?: BadgeSize
  /** Show as a dot (no label) */
  dot?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

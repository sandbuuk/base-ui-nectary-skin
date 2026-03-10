export type TextSize = 'm' | 's' | 'xs' | 'xxs'

export interface TextProps {
  /** Text size */
  size?: TextSize
  /** Bold/emphasized */
  emphasized?: boolean
  /** Render as inline span (default) vs block div */
  inline?: boolean
  /** Truncate with ellipsis */
  ellipsis?: boolean
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export type IconSize = 'xs' | 's' | 'm' | 'l'

export interface IconProps {
  /** Material Symbols icon name */
  name: string
  /** Icon size */
  size?: IconSize
  /** Icon color */
  color?: string
  /** Aria label (required for standalone icons) */
  'aria-label'?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

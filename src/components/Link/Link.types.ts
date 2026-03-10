export interface LinkProps {
  /** Link URL */
  href?: string
  /** External link (opens in new tab, shows icon) */
  external?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Standalone mode (block display, arrow icon) */
  standalone?: boolean
  /** Aria label */
  'aria-label'?: string
  /** Children content */
  children?: React.ReactNode
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

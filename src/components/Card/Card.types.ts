export interface CardProps {
  /** Makes the card clickable with hover/active states */
  clickable?: boolean
  /** Selected state */
  selected?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

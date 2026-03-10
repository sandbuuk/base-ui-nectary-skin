export interface ListProps {
  /** Show dividers between items */
  dividers?: boolean
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface ListItemProps {
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  /** Disabled state */
  disabled?: boolean
  /** Selected state */
  selected?: boolean
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

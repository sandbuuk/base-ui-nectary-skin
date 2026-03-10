export type SelectButtonSize = 's' | 'm' | 'l'

export interface SelectButtonProps {
  /** Button text */
  children?: React.ReactNode
  /** Placeholder when no text */
  placeholder?: string
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Disabled state */
  disabled?: boolean
  /** Invalid state */
  invalid?: boolean
  /** Size variant */
  size?: SelectButtonSize
  /** Aria label */
  'aria-label'?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

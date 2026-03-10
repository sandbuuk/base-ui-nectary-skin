export interface ChipProps {
  /** Chip text */
  text?: string
  /** Background color (hex) */
  color?: string
  /** Small variant */
  small?: boolean
  /** Delete handler (shows close icon) */
  onDelete?: () => void
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Disabled state */
  disabled?: boolean
  /** Children content (alternative to text) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

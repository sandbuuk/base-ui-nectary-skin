export type TagSize = 'm' | 's'

export interface TagProps {
  /** Tag text */
  text?: string
  /** Background color (hex or preset) */
  color?: string
  /** Tag size */
  size?: TagSize
  /** Children content (alternative to text) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export type AvatarSize = 's' | 'm' | 'l'
export type AvatarStatus = 'online' | 'busy' | 'away' | 'offline'

export interface AvatarProps {
  /** Image source URL */
  src?: string
  /** Alt text for image */
  alt?: string
  /** Name for generating initials (first letters of first two words) */
  name?: string
  /** Avatar size */
  size?: AvatarSize
  /** Online status indicator */
  status?: AvatarStatus
  /** Background color (hex) */
  color?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

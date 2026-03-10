export type TitleSize = 'xl' | 'l' | 'm' | 's' | 'xs'
export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface TitleProps {
  /** Semantic heading level (h1-h6) */
  level?: TitleLevel
  /** Visual size */
  size?: TitleSize
  /** Truncate with ellipsis */
  ellipsis?: boolean
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

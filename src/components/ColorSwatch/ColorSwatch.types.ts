export type ColorSwatchSize = 's' | 'm' | 'l'

export interface ColorSwatchProps {
  /** Color hex value */
  color: string
  /** Size */
  size?: ColorSwatchSize
  /** Selected state */
  selected?: boolean
  /** Click handler */
  onClick?: (color: string) => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

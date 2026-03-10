export type SeparatorOrientation = 'horizontal' | 'vertical'

export interface SeparatorProps {
  /** Orientation */
  orientation?: SeparatorOrientation
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

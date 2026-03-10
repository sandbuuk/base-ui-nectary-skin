export type FlagSize = 's' | 'm' | 'l'

export interface FlagProps {
  /** ISO 3166-1 alpha-2 country code (e.g. "US", "GB", "FR") */
  code: string
  /** Flag size */
  size?: FlagSize
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

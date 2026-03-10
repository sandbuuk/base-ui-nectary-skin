export interface PaginationProps {
  /** Current page (1-based) */
  value: number
  /** Total number of pages */
  max: number
  /** Page change handler */
  onValueChange?: (page: number) => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

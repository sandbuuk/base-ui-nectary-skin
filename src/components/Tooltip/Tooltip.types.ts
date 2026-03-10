export type TooltipSide = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps {
  /** Tooltip text */
  label: string
  /** Trigger element */
  children: React.ReactElement<Record<string, unknown>>
  /** Preferred side */
  side?: TooltipSide
  /** Delay before showing (ms) */
  delay?: number
  /** Additional CSS class on the popup */
  className?: string
  /** Additional inline style on the popup */
  style?: React.CSSProperties
}

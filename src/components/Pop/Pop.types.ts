export type PopSide = 'top' | 'bottom' | 'left' | 'right'
export type PopAlign = 'start' | 'center' | 'end'

export interface PopProps {
  /** Whether the pop is open */
  open?: boolean
  /** Open state change handler */
  onOpenChange?: (open: boolean) => void
  /** Preferred side */
  side?: PopSide
  /** Alignment along the side */
  align?: PopAlign
  /** Offset from anchor in px */
  sideOffset?: number
  /** Trigger element */
  children?: React.ReactNode
  /** Pop content */
  content?: React.ReactNode
  /** Additional CSS class for the positioner */
  className?: string
  /** Additional inline style for the positioner */
  style?: React.CSSProperties
}

export type PopoverSide = 'top' | 'right' | 'bottom' | 'left'
export type PopoverAlign = 'start' | 'center' | 'end'

export interface PopoverRootProps {
  /** Controlled open state */
  open?: boolean
  /** Default open (uncontrolled) */
  defaultOpen?: boolean
  /** Open change handler */
  onOpenChange?: (open: boolean) => void
  /** Children */
  children?: React.ReactNode
}

export interface PopoverTriggerProps {
  /** Trigger element */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface PopoverPopupProps {
  /** Preferred side */
  side?: PopoverSide
  /** Alignment along the side */
  align?: PopoverAlign
  /** Offset from trigger */
  sideOffset?: number
  /** Show arrow */
  showArrow?: boolean
  /** Popover content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface PopoverTitleProps {
  /** Title text */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface PopoverDescriptionProps {
  /** Description text */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface PopoverCloseProps {
  /** Close trigger element */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

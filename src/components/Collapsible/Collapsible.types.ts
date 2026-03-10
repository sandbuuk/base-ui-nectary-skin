export interface CollapsibleRootProps {
  /** Controlled open state */
  open?: boolean
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean
  /** Open change handler */
  onOpenChange?: (open: boolean) => void
  /** Disabled state */
  disabled?: boolean
  /** Children */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface CollapsibleTriggerProps {
  /** Children */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface CollapsiblePanelProps {
  /** Children */
  children?: React.ReactNode
  /** Keep mounted when closed */
  keepMounted?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

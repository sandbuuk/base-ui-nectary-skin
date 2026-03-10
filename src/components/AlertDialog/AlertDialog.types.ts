export interface AlertDialogRootProps {
  /** Controlled open state */
  open?: boolean
  /** Default open (uncontrolled) */
  defaultOpen?: boolean
  /** Open change handler */
  onOpenChange?: (open: boolean) => void
  /** Children */
  children?: React.ReactNode
}

export interface AlertDialogTriggerProps {
  /** Trigger element */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface AlertDialogPopupProps {
  /** Dialog content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface AlertDialogTitleProps {
  /** Title text */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface AlertDialogDescriptionProps {
  /** Description text */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface AlertDialogCloseProps {
  /** Close trigger element */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

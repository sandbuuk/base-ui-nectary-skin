export interface DialogRootProps {
  /** Controlled open state */
  open?: boolean
  /** Default open (uncontrolled) */
  defaultOpen?: boolean
  /** Open change handler */
  onOpenChange?: (open: boolean) => void
  /** Children */
  children?: React.ReactNode
}

export interface DialogTriggerProps {
  /** Trigger element */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface DialogPopupProps {
  /** Dialog content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface DialogTitleProps {
  /** Title text */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface DialogDescriptionProps {
  /** Description text */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface DialogCloseProps {
  /** Close trigger element */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

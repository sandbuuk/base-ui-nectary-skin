export interface SelectRootProps {
  /** Controlled value */
  value?: string
  /** Default value (uncontrolled) */
  defaultValue?: string
  /** Change handler */
  onValueChange?: (value: string | null, eventDetails: any) => void
  /** Disabled state */
  disabled?: boolean
  /** Name for form submission */
  name?: string
  /** Children */
  children?: React.ReactNode
}

export interface SelectTriggerProps {
  /** Placeholder text */
  placeholder?: string
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
  /** Accessible label */
  'aria-label'?: string
}

export interface SelectPopupProps {
  /** Preferred side */
  side?: 'top' | 'bottom'
  /** Alignment */
  align?: 'start' | 'center' | 'end'
  /** Popup content (SelectItem elements) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface SelectItemProps {
  /** Item value */
  value: string
  /** Display label */
  children?: React.ReactNode
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface SelectGroupProps {
  /** Group items */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface SelectGroupLabelProps {
  /** Label text */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

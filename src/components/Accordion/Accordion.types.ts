export interface AccordionProps {
  /** Which items are open (controlled) */
  value?: string[]
  /** Default open items (uncontrolled) */
  defaultValue?: string[]
  /** Change handler */
  onValueChange?: (value: string[]) => void
  /** Allow multiple items open */
  openMultiple?: boolean
  /** Children (AccordionItem elements) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface AccordionItemProps {
  /** Unique value for this item */
  value: string
  /** Title text */
  title: string
  /** Optional subtitle */
  subtitle?: string
  /** Disabled state */
  disabled?: boolean
  /** Panel content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

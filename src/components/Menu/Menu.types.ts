export type MenuSide = 'top' | 'right' | 'bottom' | 'left'
export type MenuAlign = 'start' | 'center' | 'end'

export interface MenuRootProps {
  /** Controlled open state */
  open?: boolean
  /** Default open (uncontrolled) */
  defaultOpen?: boolean
  /** Open change handler */
  onOpenChange?: (open: boolean) => void
  /** Children */
  children?: React.ReactNode
}

export interface MenuTriggerProps {
  /** Trigger element */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface MenuPopupProps {
  /** Preferred side */
  side?: MenuSide
  /** Alignment */
  align?: MenuAlign
  /** Offset from trigger */
  sideOffset?: number
  /** Menu content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface MenuItemProps {
  /** Item label */
  children?: React.ReactNode
  /** Click handler */
  onClick?: (e: React.MouseEvent) => void
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface MenuGroupProps {
  /** Group label */
  label?: string
  /** Group items */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface MenuSeparatorProps {
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface MenuCheckboxItemProps {
  /** Controlled checked state */
  checked?: boolean
  /** Default checked */
  defaultChecked?: boolean
  /** Change handler */
  onCheckedChange?: (checked: boolean) => void
  /** Item label */
  children?: React.ReactNode
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface MenuRadioGroupProps {
  /** Controlled value */
  value?: string
  /** Default value */
  defaultValue?: string
  /** Change handler */
  onValueChange?: (value: string) => void
  /** Children (MenuRadioItem) */
  children?: React.ReactNode
}

export interface MenuRadioItemProps {
  /** Radio value */
  value: string
  /** Item label */
  children?: React.ReactNode
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

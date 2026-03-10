export interface TabsProps {
  /** Controlled active tab value */
  value?: string
  /** Default tab value (uncontrolled) */
  defaultValue?: string
  /** Change handler */
  onValueChange?: (value: string) => void
  /** Children */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface TabListProps {
  /** Tab triggers */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface TabProps {
  /** Tab value (must match TabPanel value) */
  value: string
  /** Tab label */
  children?: React.ReactNode
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface TabPanelProps {
  /** Panel value (must match Tab value) */
  value: string
  /** Panel content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export type CheckboxSize = 's' | 'm'

export interface CheckboxProps {
  /** Controlled checked state */
  checked?: boolean
  /** Indeterminate state */
  indeterminate?: boolean
  /** Default checked (uncontrolled) */
  defaultChecked?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Size variant */
  size?: CheckboxSize
  /** Input id */
  id?: string
  /** Input name */
  name?: string
  /** Input value */
  value?: string
  /** Accessible label */
  'aria-label'?: string
  /** Label text rendered next to the checkbox */
  label?: string
  /** Change handler */
  onCheckedChange?: (checked: boolean) => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

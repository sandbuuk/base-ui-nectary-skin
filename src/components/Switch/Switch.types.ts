export type SwitchSize = 's' | 'm'

export interface SwitchProps {
  /** Controlled checked state */
  checked?: boolean
  /** Default checked (uncontrolled) */
  defaultChecked?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Size variant */
  size?: SwitchSize
  /** Accessible label */
  'aria-label'?: string
  /** Associates with a form label via id */
  id?: string
  /** Input name */
  name?: string
  /** Change handler */
  onCheckedChange?: (checked: boolean) => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface ToggleProps {
  /** Controlled pressed state */
  pressed?: boolean
  /** Default pressed state (uncontrolled) */
  defaultPressed?: boolean
  /** Pressed change handler */
  onPressedChange?: (pressed: boolean) => void
  /** Disabled state */
  disabled?: boolean
  /** Value for use in ToggleGroup */
  value?: string
  /** Aria label */
  'aria-label'?: string
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

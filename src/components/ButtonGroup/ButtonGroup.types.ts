export type ButtonGroupOrientation = 'horizontal' | 'vertical'

export interface ButtonGroupProps {
  children: React.ReactNode
  orientation?: ButtonGroupOrientation
  className?: string
  style?: React.CSSProperties
}

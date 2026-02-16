import type { FC } from 'react'
import '@nectary/components/button'

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'subtle-primary'
  | 'subtle-secondary'
  | 'cta-primary'
  | 'cta-secondary'
  | 'destructive'

export type ButtonSize = 's' | 'm' | 'l'

export interface ButtonProps {
  /** Button label (visible text). */
  text: string,
  /** Accessible name for the button. */
  'aria-label': string,
  /** Visual type. Default: primary. */
  type?: ButtonType,
  /** Size: s, m, l. Default: m. */
  size?: ButtonSize,
  disabled?: boolean,
  toggled?: boolean,
  /** Form association: button, submit, reset. Default: button. */
  formType?: 'button' | 'submit' | 'reset',
  onClick?: () => void,
}

export const Button: FC<ButtonProps> = ({
  text,
  'aria-label': ariaLabel,
  type = 'primary',
  size = 'm',
  disabled = false,
  toggled = false,
  formType = 'button',
  onClick,
}) => {
  return (
    <sinch-button
      text={text}
      aria-label={ariaLabel}
      type={type as 'primary' | 'secondary' | 'subtle-primary' | 'subtle-secondary' | 'cta-primary' | 'cta-secondary' | 'destructive'}
      size={size as 's' | 'm' | 'l'}
      disabled={disabled}
      toggled={toggled}
      form-type={formType}
      on-click={onClick}
    />
  )
}

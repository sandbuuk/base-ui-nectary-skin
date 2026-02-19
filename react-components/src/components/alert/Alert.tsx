import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { Icon } from '../icon'

/**
 * Alert component for displaying important messages to users.
 * Supports info, warning, and error types with appropriate icons and colors.
 */

const alertVariants = cva(
  // Base styles
  [
    'flex',
    'flex-row',
    'gap-2',
    'items-center',
    'py-2',
    'px-4',
    'w-full',
    'min-h-[48px]',
    'box-border',
  ],
  {
    variants: {
      type: {
        info: 'bg-[var(--sinch-comp-alert-color-info-default-background)]',
        warn: 'bg-[var(--sinch-comp-alert-color-warning-default-background)]',
        error: 'bg-[var(--sinch-comp-alert-color-error-default-background)]',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  }
)

const iconColorMap = {
  info: 'var(--sinch-comp-alert-color-info-default-icon)',
  warn: 'var(--sinch-comp-alert-color-warning-default-icon)',
  error: 'var(--sinch-comp-alert-color-error-default-icon)',
} as const

const textColorMap = {
  info: 'var(--sinch-comp-alert-color-info-default-text)',
  warn: 'var(--sinch-comp-alert-color-warning-default-text)',
  error: 'var(--sinch-comp-alert-color-error-default-text)',
} as const

const iconNameMap = {
  info: 'circle-info',
  warn: 'triangle-exclamation',
  error: 'octagon-exclamation',
} as const

export type AlertType = 'info' | 'warn' | 'error'

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
  VariantProps<typeof alertVariants> {
  /** Alert type determines the background color and icon */
  type?: AlertType,
  /** Text content to display in the alert */
  text?: string,
  /** Optional action slot (e.g., a button) */
  action?: React.ReactNode,
  /** Optional close slot (e.g., a close button) */
  close?: React.ReactNode,
  /** Content to display (alternative to text prop) */
  children?: React.ReactNode,
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, type = 'info', text, action, close, children, ...props }, ref) => {
    const iconName = iconNameMap[type]
    const iconColor = iconColorMap[type]
    const textColor = textColorMap[type]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ type }), className)}
        {...props}
      >
        <Icon
          name={iconName}
          iconsVersion="2"
          size="md"
          style={{ color: iconColor }}
        />
        <div
          className="flex flex-col gap-2 flex-1 min-w-0 font-[var(--sinch-comp-alert-font-body)]"
          style={{ color: textColor }}
        >
          {text ?? children}
        </div>
        {action}
        {close}
      </div>
    )
  }
)
Alert.displayName = 'Alert'

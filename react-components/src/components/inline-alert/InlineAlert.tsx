import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { Icon } from '../icon'

/**
 * InlineAlert component for displaying prominent messages within content.
 * Supports info, success, warning, and error types with appropriate icons and colors.
 * Unlike Alert, InlineAlert includes a caption/title and has a different layout.
 */

const inlineAlertVariants = cva(
  // Base styles for wrapper
  [
    'flex',
    'flex-row',
    'items-start',
    'p-4',
    'w-full',
    'box-border',
    'rounded-[var(--sinch-comp-inline-alert-shape-radius)]',
  ],
  {
    variants: {
      type: {
        info: 'bg-[var(--sinch-comp-inline-alert-color-info-default-background)]',
        success: 'bg-[var(--sinch-comp-inline-alert-color-success-default-background)]',
        warn: 'bg-[var(--sinch-comp-inline-alert-color-warning-default-background)]',
        error: 'bg-[var(--sinch-comp-inline-alert-color-error-default-background)]',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  }
)

const iconColorMap = {
  info: 'var(--sinch-comp-inline-alert-color-info-default-icon)',
  success: 'var(--sinch-comp-inline-alert-color-success-default-icon)',
  warn: 'var(--sinch-comp-inline-alert-color-warning-default-icon)',
  error: 'var(--sinch-comp-inline-alert-color-error-default-icon)',
} as const

const textColorMap = {
  info: 'var(--sinch-comp-inline-alert-color-info-default-text)',
  success: 'var(--sinch-comp-inline-alert-color-success-default-text)',
  warn: 'var(--sinch-comp-inline-alert-color-warning-default-text)',
  error: 'var(--sinch-comp-inline-alert-color-error-default-text)',
} as const

const defaultIconMap = {
  info: 'circle-info',
  success: 'circle-check',
  warn: 'triangle-exclamation',
  error: 'octagon-exclamation',
} as const

export type InlineAlertType = 'info' | 'success' | 'warn' | 'error'

export interface InlineAlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
  VariantProps<typeof inlineAlertVariants> {
  /** Alert type determines the background color, icon, and text color */
  type?: InlineAlertType
  /** Main text content to display */
  text?: string
  /** Optional caption/title displayed above the text */
  caption?: string
  /** Custom icon name (overrides default type icon) */
  icon?: string
  /** Optional action slot (e.g., buttons) */
  action?: React.ReactNode
  /** Optional close slot (e.g., a close button) */
  close?: React.ReactNode
  /** Content to display (alternative to text prop) */
  children?: React.ReactNode
}

export const InlineAlert = forwardRef<HTMLDivElement, InlineAlertProps>(
  (
    {
      className,
      type = 'info',
      text,
      caption,
      icon,
      action,
      close,
      children,
      ...props
    },
    ref
  ) => {
    const iconName = icon ?? defaultIconMap[type]
    const iconColor = iconColorMap[type]
    const textColor = textColorMap[type]

    return (
      <div
        ref={ref}
        role="alert"
        aria-atomic="true"
        aria-live="polite"
        className={cn(inlineAlertVariants({ type }), className)}
        {...props}
      >
        <Icon
          name={iconName}
          iconsVersion="2"
          size="md"
          style={{ color: iconColor }}
        />
        <div className="flex flex-col items-start ml-2 min-w-0 flex-1">
          {caption && (
            <div
              className="self-stretch font-[var(--sinch-comp-inline-alert-font-title)]"
              style={{ color: textColor }}
            >
              {caption}
            </div>
          )}
          <div
            className={cn(
              'flex flex-col gap-2 self-stretch font-[var(--sinch-comp-inline-alert-font-body)]',
              caption && 'mt-1'
            )}
            style={{ color: textColor }}
          >
            {text ?? children}
          </div>
          {action && (
            <div className="w-full flex mt-4 min-w-0 gap-4">
              {action}
            </div>
          )}
        </div>
        {close && (
          <div className="ml-4">
            {close}
          </div>
        )}
      </div>
    )
  }
)
InlineAlert.displayName = 'InlineAlert'

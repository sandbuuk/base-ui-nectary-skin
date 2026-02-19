import { forwardRef } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { Button, type ButtonProps, type ButtonVariant, type ButtonSize } from '../button'
import { useButtonGroupContext } from './ButtonGroup'

/**
 * Get the divider color CSS variable based on variant
 */
function getDividerColorVar(variant: ButtonVariant): string {
  const variantMap: Record<ButtonVariant, string> = {
    primary: 'var(--sinch-comp-button-color-primary-default-text-initial)',
    secondary: 'var(--sinch-comp-button-color-secondary-default-text-initial)',
    'subtle-primary': 'var(--sinch-comp-button-color-subtle-primary-default-text-initial)',
    'subtle-secondary': 'var(--sinch-comp-button-color-subtle-secondary-default-text-initial)',
    'cta-primary': 'var(--sinch-comp-button-color-cta-primary-default-text-initial)',
    'cta-secondary': 'var(--sinch-comp-button-color-cta-secondary-default-text-initial)',
    destructive: 'var(--sinch-comp-button-color-danger-default-text-initial)',
  }
  return variantMap[variant]
}

/**
 * Get the border radius CSS variable based on size
 */
function getBorderRadiusVar(size: ButtonSize): string {
  const sizeMap: Record<ButtonSize, string> = {
    xs: 'var(--sinch-comp-button-shape-radius-size-xs)',
    s: 'var(--sinch-comp-button-shape-radius-size-s)',
    m: 'var(--sinch-comp-button-shape-radius-size-m)',
    l: 'var(--sinch-comp-button-shape-radius-size-l)',
  }
  return sizeMap[size]
}

const buttonGroupItemVariants = cva(
  // Base styles - relative position for the divider
  'relative flex',
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface ButtonGroupItemProps
  extends Omit<ButtonProps, 'variant' | 'size'>,
    VariantProps<typeof buttonGroupItemVariants> {
  /**
   * Whether the button is in a toggled/pressed state
   */
  toggled?: boolean

  /**
   * Internal prop for position tracking (set by ButtonGroup)
   * @internal
   */
  _index?: number
}

/**
 * ButtonGroupItem component for use within a ButtonGroup.
 *
 * Automatically inherits size and variant from the parent ButtonGroup
 * and handles special styling for first/last items in the group.
 */
export const ButtonGroupItem = forwardRef<HTMLButtonElement, ButtonGroupItemProps>(
  ({ className, _index = 0, style, ...props }, ref) => {
    const context = useButtonGroupContext()

    // Use context values or fallback to defaults
    const size = context?.size ?? 'm'
    const variant = context?.variant ?? 'secondary'
    const itemCount = context?.itemCount ?? 1

    const isFirst = _index === 0
    const isLast = _index === itemCount - 1
    const isMiddle = !isFirst && !isLast

    // Get CSS variable values
    const borderRadius = getBorderRadiusVar(size)
    const dividerColor = getDividerColorVar(variant)

    // Build divider pseudo-element styles using CSS custom properties
    const wrapperStyle: React.CSSProperties = {
      ...style,
      // Set CSS custom properties for the divider
      '--button-group-item-divider-color': dividerColor,
    } as React.CSSProperties

    return (
      <div
        className={cn(
          buttonGroupItemVariants(),
          // Add divider pseudo-element for non-first items
          !isFirst && [
            'before:absolute before:left-0 before:top-[10%] before:bottom-[10%]',
            'before:w-px before:-translate-x-[0.5px]',
            'before:bg-[var(--button-group-item-divider-color)]',
            'before:opacity-30 before:pointer-events-none before:z-10',
          ],
          className
        )}
        style={wrapperStyle}
      >
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={cn(
            // Override border radius based on position
            '!rounded-none',
            isFirst && '!rounded-l-[var(--button-group-item-radius)]',
            isLast && '!rounded-r-[var(--button-group-item-radius)]',
            // Remove inner borders for connected appearance
            !isFirst && '!border-l-0',
            !isLast && '!border-r-0',
            isMiddle && '!border-l-0 !border-r-0',
          )}
          style={{
            '--button-group-item-radius': borderRadius,
          } as React.CSSProperties}
          {...props}
        />
      </div>
    )
  }
)
ButtonGroupItem.displayName = 'ButtonGroupItem'

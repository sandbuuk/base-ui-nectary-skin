import { forwardRef, useCallback, useState } from 'react'
import { cn } from '../../utils/cn'
import { Button } from '../button'
import { Icon } from '../icon'

export interface SegmentCollapseProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'defaultValue'> {
  /**
   * Whether the section is expanded (true) or collapsed (false)
   */
  value?: boolean,
  /**
   * Default value for uncontrolled mode
   */
  defaultValue?: boolean,
  /**
   * Callback fired when the toggle state changes
   */
  onChange?: (value: boolean) => void,
  /**
   * Accessible label for the toggle button
   */
  'aria-label': string,
  /**
   * Custom icon size override
   */
  iconSize?: string,
}

/**
 * SegmentCollapse is a toggle button used to expand/collapse sections.
 *
 * It displays a chevron icon that rotates based on the expanded state.
 * When collapsed (value=false), the chevron points down.
 * When expanded (value=true), the chevron points up.
 *
 * Supports both controlled and uncontrolled usage patterns.
 *
 * @example
 * ```tsx
 * // Controlled
 * const [expanded, setExpanded] = useState(false)
 * <SegmentCollapse
 *   value={expanded}
 *   onChange={setExpanded}
 *   aria-label="Toggle section"
 * />
 *
 * // Uncontrolled
 * <SegmentCollapse
 *   defaultValue={false}
 *   aria-label="Toggle section"
 * />
 * ```
 */
export const SegmentCollapse = forwardRef<HTMLButtonElement, SegmentCollapseProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = false,
      onChange,
      'aria-label': ariaLabel,
      iconSize = '32px',
      style,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState(defaultValue)

    // Determine if controlled
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    // Handle click to toggle value
    const handleClick = useCallback(() => {
      const newValue = !value
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    }, [value, isControlled, onChange])

    // Icon rotation: 180deg when collapsed (value=false), 0deg when expanded (value=true)
    const iconRotation = value ? 'rotate(0deg)' : 'rotate(180deg)'

    return (
      <Button
        ref={ref}
        role="checkbox"
        aria-checked={value}
        aria-label={ariaLabel}
        size="s"
        onClick={handleClick}
        className={cn('block', className)}
        style={{
          '--sinch-global-size-icon': iconSize,
          ...style,
        } as React.CSSProperties}
        icon={
          <Icon
            name="fa-chevron-down"
            iconsVersion="2"
            style={{
              transform: iconRotation,
              willChange: 'transform',
            }}
          />
        }
        {...props}
      />
    )
  }
)
SegmentCollapse.displayName = 'SegmentCollapse'

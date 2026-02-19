import { forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { Icon } from '../icon'
import { Tooltip, type TooltipOrientation, type TooltipTextAlign } from '../tooltip'

/**
 * HelpTooltip component displays a help icon (question mark in a circle)
 * that shows a tooltip with helpful information on hover.
 *
 * This is a convenience wrapper around Tooltip + Icon for common help text patterns.
 */

export interface HelpTooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Text content to display in the tooltip */
  text: string
  /** Orientation/position of the tooltip relative to the icon */
  orientation?: TooltipOrientation
  /** Text alignment within the tooltip */
  textAlign?: TooltipTextAlign
  /** Width override for the icon (in pixels) */
  width?: number
  /**
   * Controlled open state. When set, controls whether the tooltip is visible.
   * If undefined, the tooltip operates in uncontrolled mode (hover-based).
   */
  isOpen?: boolean
  /** Callback when the tooltip is shown */
  onShow?: () => void
  /** Callback when the tooltip is hidden */
  onHide?: () => void
}

export const HelpTooltip = forwardRef<HTMLDivElement, HelpTooltipProps>(
  (
    {
      className,
      text,
      orientation = 'top',
      textAlign,
      width,
      isOpen,
      onShow,
      onHide,
      style,
      ...props
    },
    ref
  ) => {
    // Compute icon size style
    const iconStyle = width !== undefined
      ? { '--sinch-global-size-icon': `${width}px` } as React.CSSProperties
      : { '--sinch-global-size-icon': '18px' } as React.CSSProperties

    return (
      <Tooltip
        ref={ref}
        text={text}
        orientation={orientation}
        textAlign={textAlign}
        type="fast"
        isOpen={isOpen}
        onShow={onShow}
        onHide={onHide}
        className={cn('inline-flex', className)}
        style={style}
        {...props}
      >
        <Icon
          name="circle-question"
          iconsVersion="2"
          className="text-foreground-muted cursor-help"
          style={iconStyle}
        />
      </Tooltip>
    )
  }
)
HelpTooltip.displayName = 'HelpTooltip'

import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * Badge component for displaying notification counts or status indicators.
 * Wraps content and positions a badge indicator in the corner.
 */

const badgeIndicatorVariants = cva(
  // Base styles for the badge indicator
  [
    'absolute',
    'pointer-events-none',
    'rounded-[var(--sinch-comp-badge-shape-radius)]',
    'p-px',
    'bg-[var(--sinch-comp-badge-color-border)]',
  ],
  {
    variants: {
      size: {
        l: 'left-[calc(100%-10px)] -top-2.5',
        m: 'left-[calc(100%-8px)] -top-2',
        s: 'left-[calc(100%-4px)] -top-1',
      },
      mode: {
        square: '',
        circle: '',
      },
    },
    compoundVariants: [
      // Circle mode adjusts positioning
      {
        mode: 'circle',
        size: 'l',
        className: 'left-[calc(85%-10px)] top-[calc(15%-10px)]',
      },
      {
        mode: 'circle',
        size: 'm',
        className: 'left-[calc(85%-7px)] top-[calc(15%-7px)]',
      },
      {
        mode: 'circle',
        size: 's',
        className: 'left-[calc(85%-4px)] top-[calc(15%-4px)]',
      },
    ],
    defaultVariants: {
      size: 'm',
      mode: 'square',
    },
  }
)

const badgeInnerVariants = cva(
  // Base styles for the inner badge circle
  [
    'box-border',
    'rounded-[var(--sinch-comp-badge-shape-radius)]',
    'bg-[var(--sinch-comp-badge-color-background)]',
    'text-[var(--sinch-comp-badge-color-text)]',
    'flex',
    'items-center',
    'justify-center',
  ],
  {
    variants: {
      size: {
        l: 'w-5 h-5',
        m: 'w-3.5 h-3.5',
        s: 'w-2 h-2',
      },
      long: {
        true: 'w-fit',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'l',
        long: true,
        className: 'px-[5px]',
      },
      {
        size: 'm',
        long: true,
        className: 'px-[3px]',
      },
      {
        size: 's',
        long: true,
        className: 'px-0',
      },
    ],
    defaultVariants: {
      size: 'm',
      long: false,
    },
  }
)

const badgeTextVariants = cva(
  // Base styles for the text
  [
    'block',
    'w-full',
    'h-full',
    'text-center',
  ],
  {
    variants: {
      size: {
        l: 'font-[var(--sinch-comp-badge-font-size-l)] leading-5',
        m: 'font-[var(--sinch-comp-badge-font-size-m)] leading-[14px]',
        s: 'hidden',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  }
)

export type BadgeSize = 'l' | 'm' | 's'
export type BadgeMode = 'square' | 'circle'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  Omit<VariantProps<typeof badgeIndicatorVariants>, 'mode'> {
  /** Text to display in the badge (e.g., notification count) */
  text?: string,
  /** Size of the badge indicator */
  size?: BadgeSize,
  /** Mode affects positioning - 'square' for rectangular content, 'circle' for circular content like avatars */
  mode?: BadgeMode,
  /** Whether to hide the badge indicator */
  hidden?: boolean,
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, text, size = 'm', mode = 'square', hidden = false, ...props }, ref) => {
    const isLong = text !== undefined && text.length > 1

    return (
      <div
        ref={ref}
        className={cn('relative inline-flex flex-col', className)}
        {...props}
      >
        {children}
        {!hidden && (
          <div className={cn(badgeIndicatorVariants({ size, mode }))}>
            <div className={cn(badgeInnerVariants({ size, long: isLong }))}>
              <span className={cn(badgeTextVariants({ size }))}>
                {text}
              </span>
            </div>
          </div>
        )}
      </div>
    )
  }
)
Badge.displayName = 'Badge'

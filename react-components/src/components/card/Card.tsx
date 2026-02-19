import { type VariantProps, cva } from 'class-variance-authority'
import { createContext, forwardRef, useContext } from 'react'
import { cn } from '../../utils/cn'
import { Text } from '../text'

/**
 * Card component for displaying content in a contained, styled box.
 * Supports clickable, selected, and disabled states.
 *
 * Based on sinch-card-v2, sinch-card-v2-title, and sinch-card-container web components.
 */

// Context for sharing card state with child components
interface CardContextValue {
  disabled?: boolean,
  selected?: boolean,
}

const CardContext = createContext<CardContextValue>({})

// =============================================================================
// CARD
// =============================================================================

const cardVariants = cva(
  // Base styles for the outer container
  'flex',
  {
    variants: {},
    defaultVariants: {},
  }
)

const cardInnerVariants = cva(
  // Base styles for the inner card
  [
    'flex',
    'flex-col',
    'flex-1',
    'overflow-hidden',
    'transition-all',
    'duration-150',
    'rounded-[var(--sinch-comp-card-v2-shape-radius)]',
    'border',
    'border-[var(--sinch-comp-card-v2-color-default-border-initial)]',
    'bg-[var(--sinch-comp-card-v2-color-default-background-initial)]',
    'shadow-[var(--sinch-comp-card-v2-shadow-initial)]',
  ],
  {
    variants: {
      clickable: {
        true: 'cursor-pointer',
        false: '',
      },
      selected: {
        true: [
          'bg-[var(--sinch-comp-card-v2-color-selected-background-initial)]',
          'border-[var(--sinch-comp-card-v2-color-selected-border-initial)]',
          'cursor-pointer',
        ],
        false: '',
      },
      disabled: {
        true: [
          'shadow-[var(--sinch-comp-card-v2-shadow-disabled)]',
          'bg-[var(--sinch-comp-card-v2-color-default-background-disabled)]',
          'border-[var(--sinch-comp-card-v2-color-default-border-disabled)]',
          'cursor-not-allowed',
        ],
        false: '',
      },
    },
    compoundVariants: [
      // Clickable + not disabled - hover states
      {
        clickable: true,
        disabled: false,
        className: [
          'hover:bg-[var(--sinch-comp-card-v2-color-default-background-hover)]',
          'hover:border-[var(--sinch-comp-card-v2-color-default-border-hover)]',
          'hover:shadow-[var(--sinch-comp-card-v2-shadow-hover)]',
          'active:bg-[var(--sinch-comp-card-v2-color-default-background-active)]',
          'active:border-[var(--sinch-comp-card-v2-color-default-border-active)]',
          'active:shadow-[var(--sinch-comp-card-v2-shadow-active)]',
        ],
      },
      // Selected + not disabled - hover/active states
      {
        selected: true,
        disabled: false,
        className: [
          'hover:bg-[var(--sinch-comp-card-v2-color-selected-background-hover)]',
          'hover:border-[var(--sinch-comp-card-v2-color-selected-border-hover)]',
          'active:bg-[var(--sinch-comp-card-v2-color-selected-background-active)]',
          'active:border-[var(--sinch-comp-card-v2-color-selected-border-active)]',
        ],
      },
      // Selected + disabled
      {
        selected: true,
        disabled: true,
        className: [
          'bg-[var(--sinch-comp-card-v2-color-selected-background-disabled)]',
          'border-[var(--sinch-comp-card-v2-color-selected-border-disabled)]',
        ],
      },
    ],
    defaultVariants: {
      clickable: false,
      selected: false,
      disabled: false,
    },
  }
)

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'title' | 'content'>,
  VariantProps<typeof cardInnerVariants> {
  /** Whether the card is disabled */
  disabled?: boolean,
  /** Whether the card is selected */
  selected?: boolean,
  /** Whether the card is clickable. Auto-set to true if onClick is provided */
  clickable?: boolean,
  /** Click event handler */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
  /** Media content (image, video, etc.) rendered at the top */
  media?: React.ReactNode,
  /** Title content (use CardTitle component) */
  title?: React.ReactNode,
  /** Main content area */
  content?: React.ReactNode,
  /** Footer content rendered at the bottom */
  footer?: React.ReactNode,
  /** Children are rendered in the content area if content prop is not provided */
  children?: React.ReactNode,
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      disabled = false,
      selected = false,
      clickable: clickableProp,
      onClick,
      media,
      title,
      content,
      footer,
      children,
      ...props
    },
    ref
  ) => {
    // Auto-detect clickable state based on onClick presence
    const clickable = clickableProp ?? Boolean(onClick)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) {
        e.stopPropagation()
        e.preventDefault()

        return
      }
      onClick?.(e)
    }

    // Determine role and tabIndex for accessibility
    const role = clickable ? 'button' : undefined
    const tabIndex = clickable ? 0 : undefined

    // Check if media slot has content
    const hasMedia = Boolean(media)
    const hasTitle = Boolean(title)
    const hasContent = Boolean(content) || Boolean(children)
    const hasFooter = Boolean(footer)

    return (
      <CardContext.Provider value={{ disabled, selected }}>
        <div
          ref={ref}
          className={cn(cardVariants(), className)}
          {...props}
        >
          <div
            role={role}
            tabIndex={tabIndex}
            className={cn(
              cardInnerVariants({ clickable, selected, disabled })
            )}
            onClick={clickable ? handleClick : undefined}
            onKeyDown={clickable ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleClick(e as unknown as React.MouseEvent<HTMLDivElement>)
              }
            } : undefined}
          >
            {/* Media slot */}
            {hasMedia && (
              <div className="block overflow-hidden">
                {media}
              </div>
            )}

            {/* Body */}
            <div className="flex flex-col flex-1 self-stretch gap-2 p-4">
              {/* Title slot */}
              {hasTitle && (
                <div className="flex flex-row items-center gap-2 self-stretch">
                  {title}
                </div>
              )}

              {/* Content slot */}
              {hasContent && (
                <div className="flex gap-[10px] self-stretch">
                  <div
                    className={cn(
                      'max-w-full font-[var(--sinch-comp-card-v2-font-description)]',
                      !disabled && !selected && 'text-[var(--sinch-comp-card-v2-color-default-description-initial)]',
                      selected && !disabled && 'text-[var(--sinch-comp-card-v2-color-selected-description-initial)]',
                      disabled && !selected && 'text-[var(--sinch-comp-card-v2-color-default-description-disabled)]',
                      disabled && selected && 'text-[var(--sinch-comp-card-v2-color-selected-description-disabled)]'
                    )}
                  >
                    {content ?? children}
                  </div>
                </div>
              )}

              {/* Footer slot */}
              {hasFooter && (
                <div className="flex flex-row items-center gap-4 self-stretch mt-auto">
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContext.Provider>
    )
  }
)
Card.displayName = 'Card'

// =============================================================================
// CARD TITLE
// =============================================================================

export type CardTitleOrientation = 'horizontal' | 'vertical'

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Title text */
  text?: string,
  /** Orientation relative to the icon slot */
  orientation?: CardTitleOrientation,
  /** Truncate text with ellipsis */
  ellipsis?: boolean,
  /** Icon to display */
  icon?: React.ReactNode,
  /** Children can be used instead of text prop */
  children?: React.ReactNode,
}

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  (
    {
      className,
      text,
      orientation = 'horizontal',
      ellipsis = false,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const { disabled, selected } = useContext(CardContext)

    const isVertical = orientation === 'vertical'

    // Determine icon color based on state
    const getIconColor = () => {
      if (disabled && selected) {
        return 'var(--sinch-comp-card-v2-color-selected-icon-disabled)'
      }
      if (disabled) {
        return 'var(--sinch-comp-card-v2-color-default-icon-disabled)'
      }
      if (selected) {
        return 'var(--sinch-comp-card-v2-color-selected-icon-initial)'
      }

      return 'var(--sinch-comp-card-v2-color-default-icon-initial)'
    }

    // Determine text color based on state
    const getTextColor = () => {
      if (disabled && selected) {
        return 'var(--sinch-comp-card-v2-color-selected-title-disabled)'
      }
      if (disabled) {
        return 'var(--sinch-comp-card-v2-color-default-title-disabled)'
      }

      return 'var(--sinch-comp-card-v2-color-default-title-initial)'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center',
          isVertical ? 'flex-col items-start' : 'flex-row',
          className
        )}
        {...props}
      >
        {icon && (
          <div
            className={cn(
              'flex',
              isVertical ? 'mb-2' : 'mr-2'
            )}
            style={{
              '--sinch-global-color-icon': getIconColor(),
              '--sinch-global-size-icon': 'var(--sinch-comp-card-v2-size-icon)',
            } as React.CSSProperties}
          >
            {icon}
          </div>
        )}
        <Text
          type="m"
          ellipsis={ellipsis}
          className="max-w-full font-[var(--sinch-comp-card-v2-font-title)]"
          style={{ color: getTextColor() }}
        >
          {text ?? children}
        </Text>
      </div>
    )
  }
)
CardTitle.displayName = 'CardTitle'

// =============================================================================
// CARD CONTAINER
// =============================================================================

export interface CardContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to display inside the container */
  children?: React.ReactNode,
}

export const CardContainer = forwardRef<HTMLDivElement, CardContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('block', className)}
        {...props}
      >
        <div
          className={cn(
            'h-full',
            'py-5',
            'box-border',
            'bg-[var(--sinch-comp-card-color-default-background-initial)]',
            'rounded-[var(--sinch-comp-card-shape-radius)]',
            'border',
            'border-[var(--sinch-comp-card-color-default-border-initial)]'
          )}
        >
          <div className="overflow-auto h-full box-border px-6 py-1">
            {children}
          </div>
        </div>
      </div>
    )
  }
)
CardContainer.displayName = 'CardContainer'

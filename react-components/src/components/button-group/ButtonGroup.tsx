import { Children, cloneElement, createContext, forwardRef, isValidElement, useContext } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import type { ButtonVariant, ButtonSize } from '../button'

/**
 * Context for ButtonGroup to pass size and variant to children
 */
export interface ButtonGroupContextValue {
  size: ButtonSize
  variant: ButtonVariant
  /** Total number of items in the group */
  itemCount: number
}

export const ButtonGroupContext = createContext<ButtonGroupContextValue | null>(null)

/**
 * Hook to access ButtonGroup context
 */
export function useButtonGroupContext() {
  return useContext(ButtonGroupContext)
}

const buttonGroupVariants = cva(
  // Base styles - flex container
  'inline-flex',
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  /**
   * Size of all buttons in the group
   * @default 'm'
   */
  size?: ButtonSize

  /**
   * Variant/style of all buttons in the group
   * @default 'secondary'
   */
  variant?: ButtonVariant
}

/**
 * ButtonGroup component that wraps ButtonGroupItem children.
 *
 * Provides size and variant context to child items, creating a
 * visually unified button group with connected styling.
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, children, size = 'm', variant = 'secondary', ...props }, ref) => {
    // Count the number of valid children
    const itemCount = Children.count(children)

    return (
      <ButtonGroupContext.Provider value={{ size, variant, itemCount }}>
        <div
          ref={ref}
          role="group"
          className={cn(buttonGroupVariants(), className)}
          {...props}
        >
          {Children.map(children, (child, index) => {
            if (isValidElement(child)) {
              // Pass position info to each child for border radius handling
              return cloneElement(child as React.ReactElement<{ _index?: number }>, {
                _index: index,
              })
            }
            return child
          })}
        </div>
      </ButtonGroupContext.Provider>
    )
  }
)
ButtonGroup.displayName = 'ButtonGroup'

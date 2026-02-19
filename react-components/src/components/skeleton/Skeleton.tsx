import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const skeletonVariants = cva(
  // Base styles
  'relative block overflow-hidden',
  {
    variants: {
      card: {
        true: [
          'p-4',
          'bg-surface-primary',
          'rounded-lg',
          'border',
          'border-border-subtle',
        ],
        false: '',
      },
    },
    defaultVariants: {
      card: false,
    },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof skeletonVariants> {
  /** Display as a card-like container with border and padding */
  card?: boolean,
}

/**
 * Skeleton container component that displays a shimmer animation over its children.
 * Use with SkeletonItem components to create loading placeholders.
 *
 * @example
 * ```tsx
 * <Skeleton>
 *   <SkeletonItem />
 *   <SkeletonItem size="sm" />
 * </Skeleton>
 * ```
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, card = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ card }), className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <div className="flex flex-col gap-4">
          {children}
        </div>
      </div>
    )
  }
)
Skeleton.displayName = 'Skeleton'

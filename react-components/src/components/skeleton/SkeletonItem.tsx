import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const skeletonItemVariants = cva(
  // Base styles - shimmer animation
  [
    'relative',
    'block',
    'overflow-hidden',
    'bg-border-subtle',
    // Shimmer overlay
    'before:absolute',
    'before:inset-0',
    'before:translate-x-[-100%]',
    'before:animate-[shimmer_2s_infinite]',
    'before:bg-gradient-to-r',
    'before:from-transparent',
    'before:via-surface-tertiary',
    'before:to-transparent',
  ],
  {
    variants: {
      size: {
        xs: 'h-xs rounded-xs',
        sm: 'h-sm rounded-sm',
        md: 'h-md rounded-md',
        lg: 'h-lg rounded-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export type SkeletonItemSize = 'xs' | 'sm' | 'md' | 'lg'

export interface SkeletonItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof skeletonItemVariants> {
  /** Size of the skeleton item */
  size?: SkeletonItemSize,
  /** Custom width (CSS value) */
  width?: string | number,
}

/**
 * Individual skeleton placeholder item with shimmer animation.
 * Use inside a Skeleton container for loading states.
 *
 * @example
 * ```tsx
 * <Skeleton>
 *   <SkeletonItem />
 *   <SkeletonItem size="sm" width="50%" />
 *   <SkeletonItem size="lg" />
 * </Skeleton>
 * ```
 */
export const SkeletonItem = forwardRef<HTMLDivElement, SkeletonItemProps>(
  ({ className, size = 'md', width, style, ...props }, ref) => {
    const customStyle = width !== undefined
      ? { ...style, width: typeof width === 'number' ? `${width}px` : width }
      : style

    return (
      <div
        ref={ref}
        className={cn(skeletonItemVariants({ size }), className)}
        style={customStyle}
        aria-hidden="true"
        {...props}
      />
    )
  }
)
SkeletonItem.displayName = 'SkeletonItem'

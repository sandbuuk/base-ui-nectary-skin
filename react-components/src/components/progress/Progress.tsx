import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useMemo } from 'react'
import { cn } from '../../utils/cn'

const progressVariants = cva(
  // Base styles
  'block',
  {
    variants: {},
    defaultVariants: {},
  }
)

const wrapperVariants = cva(
  'flex items-center h-6',
  {
    variants: {},
    defaultVariants: {},
  }
)

const trackVariants = cva(
  'h-2 rounded-full flex-1 min-w-0 bg-[var(--sinch-comp-progress-color-default-background-initial)]',
  {
    variants: {},
    defaultVariants: {},
  }
)

const barVariants = cva(
  'h-2 rounded-full bg-[var(--sinch-comp-progress-color-default-bar-initial)] transition-[width] duration-200',
  {
    variants: {},
    defaultVariants: {},
  }
)

const textVariants = cva(
  'w-[46px] text-sm text-[var(--sinch-comp-progress-color-default-text-initial)]',
  {
    variants: {
      visible: {
        true: 'block',
        false: 'hidden',
      },
    },
    defaultVariants: {
      visible: false,
    },
  }
)

export interface ProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>,
  VariantProps<typeof progressVariants> {
  /** Progress value between 0 and 100 */
  value?: number,
  /** Show percentage text */
  detailed?: boolean,
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, detailed = false, ...props }, ref) => {
    // Clamp value between 0 and 100
    const clampedValue = Math.min(100, Math.max(0, value))

    // Format percentage for display
    const formattedPercent = useMemo(() => {
      return Intl.NumberFormat(
        typeof navigator !== 'undefined' ? navigator.language : 'en-US',
        { style: 'percent' }
      ).format(clampedValue / 100)
    }, [clampedValue])

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(progressVariants(), className)}
        {...props}
      >
        <div className={wrapperVariants()}>
          <span className={textVariants({ visible: detailed })}>
            {formattedPercent}
          </span>
          <div className={trackVariants()}>
            <div
              className={barVariants()}
              style={{ width: `${clampedValue}%` }}
            />
          </div>
        </div>
      </div>
    )
  }
)
Progress.displayName = 'Progress'

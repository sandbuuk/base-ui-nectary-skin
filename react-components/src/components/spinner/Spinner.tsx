import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const spinnerVariants = cva(
  // Base styles
  'block animate-spin',
  {
    variants: {
      size: {
        s: 'w-4 h-4',
        m: 'w-6 h-6',
        l: 'w-[50px] h-[50px]',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  }
)

export interface SpinnerProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, 'children'>,
  VariantProps<typeof spinnerVariants> {
  /**
   * Spinner size
   * @default 'm'
   */
  size?: 's' | 'm' | 'l',
}

/**
 * Spinner component for indicating loading state.
 *
 * Uses an animated SVG circle with a foreground arc.
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 'm', ...props }, ref) => {
    // Size-specific SVG dimensions and attributes
    const sizeConfig = {
      s: {
        viewBox: '0 0 16 16',
        center: 8,
        radius: 6,
        strokeWidth: 2,
        path: 'M14 8a6 6 0 0 0-6-6',
      },
      m: {
        viewBox: '0 0 24 24',
        center: 12,
        radius: 9,
        strokeWidth: 4,
        path: 'M21 12a9 9 0 0 0-9-9',
      },
      l: {
        viewBox: '0 0 50 50',
        center: 25,
        radius: 22,
        strokeWidth: 6,
        path: 'M25 3a22 22 0 0 1 22 22',
      },
    }

    const config = sizeConfig[size ?? 'm']

    return (
      <svg
        ref={ref}
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label="Loading"
        fill="none"
        className={cn(spinnerVariants({ size }), className)}
        viewBox={config.viewBox}
        {...props}
      >
        {/* Background circle (30% opacity) */}
        <circle
          cx={config.center}
          cy={config.center}
          r={config.radius}
          strokeWidth={config.strokeWidth}
          className="stroke-current opacity-30"
        />
        {/* Foreground arc */}
        <path
          d={config.path}
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
          className="stroke-current"
        />
      </svg>
    )
  }
)
Spinner.displayName = 'Spinner'

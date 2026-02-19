import { forwardRef, useMemo } from 'react'
import { cn } from '../../utils/cn'

/** Valid column span values for each breakpoint */
export type GridSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Column span at S breakpoint (<768px). Max: 4 columns */
  s?: GridSpan,
  /** Column span at M breakpoint (768-1023px). Max: 8 columns */
  m?: GridSpan,
  /** Column span at L breakpoint (1024-1439px). Max: 12 columns */
  l?: GridSpan,
  /** Column span at XL breakpoint (1440px+). Max: 12 columns */
  xl?: GridSpan,
}

/**
 * A grid item that spans a specified number of columns at each breakpoint.
 *
 * Must be used inside a `Grid` component.
 *
 * @example
 * ```tsx
 * <Grid>
 *   <GridItem xl={6} l={6} m={4} s={4}>Half width</GridItem>
 *   <GridItem xl={6} l={6} m={4} s={4}>Half width</GridItem>
 * </Grid>
 * ```
 *
 * @example Full width card
 * ```tsx
 * <Grid>
 *   <GridItem xl={12} l={12} m={8} s={4}>
 *     Full width at all breakpoints
 *   </GridItem>
 * </Grid>
 * ```
 */
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, s, m, l, xl, children, ...props }, ref) => {
    // Build responsive column span classes
    const spanClasses = useMemo(() => {
      const classes: string[] = ['block']

      // XL breakpoint (default): span 12 if no xl specified
      if (xl !== undefined) {
        classes.push(`col-span-${xl}`)
      } else {
        classes.push('col-span-12')
      }

      // L breakpoint (max-width: 1439px): span 12 if no l specified
      if (l !== undefined) {
        classes.push(`max-[1439px]:col-span-${l}`)
      } else {
        classes.push('max-[1439px]:col-span-12')
      }

      // M breakpoint (max-width: 1023px): span 8 if no m specified
      if (m !== undefined) {
        classes.push(`max-[1023px]:col-span-${m}`)
      } else {
        classes.push('max-[1023px]:col-span-8')
      }

      // S breakpoint (max-width: 767px): span 4 if no s specified
      if (s !== undefined) {
        classes.push(`max-[767px]:col-span-${s}`)
      } else {
        classes.push('max-[767px]:col-span-4')
      }

      return classes.join(' ')
    }, [s, m, l, xl])

    return (
      <div
        ref={ref}
        className={cn(spanClasses, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GridItem.displayName = 'GridItem'

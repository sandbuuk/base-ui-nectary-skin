import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

// CSS variables for grid configuration at each breakpoint
export interface GridStyleOverrides {
  /** Number of columns at XL breakpoint (1440px+) */
  '--sinch-comp-grid-columns-xl'?: string,
  /** Gap between columns at XL breakpoint */
  '--sinch-comp-grid-gutter-xl'?: string,
  /** Outer margin at XL breakpoint */
  '--sinch-comp-grid-margin-xl'?: string,
  /** Number of columns at L breakpoint (1024-1439px) */
  '--sinch-comp-grid-columns-l'?: string,
  /** Gap between columns at L breakpoint */
  '--sinch-comp-grid-gutter-l'?: string,
  /** Outer margin at L breakpoint */
  '--sinch-comp-grid-margin-l'?: string,
  /** Number of columns at M breakpoint (768-1023px) */
  '--sinch-comp-grid-columns-m'?: string,
  /** Gap between columns at M breakpoint */
  '--sinch-comp-grid-gutter-m'?: string,
  /** Outer margin at M breakpoint */
  '--sinch-comp-grid-margin-m'?: string,
  /** Number of columns at S breakpoint (<768px) */
  '--sinch-comp-grid-columns-s'?: string,
  /** Gap between columns at S breakpoint */
  '--sinch-comp-grid-gutter-s'?: string,
  /** Outer margin at S breakpoint */
  '--sinch-comp-grid-margin-s'?: string,
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom style overrides including grid CSS variables */
  style?: React.CSSProperties & GridStyleOverrides,
}

// Base grid styles - uses CSS variables for responsive behavior
// The grid uses design tokens for columns, gutters, and margins at each breakpoint
const gridBaseStyles = [
  'grid',
  // XL breakpoint (default): 12 columns
  'grid-cols-[repeat(var(--sinch-comp-grid-columns-xl),minmax(0,1fr))]',
  'gap-[var(--sinch-comp-grid-gutter-xl)]',
  'p-[var(--sinch-comp-grid-margin-xl)]',
  // L breakpoint (max-width: 1439px)
  'max-[1439px]:grid-cols-[repeat(var(--sinch-comp-grid-columns-l),minmax(0,1fr))]',
  'max-[1439px]:gap-[var(--sinch-comp-grid-gutter-l)]',
  'max-[1439px]:p-[var(--sinch-comp-grid-margin-l)]',
  // M breakpoint (max-width: 1023px)
  'max-[1023px]:grid-cols-[repeat(var(--sinch-comp-grid-columns-m),minmax(0,1fr))]',
  'max-[1023px]:gap-[var(--sinch-comp-grid-gutter-m)]',
  'max-[1023px]:p-[var(--sinch-comp-grid-margin-m)]',
  // S breakpoint (max-width: 767px)
  'max-[767px]:grid-cols-[repeat(var(--sinch-comp-grid-columns-s),minmax(0,1fr))]',
  'max-[767px]:gap-[var(--sinch-comp-grid-gutter-s)]',
  'max-[767px]:p-[var(--sinch-comp-grid-margin-s)]',
].join(' ')

/**
 * A responsive CSS grid container that adapts to different screen sizes.
 *
 * The Grid component uses CSS variables for columns, gutters, and margins
 * at four breakpoints: XL (1440px+), L (1024-1439px), M (768-1023px), S (<768px).
 *
 * Default values are provided by the design system's CSS variables.
 * Override them via the `style` prop to customize the grid layout.
 *
 * @example
 * ```tsx
 * <Grid>
 *   <GridItem xl={6} l={6} m={4} s={4}>Left</GridItem>
 *   <GridItem xl={6} l={6} m={4} s={4}>Right</GridItem>
 * </Grid>
 * ```
 *
 * @example Custom column configuration
 * ```tsx
 * <Grid style={{ '--sinch-comp-grid-columns-xl': '6' }}>
 *   <GridItem xl={3}>Item</GridItem>
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(gridBaseStyles, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Grid.displayName = 'Grid'

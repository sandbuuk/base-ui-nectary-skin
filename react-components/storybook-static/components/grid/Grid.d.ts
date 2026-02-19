export interface GridStyleOverrides {
    /** Number of columns at XL breakpoint (1440px+) */
    '--sinch-comp-grid-columns-xl'?: string;
    /** Gap between columns at XL breakpoint */
    '--sinch-comp-grid-gutter-xl'?: string;
    /** Outer margin at XL breakpoint */
    '--sinch-comp-grid-margin-xl'?: string;
    /** Number of columns at L breakpoint (1024-1439px) */
    '--sinch-comp-grid-columns-l'?: string;
    /** Gap between columns at L breakpoint */
    '--sinch-comp-grid-gutter-l'?: string;
    /** Outer margin at L breakpoint */
    '--sinch-comp-grid-margin-l'?: string;
    /** Number of columns at M breakpoint (768-1023px) */
    '--sinch-comp-grid-columns-m'?: string;
    /** Gap between columns at M breakpoint */
    '--sinch-comp-grid-gutter-m'?: string;
    /** Outer margin at M breakpoint */
    '--sinch-comp-grid-margin-m'?: string;
    /** Number of columns at S breakpoint (<768px) */
    '--sinch-comp-grid-columns-s'?: string;
    /** Gap between columns at S breakpoint */
    '--sinch-comp-grid-gutter-s'?: string;
    /** Outer margin at S breakpoint */
    '--sinch-comp-grid-margin-s'?: string;
}
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Custom style overrides including grid CSS variables */
    style?: React.CSSProperties & GridStyleOverrides;
}
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
export declare const Grid: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<GridProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;

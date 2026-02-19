/** Valid column span values for each breakpoint */
export type GridSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Column span at S breakpoint (<768px). Max: 4 columns */
    s?: GridSpan;
    /** Column span at M breakpoint (768-1023px). Max: 8 columns */
    m?: GridSpan;
    /** Column span at L breakpoint (1024-1439px). Max: 12 columns */
    l?: GridSpan;
    /** Column span at XL breakpoint (1440px+). Max: 12 columns */
    xl?: GridSpan;
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
export declare const GridItem: import('react').ForwardRefExoticComponent<GridItemProps & import('react').RefAttributes<HTMLDivElement>>;

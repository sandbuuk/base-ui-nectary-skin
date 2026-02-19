export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
    /**
     * Current page (1-indexed)
     */
    value: number;
    /**
     * Total number of pages
     */
    max: number;
    /**
     * Callback fired when the page changes
     */
    onChange?: (value: number) => void;
    /**
     * Aria label for the navigation element
     * @default 'Pagination'
     */
    ariaLabel?: string;
}
/**
 * Pagination component for navigating between pages.
 *
 * Displays a row of page buttons with ellipsis when there are many pages.
 * Supports keyboard navigation and screen readers.
 *
 * @example
 * ```tsx
 * <Pagination value={1} max={10} onChange={(page) => setPage(page)} />
 * ```
 */
export declare const Pagination: import('react').ForwardRefExoticComponent<PaginationProps & import('react').RefAttributes<HTMLElement>>;

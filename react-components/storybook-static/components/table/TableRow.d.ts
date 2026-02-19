import { VariantProps } from 'class-variance-authority';

declare const tableRowVariants: (props?: ({
    selected?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement>, VariantProps<typeof tableRowVariants> {
    /** Children elements (typically TableCell or TableHeadCell components) */
    children?: React.ReactNode;
    /** Whether the row is sticky (header cells will be position:sticky) */
    sticky?: boolean;
    /** Whether the row is selected */
    selected?: boolean;
}
/**
 * Table row component that wraps table cells.
 * Use inside TableHead or TableBody components.
 *
 * @example
 * ```tsx
 * <TableRow>
 *   <TableCell>John Doe</TableCell>
 *   <TableCell>john@example.com</TableCell>
 * </TableRow>
 * ```
 *
 * @example Selected row
 * ```tsx
 * <TableRow selected>
 *   <TableCell>John Doe</TableCell>
 *   <TableCell>john@example.com</TableCell>
 * </TableRow>
 * ```
 *
 * @example Sticky header row
 * ```tsx
 * <TableHead>
 *   <TableRow sticky>
 *     <TableHeadCell text="Name" />
 *   </TableRow>
 * </TableHead>
 * ```
 */
export declare const TableRow: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TableRowProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLTableRowElement>>;
export {};

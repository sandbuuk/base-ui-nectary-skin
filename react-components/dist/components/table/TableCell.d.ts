import { VariantProps } from 'class-variance-authority';

export type TableCellAlignType = 'start' | 'center' | 'end';
declare const tableCellVariants: (props?: ({
    align?: "end" | "start" | "center" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TableCellProps extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, 'align'>, VariantProps<typeof tableCellVariants> {
    /** Alignment of the cell content */
    align?: TableCellAlignType;
}
/**
 * Table cell component for table data.
 * Use inside TableRow within TableBody.
 *
 * @example Basic usage
 * ```tsx
 * <TableCell>John Doe</TableCell>
 * ```
 *
 * @example With alignment
 * ```tsx
 * <TableCell align="end">$99.99</TableCell>
 * ```
 *
 * @example With complex content
 * ```tsx
 * <TableCell>
 *   <div className="flex items-center gap-2">
 *     <Avatar name="John Doe" />
 *     <span>John Doe</span>
 *   </div>
 * </TableCell>
 * ```
 */
export declare const TableCell: import('react').ForwardRefExoticComponent<TableCellProps & import('react').RefAttributes<HTMLTableCellElement>>;
export {};

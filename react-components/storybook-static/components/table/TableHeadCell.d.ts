import { VariantProps } from 'class-variance-authority';

export type TableAlignType = 'start' | 'center' | 'end';
declare const tableHeadCellVariants: (props?: ({
    align?: "end" | "start" | "center" | null | undefined;
    fit?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TableHeadCellProps extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, 'align'>, VariantProps<typeof tableHeadCellVariants> {
    /** Text content for the header cell */
    text?: string;
    /** Alignment of the cell content */
    align?: TableAlignType;
    /** Whether the cell should shrink to fit its content */
    fit?: boolean;
    /** Content to render on the left side (before text) */
    leftContent?: React.ReactNode;
    /** Content to render on the right side (after text) */
    rightContent?: React.ReactNode;
    /** Checkbox content to render before everything */
    checkboxContent?: React.ReactNode;
    /** Tooltip content to render after text */
    tooltipContent?: React.ReactNode;
}
/**
 * Table header cell component for column headers.
 * Use inside TableRow within TableHead.
 *
 * @example Basic usage
 * ```tsx
 * <TableHeadCell text="Name" />
 * ```
 *
 * @example With alignment
 * ```tsx
 * <TableHeadCell text="Price" align="end" />
 * ```
 *
 * @example With fit (shrink to content)
 * ```tsx
 * <TableHeadCell text="ID" fit />
 * ```
 *
 * @example With children instead of text
 * ```tsx
 * <TableHeadCell>
 *   <Icon name="user" />
 *   User
 * </TableHeadCell>
 * ```
 */
export declare const TableHeadCell: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TableHeadCellProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLTableCellElement>>;
export {};

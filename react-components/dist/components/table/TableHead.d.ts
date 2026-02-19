export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    /** Children elements (typically TableRow components) */
    children?: React.ReactNode;
}
/**
 * Table head section component that wraps table header rows.
 * Use inside Table and contains TableRow with TableHeadCell components.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableHeadCell text="Name" />
 *       <TableHeadCell text="Email" />
 *     </TableRow>
 *   </TableHead>
 * </Table>
 * ```
 */
export declare const TableHead: import('react').ForwardRefExoticComponent<TableHeadProps & import('react').RefAttributes<HTMLTableSectionElement>>;

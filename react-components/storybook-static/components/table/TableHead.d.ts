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
export declare const TableHead: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TableHeadProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLTableSectionElement>>;

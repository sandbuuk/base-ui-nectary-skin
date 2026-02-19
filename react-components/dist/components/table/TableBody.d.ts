export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    /** Children elements (typically TableRow components) */
    children?: React.ReactNode;
}
/**
 * Table body section component that wraps table body rows.
 * Use inside Table and contains TableRow with TableCell components.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export declare const TableBody: import('react').ForwardRefExoticComponent<TableBodyProps & import('react').RefAttributes<HTMLTableSectionElement>>;

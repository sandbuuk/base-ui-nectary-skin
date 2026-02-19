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
export declare const TableBody: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TableBodyProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLTableSectionElement>>;

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    /** Children elements (typically TableHead and TableBody components) */
    children?: React.ReactNode;
}
/**
 * Table container component that provides semantic table structure.
 * Use with TableHead, TableBody, TableRow, TableHeadCell, and TableCell components.
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
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export declare const Table: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TableProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLTableElement>>;

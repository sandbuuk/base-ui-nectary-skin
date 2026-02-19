import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** Children elements (typically TableHead and TableBody components) */
  children?: React.ReactNode,
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
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={cn(
          // Base styles matching web component
          'table-auto',
          className
        )}
        {...props}
      >
        {children}
      </table>
    )
  }
)
Table.displayName = 'Table'

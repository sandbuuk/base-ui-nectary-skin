import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /** Children elements (typically TableRow components) */
  children?: React.ReactNode,
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
export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={cn(className)}
        {...props}
      >
        {children}
      </thead>
    )
  }
)
TableHead.displayName = 'TableHead'

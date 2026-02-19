import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const tableRowVariants = cva(
  // Base styles
  'bg-[var(--sinch-comp-table-color-row-default-background-initial)] hover:bg-[var(--sinch-comp-table-color-row-default-background-hover)]',
  {
    variants: {
      selected: {
        true: 'bg-[var(--sinch-comp-table-color-row-checked-background-initial)]',
        false: '',
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
)

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {
  /** Children elements (typically TableCell or TableHeadCell components) */
  children?: React.ReactNode,
  /** Whether the row is sticky (header cells will be position:sticky) */
  sticky?: boolean,
  /** Whether the row is selected */
  selected?: boolean,
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
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, sticky, selected, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        data-sticky={sticky || undefined}
        data-selected={selected || undefined}
        className={cn(
          tableRowVariants({ selected }),
          // Apply last:border-b-0 on child cells via parent data attribute
          '[&:last-child_td]:border-b-0',
          // Sticky styles for header cells within this row
          sticky && '[&_th]:sticky [&_th]:top-0 [&_th]:z-10 [&_th]:bg-[var(--sinch-comp-table-color-row-default-background-sticky)]',
          className
        )}
        {...props}
      >
        {children}
      </tr>
    )
  }
)
TableRow.displayName = 'TableRow'

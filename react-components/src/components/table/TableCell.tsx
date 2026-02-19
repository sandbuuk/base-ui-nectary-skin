import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

export type TableCellAlignType = 'start' | 'center' | 'end'

const tableCellVariants = cva(
  // Base styles
  [
    'border-b border-[var(--sinch-comp-table-color-cell-default-border-initial)]',
    'align-top',
  ],
  {
    variants: {
      align: {
        start: '',
        center: '',
        end: '',
      },
    },
    defaultVariants: {
      align: 'start',
    },
  }
)

const wrapperVariants = cva(
  // Base wrapper styles
  [
    'flex',
    'flex-col',
    'justify-center',
    'min-h-[48px]',
    'box-border',
    'p-2',
  ],
  {
    variants: {
      align: {
        start: 'text-start items-start',
        center: 'text-center items-center',
        end: 'text-end items-end',
      },
    },
    defaultVariants: {
      align: 'start',
    },
  }
)

export interface TableCellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, 'align'>,
    VariantProps<typeof tableCellVariants> {
  /** Alignment of the cell content */
  align?: TableCellAlignType,
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
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, align = 'start', ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cn(tableCellVariants({ align }), className)}
        {...props}
      >
        <div className={cn(wrapperVariants({ align }))}>
          {children}
        </div>
      </td>
    )
  }
)
TableCell.displayName = 'TableCell'

import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

export type TableAlignType = 'start' | 'center' | 'end'

const tableHeadCellVariants = cva(
  // Base styles
  [
    'border-b border-[var(--sinch-comp-table-color-head-cell-default-border-initial)]',
    'align-middle',
    'text-[var(--sinch-comp-table-color-head-cell-default-text-initial)]',
  ],
  {
    variants: {
      align: {
        start: '',
        center: '',
        end: '',
      },
      fit: {
        // 1px instead of 0 because of Safari
        true: 'w-px',
        false: '',
      },
    },
    defaultVariants: {
      align: 'start',
      fit: false,
    },
  }
)

const wrapperVariants = cva(
  // Base wrapper styles
  [
    'relative',
    'flex',
    'items-center',
    'gap-2',
    'w-full',
    'h-full',
    'p-2',
    'box-border',
  ],
  {
    variants: {
      align: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
      },
    },
    defaultVariants: {
      align: 'start',
    },
  }
)

export interface TableHeadCellProps
  extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, 'align'>,
    VariantProps<typeof tableHeadCellVariants> {
  /** Text content for the header cell */
  text?: string,
  /** Alignment of the cell content */
  align?: TableAlignType,
  /** Whether the cell should shrink to fit its content */
  fit?: boolean,
  /** Content to render on the left side (before text) */
  leftContent?: React.ReactNode,
  /** Content to render on the right side (after text) */
  rightContent?: React.ReactNode,
  /** Checkbox content to render before everything */
  checkboxContent?: React.ReactNode,
  /** Tooltip content to render after text */
  tooltipContent?: React.ReactNode,
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
export const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  ({
    className,
    children,
    text,
    align = 'start',
    fit,
    leftContent,
    rightContent,
    checkboxContent,
    tooltipContent,
    ...props
  }, ref) => {
    const hasText = text !== undefined && text !== ''
    const hasChildren = children !== undefined

    return (
      <th
        ref={ref}
        scope="col"
        className={cn(tableHeadCellVariants({ align, fit }), className)}
        {...props}
      >
        <div className={cn(wrapperVariants({ align }))}>
          {checkboxContent}
          {leftContent}
          {hasText && (
            <span className="min-w-0 shrink text-[var(--sinch-comp-table-color-head-cell-default-text-initial)]">
              {text}
            </span>
          )}
          {hasChildren && !hasText && children}
          {tooltipContent}
          {rightContent}
        </div>
      </th>
    )
  }
)
TableHeadCell.displayName = 'TableHeadCell'

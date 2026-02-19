import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to display inside the list item */
  children?: React.ReactNode,
}

/**
 * Individual list item component with hover state and border separator.
 * Use inside a List container for consistent styling.
 *
 * @example
 * ```tsx
 * <List>
 *   <ListItem>First item</ListItem>
 *   <ListItem>Second item</ListItem>
 *   <ListItem>Third item</ListItem>
 * </List>
 * ```
 */
export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="listitem"
        className={cn(
          // Base styles
          'block outline-none',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'box-border h-full w-full overflow-hidden',
            'py-2',
            // Background colors using component tokens
            'bg-[var(--sinch-comp-list-color-default-background-initial)]',
            'hover:bg-[var(--sinch-comp-list-color-default-background-hover)]',
            // Border - applied to all items, last:border-b-0 removes from last
            'border-b border-[var(--sinch-comp-list-color-default-border-initial)]',
            'last:border-b-0'
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)
ListItem.displayName = 'ListItem'

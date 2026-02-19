import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Children elements (typically ListItem components) */
  children?: React.ReactNode,
}

/**
 * List container component that displays a vertical list of items.
 * Use with ListItem components to create lists with consistent styling.
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
export const List = forwardRef<HTMLDivElement, ListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="list"
        className={cn(
          // Base styles
          'block h-full',
          className
        )}
        {...props}
      >
        <div className="flex h-full w-full flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    )
  }
)
List.displayName = 'List'

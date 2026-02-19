export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content to display inside the list item */
    children?: React.ReactNode;
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
export declare const ListItem: import('react').ForwardRefExoticComponent<ListItemProps & import('react').RefAttributes<HTMLDivElement>>;

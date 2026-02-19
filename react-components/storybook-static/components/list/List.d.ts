export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Children elements (typically ListItem components) */
    children?: React.ReactNode;
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
export declare const List: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<ListProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;

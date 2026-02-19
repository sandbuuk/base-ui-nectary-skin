interface ActionMenuContextValue {
    selectedIndex: number | null;
    setSelectedIndex: (index: number | null) => void;
    registerOption: (index: number, disabled: boolean, onClick?: () => void) => void;
    getEnabledIndices: () => number[];
    triggerSelectedOption: () => void;
}
export declare const useActionMenuContext: () => ActionMenuContextValue;
export interface ActionMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'> {
    /** How many rows to show and scroll the rest */
    rows?: number;
    /** Label that is used for a11y */
    'aria-label': string;
    /** Children elements (typically ActionMenuOption components) */
    children?: React.ReactNode;
}
/**
 * ActionMenu is a dropdown menu component that displays a list of action options.
 * It supports keyboard navigation (Arrow Up/Down, Enter, Space) and accessible roles.
 *
 * @example
 * ```tsx
 * <ActionMenu aria-label="Actions">
 *   <ActionMenuOption text="Edit" onClick={() => console.log('Edit')} />
 *   <ActionMenuOption text="Delete" onClick={() => console.log('Delete')} />
 *   <ActionMenuOption text="Disabled" disabled />
 * </ActionMenu>
 * ```
 */
export declare const ActionMenu: import('react').ForwardRefExoticComponent<ActionMenuProps & import('react').RefAttributes<HTMLDivElement>>;
export {};

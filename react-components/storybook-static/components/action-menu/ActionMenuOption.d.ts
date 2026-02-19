export interface ActionMenuOptionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role' | 'onClick'> {
    /** Display text */
    text: string;
    /** Disabled state */
    disabled?: boolean;
    /** Label that is used for a11y (defaults to text) */
    'aria-label'?: string;
    /** Icon slot - displayed before the text */
    icon?: React.ReactNode;
    /** Right icon slot - displayed after the text */
    rightIcon?: React.ReactNode;
    /** Click event handler */
    onClick?: () => void;
    /** Internal index (set by ActionMenu) */
    index?: number;
}
/**
 * ActionMenuOption is an individual option within an ActionMenu.
 * It supports disabled state, icons, and click handlers.
 *
 * @example
 * ```tsx
 * <ActionMenu aria-label="Actions">
 *   <ActionMenuOption text="Edit" onClick={() => console.log('Edit')} />
 *   <ActionMenuOption
 *     text="Settings"
 *     icon={<Icon name="settings" />}
 *     onClick={() => console.log('Settings')}
 *   />
 *   <ActionMenuOption text="Disabled" disabled />
 * </ActionMenu>
 * ```
 */
export declare const ActionMenuOption: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<ActionMenuOptionProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;

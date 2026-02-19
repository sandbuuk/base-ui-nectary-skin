import { VariantProps } from 'class-variance-authority';

declare const tabsVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof tabsVariants> {
    /**
     * Controlled selected value
     */
    value?: string;
    /**
     * Default selected value for uncontrolled usage
     */
    defaultValue?: string;
    /**
     * Accessible label for the tab list
     */
    'aria-label': string;
    /**
     * Change handler - receives the selected value
     */
    onChange?: (value: string) => void;
}
export declare const Tabs: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TabsProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export interface TabsOptionProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'> {
    /**
     * Value of this tab option
     */
    value: string;
    /**
     * Text displayed in the tab
     */
    text: string;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon to display before the text
     */
    icon?: React.ReactNode;
}
export declare const TabsOption: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TabsOptionProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLButtonElement>>;
export interface TabsIconOptionProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'> {
    /**
     * Value of this tab option
     */
    value: string;
    /**
     * Accessible label (shown in tooltip)
     */
    'aria-label': string;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon to display
     */
    icon: React.ReactNode;
}
export declare const TabsIconOption: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TabsIconOptionProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLButtonElement>>;
export declare const TabsGroup: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TabsProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>> & {
    Option: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TabsOptionProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLButtonElement>>;
    IconOption: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TabsIconOptionProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLButtonElement>>;
};
export {};

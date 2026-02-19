import { VariantProps } from 'class-variance-authority';
import { default as React } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';

export interface SelectMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Name for form submissions
     */
    name?: string;
    /**
     * Selected value (CSV for multiple)
     */
    value?: string;
    /**
     * Default value for uncontrolled usage
     */
    defaultValue?: string;
    /**
     * Number of visible rows before scrolling
     */
    rows?: number;
    /**
     * Allow multiple selection
     * @default false
     */
    multiple?: boolean;
    /**
     * Show search bar (null = auto based on option count)
     * @default null
     */
    searchable?: boolean | null;
    /**
     * Current search value
     */
    searchValue?: string;
    /**
     * Default search value for uncontrolled usage
     */
    defaultSearchValue?: string;
    /**
     * Search placeholder text
     * @default 'Search'
     */
    searchPlaceholder?: string;
    /**
     * Autocomplete attribute for search input
     */
    searchAutocomplete?: string;
    /**
     * Accessible label
     */
    'aria-label': string;
    /**
     * Change handler - receives the selected value(s)
     */
    onChange?: (value: string) => void;
    /**
     * Search change handler
     */
    onSearchChange?: (searchValue: string) => void;
}
export declare const SelectMenu: React.ForwardRefExoticComponent<SelectMenuProps & React.RefAttributes<HTMLDivElement>>;
export interface SelectMenuOptionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'content'> {
    /**
     * Option value
     */
    value: string;
    /**
     * Display text
     */
    text?: string;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Accessible label
     */
    'aria-label'?: string;
    /**
     * Icon element to display on the left
     */
    icon?: React.ReactNode;
    /**
     * Custom content to replace text
     */
    customContent?: React.ReactNode;
}
export declare const SelectMenuOption: React.ForwardRefExoticComponent<SelectMenuOptionProps & React.RefAttributes<HTMLDivElement>>;
declare const selectButtonVariants: (props?: ({
    size?: "s" | "m" | "l" | null | undefined;
    isDisabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SelectButtonSize = 's' | 'm' | 'l';
export interface SelectButtonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onFocus' | 'onBlur'>, VariantProps<typeof selectButtonVariants> {
    /**
     * Display text (selected value label)
     */
    text?: string;
    /**
     * Placeholder text when no value is selected
     */
    placeholder?: string;
    /**
     * Size variant
     * @default 'm'
     */
    size?: SelectButtonSize;
    /**
     * Invalid/error state
     * @default false
     */
    invalid?: boolean;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Accessible label
     */
    'aria-label': string;
    /**
     * Click handler
     */
    onClick?: () => void;
    /**
     * Focus handler
     */
    onFocus?: () => void;
    /**
     * Blur handler
     */
    onBlur?: () => void;
    /**
     * Icon element to display on the left
     */
    icon?: React.ReactNode;
    /**
     * Content to display on the left (before the text)
     */
    leftAddon?: React.ReactNode;
}
export declare const SelectButton: React.ForwardRefExoticComponent<SelectButtonProps & React.RefAttributes<HTMLDivElement>>;
export declare const Select: React.ForwardRefExoticComponent<SelectMenuProps & React.RefAttributes<HTMLDivElement>> & {
    Option: React.ForwardRefExoticComponent<SelectMenuOptionProps & React.RefAttributes<HTMLDivElement>>;
    Button: React.ForwardRefExoticComponent<SelectButtonProps & React.RefAttributes<HTMLDivElement>>;
};
export {};

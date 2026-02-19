import { VariantProps } from 'class-variance-authority';

export type AccordionStatusType = 'info' | 'success' | 'warn' | 'error';
declare const accordionVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof accordionVariants> {
    /**
     * The currently expanded item value(s). For single mode, a string.
     * For multiple mode, comma-separated values (e.g., "item1,item2").
     */
    value?: string;
    /**
     * Default expanded value(s) for uncontrolled usage.
     */
    defaultValue?: string;
    /**
     * Allow multiple items to be expanded at once.
     * @default false
     */
    multiple?: boolean;
    /**
     * Change handler - receives the new value (comma-separated for multiple).
     */
    onChange?: (value: string) => void;
}
export declare const Accordion: import('react').ForwardRefExoticComponent<AccordionProps & import('react').RefAttributes<HTMLDivElement>>;
export interface AccordionItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Unique value identifier for this item.
     */
    value: string;
    /**
     * Label text displayed in the header.
     */
    label: string;
    /**
     * Optional text displayed on the right side of the header.
     */
    optionalText?: string;
    /**
     * Status indicator.
     */
    status?: AccordionStatusType;
    /**
     * Disabled state.
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon slot - rendered before the label.
     */
    icon?: React.ReactNode;
}
export declare const AccordionItem: import('react').ForwardRefExoticComponent<AccordionItemProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const AccordionGroup: import('react').ForwardRefExoticComponent<AccordionProps & import('react').RefAttributes<HTMLDivElement>> & {
    Item: import('react').ForwardRefExoticComponent<AccordionItemProps & import('react').RefAttributes<HTMLDivElement>>;
};
export {};

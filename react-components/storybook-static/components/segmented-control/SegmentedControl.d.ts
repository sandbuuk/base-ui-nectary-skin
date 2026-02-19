import { VariantProps } from 'class-variance-authority';

declare const segmentedControlVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof segmentedControlVariants> {
    /**
     * Controlled selected value
     */
    value?: string;
    /**
     * Default selected value for uncontrolled usage
     */
    defaultValue?: string;
    /**
     * Accessible label for the segmented control
     */
    'aria-label': string;
    /**
     * Change handler - receives the selected value
     */
    onChange?: (value: string) => void;
}
export declare const SegmentedControl: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<SegmentedControlProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export interface SegmentedControlOptionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Value of this option
     */
    value: string;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Label text displayed in the option
     */
    text?: string;
    /**
     * Accessible label (required if text is not provided)
     */
    'aria-label'?: string;
    /**
     * Icon element to display before the text
     */
    icon?: React.ReactNode;
    /**
     * Whether this is the first option (for border radius)
     * Auto-detected if not provided via context
     */
    isFirst?: boolean;
    /**
     * Whether this is the last option (for border radius)
     * Auto-detected if not provided via context
     */
    isLast?: boolean;
}
export declare const SegmentedControlOption: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<SegmentedControlOptionProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const SegmentedControlGroup: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<SegmentedControlProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>> & {
    Option: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<SegmentedControlOptionProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
};
export {};

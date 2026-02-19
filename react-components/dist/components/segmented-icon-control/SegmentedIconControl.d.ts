import { VariantProps } from 'class-variance-authority';

declare const segmentedIconControlVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SegmentedIconControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof segmentedIconControlVariants> {
    /**
     * Controlled selected value (comma-separated for multiple selection)
     */
    value?: string;
    /**
     * Default selected value for uncontrolled usage
     */
    defaultValue?: string;
    /**
     * Enable multiple selection mode
     * @default false
     */
    multiple?: boolean;
    /**
     * Accessible label for the segmented icon control
     */
    'aria-label': string;
    /**
     * Change handler - receives the selected value(s) as comma-separated string
     */
    onChange?: (value: string) => void;
}
export declare const SegmentedIconControl: import('react').ForwardRefExoticComponent<SegmentedIconControlProps & import('react').RefAttributes<HTMLDivElement>>;
export interface SegmentedIconControlOptionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
     * Accessible label (required for icon-only options)
     */
    'aria-label': string;
    /**
     * Icon element to display
     */
    icon: React.ReactNode;
    /**
     * Whether this is the first option (for border radius)
     */
    isFirst?: boolean;
    /**
     * Whether this is the last option (for border radius)
     */
    isLast?: boolean;
}
export declare const SegmentedIconControlOption: import('react').ForwardRefExoticComponent<SegmentedIconControlOptionProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const SegmentedIconControlGroup: import('react').ForwardRefExoticComponent<SegmentedIconControlProps & import('react').RefAttributes<HTMLDivElement>> & {
    Option: import('react').ForwardRefExoticComponent<SegmentedIconControlOptionProps & import('react').RefAttributes<HTMLDivElement>>;
};
export {};

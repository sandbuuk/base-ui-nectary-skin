import { VariantProps } from 'class-variance-authority';

export type ProgressStepperStatus = 'inactive' | 'incomplete' | 'complete';
declare const progressStepperVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ProgressStepperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof progressStepperVariants> {
    /**
     * Controlled selected item value
     */
    value?: string;
    /**
     * Default selected value for uncontrolled usage
     */
    defaultValue?: string;
    /**
     * Current progress value - determines which steps are complete/incomplete/inactive
     */
    progressValue?: string;
    /**
     * Accessible label for the progress stepper
     */
    'aria-label'?: string;
    /**
     * Change handler - receives the selected step value
     */
    onChange?: (value: string) => void;
}
export declare const ProgressStepper: import('react').ForwardRefExoticComponent<ProgressStepperProps & import('react').RefAttributes<HTMLDivElement>>;
export interface ProgressStepperItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
    /**
     * Value of this step item
     */
    value: string;
    /**
     * Text label for this step
     */
    text?: string;
    /**
     * Invalid/error state for this step
     * @default false
     */
    invalid?: boolean;
}
export declare const ProgressStepperItem: import('react').ForwardRefExoticComponent<ProgressStepperItemProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const ProgressStepperGroup: import('react').ForwardRefExoticComponent<ProgressStepperProps & import('react').RefAttributes<HTMLDivElement>> & {
    Item: import('react').ForwardRefExoticComponent<ProgressStepperItemProps & import('react').RefAttributes<HTMLDivElement>>;
};
export {};

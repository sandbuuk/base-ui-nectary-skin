import { VariantProps } from 'class-variance-authority';

declare const timePickerVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof timePickerVariants> {
    /**
     * Time value in ISO 8601 format (HH:mm:ss or HH:mm)
     */
    value?: string;
    /**
     * Default time value for uncontrolled usage
     */
    defaultValue?: string;
    /**
     * AM/PM 12-hour clock system, `false` by default (24-hour)
     * @default false
     */
    ampm?: boolean;
    /**
     * Accessible label for the time picker
     */
    'aria-label'?: string;
    /**
     * Submit button accessible label
     */
    submitAriaLabel?: string;
    /**
     * Change handler - called when submit button is clicked
     * Returns time in ISO 8601 format (HH:mm:ss)
     */
    onChange?: (value: string) => void;
}
export declare const TimePicker: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TimePickerProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};

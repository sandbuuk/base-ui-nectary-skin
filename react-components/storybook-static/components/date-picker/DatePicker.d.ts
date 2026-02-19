export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Date value in ISO 8601 format (YYYY-MM-DD)
     * For range mode, use comma-separated values (YYYY-MM-DD,YYYY-MM-DD)
     */
    value?: string;
    /**
     * Default value for uncontrolled mode
     */
    defaultValue?: string;
    /**
     * Minimum date in ISO 8601 format
     */
    min?: string;
    /**
     * Maximum date in ISO 8601 format
     */
    max?: string;
    /**
     * BCP 47 language tag (e.g. en-US) for localized day and month names
     * @default 'en-US'
     */
    locale?: string;
    /**
     * Enable date range selection mode
     * @default false
     */
    range?: boolean;
    /**
     * Callback when date value changes
     */
    onChange?: (value: string) => void;
    /**
     * Aria label for the previous year button
     */
    prevYearAriaLabel?: string;
    /**
     * Aria label for the next year button
     */
    nextYearAriaLabel?: string;
    /**
     * Aria label for the previous month button
     */
    prevMonthAriaLabel?: string;
    /**
     * Aria label for the next month button
     */
    nextMonthAriaLabel?: string;
}
/**
 * DatePicker component for selecting dates.
 *
 * Supports single date selection and date range selection modes.
 * Uses locale-aware month and day names.
 *
 * @example
 * ```tsx
 * // Single date
 * <DatePicker value="2024-01-15" onChange={(date) => console.log(date)} />
 *
 * // Date range
 * <DatePicker range value="2024-01-15,2024-01-20" onChange={(range) => console.log(range)} />
 *
 * // With min/max constraints
 * <DatePicker min="2024-01-01" max="2024-12-31" />
 * ```
 */
export declare const DatePicker: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<DatePickerProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;

import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

declare const meta: Meta<typeof DatePicker>;
export default meta;
type Story = StoryObj<typeof DatePicker>;
/**
 * Default DatePicker with no pre-selected date.
 * Opens to the current month.
 */
export declare const Default: Story;
/**
 * DatePicker with a pre-selected date.
 */
export declare const WithSelectedDate: Story;
/**
 * DatePicker with minimum and maximum date constraints.
 * Dates outside the range are disabled.
 */
export declare const WithMinMax: Story;
/**
 * DatePicker in range selection mode.
 * Click two dates to select a range.
 */
export declare const RangeSelection: Story;
/**
 * DatePicker with French locale.
 */
export declare const FrenchLocale: Story;
/**
 * DatePicker with German locale.
 */
export declare const GermanLocale: Story;
/**
 * DatePicker with Japanese locale.
 */
export declare const JapaneseLocale: Story;
/**
 * Multiple locales side by side for comparison.
 */
export declare const LocaleComparison: Story;
/**
 * DatePicker constrained to a single month.
 */
export declare const SingleMonth: Story;
/**
 * Controlled DatePicker that updates state on selection.
 */
export declare const Controlled: Story;
/**
 * Controlled range DatePicker.
 */
export declare const ControlledRange: Story;
/**
 * Uncontrolled DatePicker with defaultValue.
 */
export declare const Uncontrolled: Story;
/**
 * DatePicker with custom aria labels for accessibility.
 */
export declare const WithCustomAriaLabels: Story;
/**
 * DatePicker at different navigation states - showing disabled buttons.
 */
export declare const NavigationStates: Story;

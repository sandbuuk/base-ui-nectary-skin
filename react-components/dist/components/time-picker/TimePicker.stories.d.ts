import { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';

declare const meta: Meta<typeof TimePicker>;
export default meta;
type Story = StoryObj<typeof TimePicker>;
/**
 * Default 24-hour time picker starting at 00:00
 */
export declare const Default: Story;
/**
 * Time picker with a preset value
 */
export declare const WithValue: Story;
/**
 * Time picker with default value (uncontrolled)
 */
export declare const WithDefaultValue: Story;
/**
 * 12-hour format with AM/PM toggle
 */
export declare const AMPM: Story;
/**
 * 12-hour format showing PM time
 */
export declare const AMPM_PM: Story;
/**
 * 24-hour format showing evening time
 */
export declare const Evening24Hour: Story;
/**
 * Controlled component example
 */
export declare const Controlled: Story;
/**
 * Controlled AM/PM example
 */
export declare const ControlledAMPM: Story;
/**
 * Custom submit button label
 */
export declare const CustomSubmitLabel: Story;
/**
 * Midnight (00:00) in 24-hour format
 */
export declare const Midnight24Hour: Story;
/**
 * Noon (12:00) in 24-hour format
 */
export declare const Noon24Hour: Story;
/**
 * Midnight in 12-hour format (12:00 AM)
 */
export declare const MidnightAMPM: Story;
/**
 * Noon in 12-hour format (12:00 PM)
 */
export declare const NoonAMPM: Story;
/**
 * Time with non-5-minute interval (shows dot on minute needle)
 */
export declare const NonStandardMinute: Story;

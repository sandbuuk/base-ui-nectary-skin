import { Input } from './Input';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof Input>;
/**
 * Default input with placeholder.
 */
export declare const Default: Story;
/**
 * Input with a value.
 */
export declare const WithValue: Story;
/**
 * Input with placeholder text.
 */
export declare const WithPlaceholder: Story;
/**
 * All size variants displayed together.
 */
export declare const Sizes: Story;
/**
 * Small size input.
 */
export declare const Small: Story;
/**
 * Medium size input (default).
 */
export declare const Medium: Story;
/**
 * Large size input.
 */
export declare const Large: Story;
/**
 * Input in error/invalid state.
 */
export declare const Invalid: Story;
/**
 * Disabled input.
 */
export declare const Disabled: Story;
/**
 * Read-only input.
 */
export declare const ReadOnly: Story;
/**
 * Password input type.
 */
export declare const Password: Story;
/**
 * Number input type.
 */
export declare const Number: Story;
/**
 * Input with an icon on the left.
 */
export declare const WithIcon: Story;
/**
 * Input with icon in all sizes.
 */
export declare const WithIconSizes: Story;
/**
 * Input with a right addon (clear button).
 */
export declare const WithRightAddon: Story;
/**
 * Input with left addon.
 */
export declare const WithLeftAddon: Story;
/**
 * Input with both icon and right addon.
 */
export declare const WithIconAndAddon: Story;
/**
 * Controlled input example showing state management.
 */
export declare const Controlled: Story;
/**
 * Uncontrolled input with default value.
 */
export declare const Uncontrolled: Story;
/**
 * Input with aria-label for accessibility.
 */
export declare const WithAriaLabel: Story;
/**
 * Input with max length validation.
 */
export declare const WithMaxLength: Story;
/**
 * Required input field.
 */
export declare const Required: Story;
/**
 * Input with autocomplete attribute for forms.
 */
export declare const WithAutocomplete: Story;
/**
 * All states comparison.
 */
export declare const AllStates: Story;
/**
 * Form example showing multiple inputs.
 */
export declare const FormExample: Story;

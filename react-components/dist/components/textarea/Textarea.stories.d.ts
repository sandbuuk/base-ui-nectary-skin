import { Textarea } from './Textarea';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof Textarea>;
/**
 * Default textarea with placeholder.
 */
export declare const Default: Story;
/**
 * Textarea with a value.
 */
export declare const WithValue: Story;
/**
 * Textarea with placeholder text.
 */
export declare const WithPlaceholder: Story;
/**
 * Textarea with specific number of rows.
 */
export declare const WithRows: Story;
/**
 * Textarea with minRows - auto-resizes but has a minimum height.
 */
export declare const WithMinRows: Story;
/**
 * Textarea with maxRows - auto-resizes up to a maximum height.
 */
export declare const WithMaxRows: Story;
/**
 * Textarea with both minRows and maxRows constraints.
 */
export declare const WithMinAndMaxRows: Story;
/**
 * Textarea in error/invalid state.
 */
export declare const Invalid: Story;
/**
 * Disabled textarea.
 */
export declare const Disabled: Story;
/**
 * Read-only textarea.
 */
export declare const ReadOnly: Story;
/**
 * Resizable textarea with drag handle.
 */
export declare const Resizable: Story;
/**
 * Textarea with bottom content slot.
 */
export declare const WithBottomContent: Story;
/**
 * Resizable textarea with bottom content.
 */
export declare const ResizableWithBottomContent: Story;
/**
 * Controlled textarea example showing state management.
 */
export declare const Controlled: Story;
/**
 * Uncontrolled textarea with default value.
 */
export declare const Uncontrolled: Story;
/**
 * Textarea with aria-label for accessibility.
 */
export declare const WithAriaLabel: Story;
/**
 * Required textarea field.
 */
export declare const Required: Story;
/**
 * All states comparison.
 */
export declare const AllStates: Story;
/**
 * Auto-resize demonstration.
 */
export declare const AutoResize: Story;
/**
 * Form example with textarea.
 */
export declare const FormExample: Story;

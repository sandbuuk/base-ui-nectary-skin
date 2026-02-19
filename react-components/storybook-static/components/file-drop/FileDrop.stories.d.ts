import { Meta, StoryObj } from '@storybook/react';
import { FileDrop } from './FileDrop';

declare const meta: Meta<typeof FileDrop>;
export default meta;
type Story = StoryObj<typeof FileDrop>;
/**
 * Default file drop zone with placeholder text
 */
export declare const Default: Story;
/**
 * File drop that accepts only images
 */
export declare const ImagesOnly: Story;
/**
 * File drop that accepts multiple files
 */
export declare const MultipleFiles: Story;
/**
 * File drop with size limit (1MB)
 */
export declare const WithSizeLimit: Story;
/**
 * File drop in disabled state
 */
export declare const Disabled: Story;
/**
 * File drop in invalid/error state
 */
export declare const Invalid: Story;
/**
 * File drop accepting specific file types
 */
export declare const SpecificFileTypes: Story;
/**
 * File drop with custom children instead of default button
 */
export declare const WithCustomButton: Story;
/**
 * Interactive example showing file selection feedback
 */
export declare const Interactive: Story;
/**
 * All states side by side for comparison
 */
export declare const AllStates: Story;

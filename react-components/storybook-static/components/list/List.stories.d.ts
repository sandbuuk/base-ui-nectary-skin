import { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

declare const meta: Meta<typeof List>;
export default meta;
type Story = StoryObj<typeof List>;
/**
 * Default list with multiple items
 */
export declare const Default: Story;
/**
 * Empty list with no items
 */
export declare const Empty: Story;
/**
 * Single item in a list
 */
export declare const SingleItem: Story;
/**
 * List with many items demonstrating scroll behavior
 */
export declare const ManyItems: Story;
/**
 * List items with rich content
 */
export declare const WithRichContent: Story;
/**
 * List with clickable items
 */
export declare const ClickableItems: Story;
/**
 * List with custom styling
 */
export declare const CustomStyling: Story;

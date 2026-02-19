import { Meta, StoryObj } from '@storybook/react';
import { SegmentCollapse } from './SegmentCollapse';

declare const meta: Meta<typeof SegmentCollapse>;
export default meta;
type Story = StoryObj<typeof SegmentCollapse>;
/**
 * Default collapsed state
 */
export declare const Default: Story;
/**
 * Expanded state (chevron points up)
 */
export declare const Expanded: Story;
/**
 * Collapsed state (chevron points down)
 */
export declare const Collapsed: Story;
/**
 * Interactive controlled example showing usage with React state
 */
export declare const Controlled: Story;
/**
 * Uncontrolled example with default value
 */
export declare const Uncontrolled: Story;
/**
 * Example with a collapsible section
 */
export declare const WithCollapsibleContent: Story;
/**
 * Multiple collapsible sections (accordion-like behavior)
 */
export declare const MultipleSections: Story;
/**
 * All states side by side for visual comparison
 */
export declare const AllStates: Story;

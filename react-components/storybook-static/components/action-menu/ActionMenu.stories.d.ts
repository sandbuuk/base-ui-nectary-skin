import { Meta, StoryObj } from '@storybook/react';
import { ActionMenu } from './ActionMenu';

declare const meta: Meta<typeof ActionMenu>;
export default meta;
type Story = StoryObj<typeof ActionMenu>;
/**
 * Default ActionMenu with a few options.
 */
export declare const Default: Story;
/**
 * ActionMenu with some disabled options.
 */
export declare const WithDisabledOptions: Story;
/**
 * ActionMenu with limited visible rows and scrolling.
 */
export declare const WithRows: Story;
/**
 * ActionMenu with icons on options.
 */
export declare const WithIcons: Story;
/**
 * ActionMenu with right-side icons (e.g., keyboard shortcuts).
 */
export declare const WithRightIcons: Story;
/**
 * ActionMenu with both left and right icons.
 */
export declare const WithBothIcons: Story;
/**
 * ActionMenu with long text that gets truncated.
 */
export declare const WithLongText: Story;
/**
 * Empty ActionMenu (edge case).
 */
export declare const Empty: Story;
/**
 * ActionMenu showcasing keyboard navigation.
 * Focus the menu and use Arrow Up/Down to navigate, Enter/Space to select.
 */
export declare const KeyboardNavigation: Story;

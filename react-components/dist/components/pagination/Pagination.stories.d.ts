import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

declare const meta: Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof Pagination>;
/**
 * Default pagination with 10 pages, starting at page 1.
 */
export declare const Default: Story;
/**
 * Pagination at middle position showing ellipsis on both sides.
 */
export declare const MiddlePage: Story;
/**
 * Pagination at the last page with left navigation disabled.
 */
export declare const LastPage: Story;
/**
 * Pagination with fewer pages than button slots (no ellipsis needed).
 */
export declare const FewPages: Story;
/**
 * Pagination with only a single page.
 */
export declare const SinglePage: Story;
/**
 * Pagination with exactly 7 pages (no ellipsis needed).
 */
export declare const SevenPages: Story;
/**
 * Pagination with many pages showing ellipsis.
 */
export declare const ManyPages: Story;
/**
 * Interactive example with controlled state.
 */
export declare const Interactive: Story;
/**
 * Example showing navigation through pages.
 */
export declare const NavigationDemo: Story;
/**
 * All pagination states for visual comparison.
 */
export declare const AllStates: Story;

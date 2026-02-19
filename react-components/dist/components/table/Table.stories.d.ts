import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

declare const meta: Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof Table>;
/**
 * Default table with header and body
 */
export declare const Default: Story;
/**
 * Table with different column alignments
 */
export declare const WithAlignment: Story;
/**
 * Table with selected rows
 */
export declare const WithSelectedRows: Story;
/**
 * Table with sticky header (scroll to see effect)
 */
export declare const WithStickyHeader: Story;
/**
 * Table with fit column (shrinks to content width)
 */
export declare const WithFitColumn: Story;
/**
 * Table with header cell slots (checkbox, tooltip, etc.)
 */
export declare const WithHeaderSlots: Story;
/**
 * Empty table
 */
export declare const Empty: Story;
/**
 * Table with complex cell content
 */
export declare const WithComplexContent: Story;
/**
 * Clickable rows
 */
export declare const ClickableRows: Story;
/**
 * Full width table
 */
export declare const FullWidth: Story;

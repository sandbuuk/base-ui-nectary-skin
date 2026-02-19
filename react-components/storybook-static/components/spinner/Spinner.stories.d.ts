import { Spinner } from './Spinner';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof Spinner>;
/**
 * Default spinner with medium size.
 */
export declare const Default: Story;
/**
 * Small spinner (16x16px) - ideal for inline usage or buttons.
 */
export declare const Small: Story;
/**
 * Medium spinner (24x24px) - the default size for general use.
 */
export declare const Medium: Story;
/**
 * Large spinner (50x50px) - for prominent loading states.
 */
export declare const Large: Story;
/**
 * All sizes displayed together for comparison.
 */
export declare const AllSizes: Story;
/**
 * Spinner with custom color using text color utilities.
 */
export declare const CustomColor: Story;
/**
 * Spinner used inline with text content.
 */
export declare const InlineWithText: Story;
/**
 * Spinner inside a button to indicate loading state.
 */
export declare const InButton: Story;
/**
 * Full page loading state with centered spinner.
 */
export declare const PageLoading: Story;
/**
 * Card with loading state overlay.
 */
export declare const CardLoading: Story;
/**
 * On dark background showing contrast.
 */
export declare const OnDarkBackground: Story;

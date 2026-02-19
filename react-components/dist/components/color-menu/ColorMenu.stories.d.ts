import { Meta, StoryObj } from '@storybook/react';
import { ColorMenu } from './ColorMenu';

declare const meta: Meta<typeof ColorMenu>;
export default meta;
type Story = StoryObj<typeof ColorMenu>;
/**
 * Default ColorMenu with sample colors.
 */
export declare const Default: Story;
/**
 * Controlled ColorMenu with state management.
 */
export declare const Controlled: Story;
/**
 * All available swatch colors.
 */
export declare const AllSwatchColors: Story;
/**
 * With custom column count.
 */
export declare const CustomColumns: Story;
/**
 * With row limit and scrolling.
 */
export declare const WithRowLimit: Story;
/**
 * With custom CSS colors (hex values).
 */
export declare const CustomColors: Story;
/**
 * Mixed swatch and custom colors.
 */
export declare const MixedColors: Story;
/**
 * Skin tone colors for emoji-like use cases.
 */
export declare const SkinToneColors: Story;
/**
 * Single row layout.
 */
export declare const SingleRow: Story;
/**
 * Minimal with just a few colors.
 */
export declare const Minimal: Story;
/**
 * Uncontrolled mode with defaultValue.
 */
export declare const Uncontrolled: Story;
/**
 * Without any initial selection.
 */
export declare const NoInitialSelection: Story;
/**
 * Keyboard navigation demo.
 * Use arrow keys to navigate and Enter/Space to select.
 */
export declare const KeyboardNavigation: Story;

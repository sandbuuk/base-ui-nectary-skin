import { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from './ColorSwatch';

declare const meta: Meta<typeof ColorSwatch>;
export default meta;
type Story = StoryObj<typeof ColorSwatch>;
/**
 * Default state shows a gradient when no color is specified.
 */
export declare const Default: Story;
/**
 * With a predefined swatch color.
 */
export declare const WithSwatchColor: Story;
/**
 * With a custom hex color.
 */
export declare const WithHexColor: Story;
/**
 * With a custom RGB color.
 */
export declare const WithRgbColor: Story;
/**
 * All predefined swatch colors.
 */
export declare const AllSwatchColors: Story;
/**
 * Skin tone colors for emoji and avatar components.
 */
export declare const SkinToneColors: Story;
/**
 * Row of various colors showing the component inline.
 */
export declare const InlineUsage: Story;
/**
 * No color shows a gradient background.
 */
export declare const NoColor: Story;
/**
 * With custom aria-label for accessibility.
 */
export declare const WithAriaLabel: Story;
/**
 * Custom CSS color values.
 */
export declare const CustomColors: Story;

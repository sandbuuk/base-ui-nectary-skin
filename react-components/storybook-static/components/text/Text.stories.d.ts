import { Text } from './Text';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof Text>;
/**
 * Default text with medium size.
 */
export declare const Default: Story;
/**
 * All available text sizes displayed together for comparison.
 */
export declare const AllSizes: Story;
/**
 * Medium size text.
 */
export declare const Medium: Story;
/**
 * Small size text.
 */
export declare const Small: Story;
/**
 * Extra small size text.
 */
export declare const ExtraSmall: Story;
/**
 * Extra extra small size text.
 */
export declare const ExtraExtraSmall: Story;
/**
 * Emphasized text with bolder weight. Available for 'm' and 's' sizes.
 */
export declare const Emphasized: Story;
/**
 * Comparison of regular vs emphasized text.
 */
export declare const RegularVsEmphasized: Story;
/**
 * Inline text that flows with surrounding content.
 */
export declare const Inline: Story;
/**
 * Text truncated with ellipsis when it overflows its container.
 */
export declare const WithEllipsis: Story;
/**
 * Text with custom color using Tailwind classes.
 */
export declare const CustomColors: Story;
/**
 * Text rendered as different HTML elements using the `as` prop.
 */
export declare const PolymorphicRendering: Story;
/**
 * Inline text with various sizes mixed in a paragraph.
 */
export declare const MixedInlineSizes: Story;
/**
 * Text inside various layout contexts.
 */
export declare const InLayoutContexts: Story;

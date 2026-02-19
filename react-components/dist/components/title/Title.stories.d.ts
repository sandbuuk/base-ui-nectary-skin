import { Title } from './Title';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Title>;
export default meta;
type Story = StoryObj<typeof Title>;
/**
 * Default title with medium size
 */
export declare const Default: Story;
/**
 * All title size types
 */
export declare const AllTypes: Story;
/**
 * Extra large title - h1 by default
 */
export declare const ExtraLarge: Story;
/**
 * Large title - h2 by default
 */
export declare const Large: Story;
/**
 * Medium title - h3 by default
 */
export declare const Medium: Story;
/**
 * Small title - h4 by default
 */
export declare const Small: Story;
/**
 * Extra small title - h5 by default
 */
export declare const ExtraSmall: Story;
/**
 * Visual size and semantic level can be set independently.
 * Here we have a small visual size but h1 semantic importance.
 */
export declare const IndependentSizeAndLevel: Story;
/**
 * Titles with ellipsis truncation enabled
 */
export declare const WithEllipsis: Story;
/**
 * Render title as different HTML elements
 */
export declare const AsCustomElement: Story;
/**
 * Demonstration of semantic heading hierarchy
 */
export declare const HeadingHierarchy: Story;
/**
 * Title with custom className for additional styling
 */
export declare const WithCustomClassName: Story;

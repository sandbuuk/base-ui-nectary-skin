import { Avatar } from './Avatar';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof Avatar>;
/**
 * Default avatar with person icon
 */
export declare const Default: Story;
/**
 * Avatar with initials
 */
export declare const WithInitials: Story;
/**
 * Avatar with image
 */
export declare const WithImage: Story;
/**
 * Avatar with image that fails to load (shows fallback)
 */
export declare const WithBrokenImage: Story;
/**
 * All sizes comparison
 */
export declare const Sizes: Story;
/**
 * All status indicators
 */
export declare const StatusIndicators: Story;
/**
 * Color presets showcase
 */
export declare const Colors: Story;
/**
 * Avatar with status and image
 */
export declare const ImageWithStatus: Story;
/**
 * Different sizes with images
 */
export declare const SizesWithImages: Story;
/**
 * Avatar group example
 */
export declare const AvatarGroup: Story;
/**
 * Person icon fallback (no src, no alt)
 */
export declare const PersonIconFallback: Story;
/**
 * Interactive playground
 */
export declare const Playground: Story;

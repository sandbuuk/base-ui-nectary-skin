import { Meta, StoryObj } from '@storybook/react';
import { EmojiPicker } from './EmojiPicker';

declare const meta: Meta<typeof EmojiPicker>;
export default meta;
type Story = StoryObj<typeof EmojiPicker>;
/**
 * Default emoji picker with all features enabled.
 */
export declare const Default: Story;
/**
 * Emoji picker with an emoji base URL for custom emoji images.
 * Replace %s with your emoji CDN URL pattern.
 */
export declare const WithEmojiBaseUrl: Story;
/**
 * Interactive example showing the selected emoji.
 */
export declare const Interactive: Story;
/**
 * Interactive example with Twemoji images.
 */
export declare const InteractiveWithTwemoji: Story;
/**
 * Emoji picker in a container with a border to show the component boundaries.
 */
export declare const InContainer: Story;

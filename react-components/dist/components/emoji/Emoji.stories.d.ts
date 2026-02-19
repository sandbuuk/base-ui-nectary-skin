import { Meta, StoryObj } from '@storybook/react';
import { Emoji } from './Emoji';

declare const meta: Meta<typeof Emoji>;
export default meta;
type Story = StoryObj<typeof Emoji>;
export declare const Default: Story;
export declare const WithDifferentEmojis: Story;
export declare const Sizes: Story;
export declare const CustomSize: Story;
export declare const InlineWithText: Story;
export declare const VerticalAlignments: Story;
export declare const ComplexEmojis: Story;
export declare const FlagEmojis: Story;
export declare const WithoutBaseUrl: Story;
export declare const EmptyChar: Story;

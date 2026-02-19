import { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

declare const meta: Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof Dialog>;
export declare const Default: Story;
export declare const WithCaption: Story;
export declare const WithIcon: Story;
export declare const WithButtons: Story;
export declare const WithDestructiveAction: Story;
export declare const HiddenCloseButton: Story;
export declare const LongContent: Story;
export declare const Controlled: Story;
export declare const NoCaption: Story;

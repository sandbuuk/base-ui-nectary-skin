import { Meta, StoryObj } from '@storybook/react';
import { PersistentOverlay } from './PersistentOverlay';

declare const meta: Meta<typeof PersistentOverlay>;
export default meta;
type Story = StoryObj<typeof PersistentOverlay>;
export declare const Default: Story;
export declare const WithIcon: Story;
export declare const LoadingState: Story;
export declare const WithMultipleButtons: Story;
export declare const VisibilityAlteredCallback: Story;
export declare const LongContent: Story;
export declare const ContentOnly: Story;

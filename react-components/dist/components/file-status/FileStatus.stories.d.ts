import { Meta, StoryObj } from '@storybook/react';
import { FileStatus } from './FileStatus';

declare const meta: Meta<typeof FileStatus>;
export default meta;
type Story = StoryObj<typeof FileStatus>;
export declare const Default: Story;
export declare const AllTypes: Story;
export declare const Pending: Story;
export declare const Loading: Story;
export declare const Progress: Story;
export declare const Success: Story;
export declare const Error: Story;
export declare const WithContent: Story;
export declare const WithAction: Story;
export declare const WithContentAndAction: Story;
export declare const LongFilename: Story;

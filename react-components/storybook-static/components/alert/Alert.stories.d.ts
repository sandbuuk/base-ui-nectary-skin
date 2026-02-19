import { Alert } from './Alert';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof Alert>;
export declare const Default: Story;
export declare const Info: Story;
export declare const Warning: Story;
export declare const Error: Story;
export declare const AllTypes: Story;
export declare const LongText: Story;
export declare const WithAction: Story;
export declare const WithClose: Story;
export declare const WithActionAndClose: Story;
export declare const WithChildren: Story;

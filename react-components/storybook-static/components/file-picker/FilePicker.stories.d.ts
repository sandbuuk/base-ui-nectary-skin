import { Meta, StoryObj } from '@storybook/react';
import { FilePicker } from './FilePicker';

declare const meta: Meta<typeof FilePicker>;
export default meta;
type Story = StoryObj<typeof FilePicker>;
export declare const Default: Story;
export declare const Multiple: Story;
export declare const AcceptImages: Story;
export declare const AcceptPDF: Story;
export declare const WithMaxSize: Story;
export declare const Interactive: Story;
export declare const CustomTrigger: Story;
export declare const IconTrigger: Story;

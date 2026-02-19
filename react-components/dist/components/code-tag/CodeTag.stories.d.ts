import { Meta, StoryObj } from '@storybook/react';
import { CodeTag } from './CodeTag';

declare const meta: Meta<typeof CodeTag>;
export default meta;
type Story = StoryObj<typeof CodeTag>;
export declare const Default: Story;
export declare const WithChildren: Story;
export declare const InlineWithText: Story;
export declare const VariousCodeExamples: Story;
export declare const LongCode: Story;
export declare const WithCustomClassName: Story;

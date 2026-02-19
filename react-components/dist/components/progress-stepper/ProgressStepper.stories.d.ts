import { Meta, StoryObj } from '@storybook/react';
import { ProgressStepper } from './ProgressStepper';

declare const meta: Meta<typeof ProgressStepper>;
export default meta;
type Story = StoryObj<typeof ProgressStepper>;
export declare const Default: Story;
export declare const AllStates: Story;
export declare const WithInvalidStep: Story;
export declare const MultipleInvalidSteps: Story;
export declare const Controlled: Story;
export declare const ThreeSteps: Story;
export declare const FiveSteps: Story;
export declare const LongLabels: Story;
export declare const ItemStates: Story;

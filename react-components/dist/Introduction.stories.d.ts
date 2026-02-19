import { Meta, StoryObj } from '@storybook/react';

declare const Intro: () => import("react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof Intro>;
export default meta;
type Story = StoryObj<typeof Intro>;
export declare const Welcome: Story;

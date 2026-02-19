import { Meta, StoryObj } from '@storybook/react';
import { StopEvents } from './StopEvents';

declare const meta: Meta<typeof StopEvents>;
export default meta;
type Story = StoryObj<typeof StopEvents>;
/**
 * Basic usage showing click event being stopped.
 * Click the inner button - the parent click handler won't fire.
 */
export declare const Default: Story;
/**
 * Shows the difference between areas with and without event stopping.
 */
export declare const Comparison: Story;
/**
 * Stopping multiple event types at once.
 */
export declare const MultipleEvents: Story;
/**
 * Useful for preventing keyboard events from bubbling.
 */
export declare const KeyboardEvents: Story;
/**
 * StopEvents uses `display: contents` so it doesn't affect layout.
 */
export declare const LayoutNeutral: Story;

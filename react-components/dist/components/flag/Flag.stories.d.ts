import { Meta, StoryObj } from '@storybook/react';
import { Flag } from './Flag';

declare const meta: Meta<typeof Flag>;
export default meta;
type Story = StoryObj<typeof Flag>;
/**
 * Default flag displaying the United States.
 */
export declare const Default: Story;
/**
 * Display flags in all available sizes.
 */
export declare const Sizes: Story;
/**
 * Display various country flags.
 */
export declare const Countries: Story;
/**
 * Flags with different sizes showing a row of countries.
 */
export declare const SizeComparison: Story;
/**
 * Flag with custom alt text for accessibility.
 */
export declare const WithCustomAlt: Story;
/**
 * Using a different flag URL provider.
 */
export declare const CustomUrlTemplate: Story;

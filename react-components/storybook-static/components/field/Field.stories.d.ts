import { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';

declare const meta: Meta<typeof Field>;
export default meta;
type Story = StoryObj<typeof Field>;
/**
 * Default field with a label and input
 */
export declare const Default: Story;
/**
 * Field with label and optional text indicator
 */
export declare const WithOptionalText: Story;
/**
 * Field with additional helper text below the input
 */
export declare const WithAdditionalText: Story;
/**
 * Field showing an error/invalid state with error message
 */
export declare const WithInvalidText: Story;
/**
 * Field with both invalid and additional text
 */
export declare const WithInvalidAndAdditionalText: Story;
/**
 * Disabled field state
 */
export declare const Disabled: Story;
/**
 * Field without a label (just input wrapper)
 */
export declare const WithoutLabel: Story;
/**
 * Field with only optional text
 */
export declare const WithOnlyOptionalText: Story;
/**
 * Field with tooltip (using a placeholder element)
 */
export declare const WithTooltip: Story;
/**
 * Field with tooltip and optional text
 */
export declare const WithTooltipAndOptionalText: Story;
/**
 * Complete field with all features
 */
export declare const Complete: Story;
/**
 * Multiple fields in a form layout
 */
export declare const FormLayout: Story;
/**
 * Field with real Input component (integration example)
 */
export declare const WithInputComponent: Story;

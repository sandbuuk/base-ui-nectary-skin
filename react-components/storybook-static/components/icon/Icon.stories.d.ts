import { Icon } from './Icon';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof Icon>;
/**
 * Default icon with medium size.
 */
export declare const Default: Story;
/**
 * Common icons used throughout the design system.
 */
export declare const CommonIcons: Story;
/**
 * All available size variants.
 */
export declare const AllSizes: Story;
/**
 * Icons with custom colors using text color utilities.
 */
export declare const CustomColors: Story;
/**
 * Small size icons - ideal for inline usage or compact UI.
 */
export declare const ExtraSmall: Story;
/**
 * Small size icons.
 */
export declare const Small: Story;
/**
 * Medium size icons - the default size.
 */
export declare const Medium: Story;
/**
 * Large size icons.
 */
export declare const Large: Story;
/**
 * Extra large size icons - for prominent display.
 */
export declare const ExtraLarge: Story;
/**
 * Icon used inline with text content.
 */
export declare const InlineWithText: Story;
/**
 * Icons in a notification badge style.
 */
export declare const NotificationBadge: Story;
/**
 * Icon version 2 with different font families based on icon name prefix.
 */
export declare const IconVersion2: Story;
/**
 * Icons on dark background.
 */
export declare const OnDarkBackground: Story;
/**
 * Icon grid showing multiple icons in a layout.
 */
export declare const IconGrid: Story;

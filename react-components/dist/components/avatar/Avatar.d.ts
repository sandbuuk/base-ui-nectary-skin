import { VariantProps } from 'class-variance-authority';

/**
 * Avatar size options
 */
export type AvatarSize = 's' | 'm' | 'l';
/**
 * Avatar status options for presence indication
 */
export type AvatarStatus = 'online' | 'busy' | 'away' | 'offline';
/**
 * Avatar color presets
 */
export type AvatarColor = 'blue' | 'dark-blue' | 'dark-gray' | 'dark-green' | 'dark-orange' | 'dark-pink' | 'dark-red' | 'dark-violet' | 'dark-yellow' | 'default' | 'gray' | 'green' | 'light-blue' | 'light-gray' | 'light-green' | 'light-orange' | 'light-pink' | 'light-red' | 'light-violet' | 'light-yellow' | 'orange' | 'pink' | 'red' | 'violet' | 'yellow';
declare const avatarVariants: (props?: ({
    size?: "s" | "m" | "l" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof avatarVariants> {
    /**
     * Image source URL
     */
    src?: string;
    /**
     * Alt text for the image, also used as fallback initials
     */
    alt?: string;
    /**
     * Background color preset for the avatar
     */
    color?: AvatarColor;
    /**
     * Avatar size
     * @default 'm'
     */
    size?: AvatarSize;
    /**
     * Online presence status indicator
     */
    status?: AvatarStatus;
    /**
     * Callback fired when the image fails to load
     */
    onImageError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
/**
 * Avatar component for displaying user profile images with fallback to initials.
 *
 * Features:
 * - Image with automatic fallback to initials or person icon
 * - Multiple sizes (s, m, l)
 * - Color presets for background
 * - Online presence status indicator (online, busy, away, offline)
 */
export declare const Avatar: import('react').ForwardRefExoticComponent<AvatarProps & import('react').RefAttributes<HTMLDivElement>>;
export {};

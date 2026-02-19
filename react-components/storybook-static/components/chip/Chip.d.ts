import { VariantProps } from 'class-variance-authority';

/**
 * Chip color options from the web component.
 * These map to CSS variables: --sinch-comp-chip-color-{color}-default-background/foreground-initial
 */
export type ChipColor = 'neutral' | 'gray' | 'light-gray' | 'dark-gray' | 'blue' | 'light-blue' | 'dark-blue' | 'green' | 'light-green' | 'dark-green' | 'yellow' | 'light-yellow' | 'dark-yellow' | 'orange' | 'light-orange' | 'dark-orange' | 'red' | 'light-red' | 'dark-red' | 'pink' | 'light-pink' | 'dark-pink' | 'violet' | 'light-violet' | 'dark-violet' | 'danger' | 'warning' | 'success' | 'info';
/**
 * Chip size variants
 */
export type ChipSize = 's' | 'm';
declare const chipVariants: (props?: ({
    size?: "s" | "m" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof chipVariants> {
    /**
     * Text content for the chip
     */
    text: string;
    /**
     * Color variant for the chip
     * @default 'neutral'
     */
    color?: ChipColor;
    /**
     * Use small size variant
     * @default false
     */
    small?: boolean;
    /**
     * Chip size ('s' or 'm')
     * @default 'm'
     */
    size?: ChipSize;
    /**
     * Icon to display before the text
     */
    icon?: React.ReactNode;
    /**
     * Custom right icon (replaces the default close icon)
     */
    rightIcon?: React.ReactNode;
    /**
     * Called when the chip is clicked
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Called when the chip receives focus
     */
    onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
    /**
     * Called when the chip loses focus
     */
    onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
}
/**
 * Chip component for displaying removable tags or labels.
 *
 * Supports multiple color variants, two sizes (s, m), optional icon,
 * and click interactions for removal.
 *
 * @example
 * ```tsx
 * // Default chip
 * <Chip text="Label" onClick={handleRemove} />
 *
 * // Colored chip
 * <Chip text="Success" color="success" onClick={handleRemove} />
 *
 * // Small chip with icon
 * <Chip text="Status" small icon={<Icon name="check" />} onClick={handleRemove} />
 * ```
 */
export declare const Chip: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<ChipProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};

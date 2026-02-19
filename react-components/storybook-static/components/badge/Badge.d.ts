import { VariantProps } from 'class-variance-authority';

/**
 * Badge component for displaying notification counts or status indicators.
 * Wraps content and positions a badge indicator in the corner.
 */
declare const badgeIndicatorVariants: (props?: ({
    size?: "s" | "m" | "l" | null | undefined;
    mode?: "square" | "circle" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeSize = 'l' | 'm' | 's';
export type BadgeMode = 'square' | 'circle';
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, Omit<VariantProps<typeof badgeIndicatorVariants>, 'mode'> {
    /** Text to display in the badge (e.g., notification count) */
    text?: string;
    /** Size of the badge indicator */
    size?: BadgeSize;
    /** Mode affects positioning - 'square' for rectangular content, 'circle' for circular content like avatars */
    mode?: BadgeMode;
    /** Whether to hide the badge indicator */
    hidden?: boolean;
}
export declare const Badge: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<BadgeProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};

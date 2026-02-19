import { VariantProps } from 'class-variance-authority';

/**
 * Link component variants:
 * - Default (inline): Displays as inline text with underline
 * - Standalone: Displays as block with arrow icon
 */
declare const linkVariants: (props?: ({
    standalone?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, Omit<VariantProps<typeof linkVariants>, 'disabled'> {
    /**
     * Text content of the link
     */
    text?: string;
    /**
     * URL that the link points to
     */
    href: string;
    /**
     * When true, uses history.pushState instead of navigating (for SPA routing)
     */
    useHistory?: boolean;
    /**
     * Whether the link is disabled
     */
    disabled?: boolean;
    /**
     * When true, opens link in new tab and shows external icon
     */
    external?: boolean;
    /**
     * Standalone mode displays as block with an arrow icon
     */
    standalone?: boolean;
    /**
     * Prevents default anchor behavior on click
     */
    preventDefault?: boolean;
}
/**
 * Link component for navigation within the application or to external URLs.
 *
 * Supports inline and standalone display modes, external link indicators,
 * and SPA-friendly history navigation.
 */
export declare const Link: import('react').ForwardRefExoticComponent<LinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
export {};

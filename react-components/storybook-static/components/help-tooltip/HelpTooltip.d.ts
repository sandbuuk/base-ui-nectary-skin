import { TooltipOrientation, TooltipTextAlign } from '../tooltip';

/**
 * HelpTooltip component displays a help icon (question mark in a circle)
 * that shows a tooltip with helpful information on hover.
 *
 * This is a convenience wrapper around Tooltip + Icon for common help text patterns.
 */
export interface HelpTooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Text content to display in the tooltip */
    text: string;
    /** Orientation/position of the tooltip relative to the icon */
    orientation?: TooltipOrientation;
    /** Text alignment within the tooltip */
    textAlign?: TooltipTextAlign;
    /** Width override for the icon (in pixels) */
    width?: number;
    /**
     * Controlled open state. When set, controls whether the tooltip is visible.
     * If undefined, the tooltip operates in uncontrolled mode (hover-based).
     */
    isOpen?: boolean;
    /** Callback when the tooltip is shown */
    onShow?: () => void;
    /** Callback when the tooltip is hidden */
    onHide?: () => void;
}
export declare const HelpTooltip: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<HelpTooltipProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;

import { VariantProps } from 'class-variance-authority';

declare const tooltipContentVariants: (props?: ({
    orientation?: "left" | "right" | "bottom" | "top" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | null | undefined;
    textAlign?: "center" | "left" | "right" | null | undefined;
    visible?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TooltipOrientation = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type TooltipTextAlign = 'left' | 'center' | 'right';
export type TooltipType = 'slow' | 'fast';
export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>, Omit<VariantProps<typeof tooltipContentVariants>, 'visible'> {
    /** Text content to display in the tooltip */
    text: string;
    /** Orientation/position of the tooltip relative to the target */
    orientation?: TooltipOrientation;
    /** Text alignment within the tooltip */
    textAlign?: TooltipTextAlign;
    /** Type affects the delay before showing - 'slow' (1000ms) or 'fast' (250ms) */
    type?: TooltipType;
    /**
     * Controlled open state. When set, controls whether the tooltip is visible.
     * If undefined, the tooltip operates in uncontrolled mode (hover-based).
     */
    isOpen?: boolean;
    /** Callback when the tooltip is shown */
    onShow?: () => void;
    /** Callback when the tooltip is hidden */
    onHide?: () => void;
    /** The target element that triggers the tooltip */
    children: React.ReactElement;
}
export declare const Tooltip: import('react').ForwardRefExoticComponent<TooltipProps & import('react').RefAttributes<HTMLDivElement>>;
export {};

export interface SegmentCollapseProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'defaultValue'> {
    /**
     * Whether the section is expanded (true) or collapsed (false)
     */
    value?: boolean;
    /**
     * Default value for uncontrolled mode
     */
    defaultValue?: boolean;
    /**
     * Callback fired when the toggle state changes
     */
    onChange?: (value: boolean) => void;
    /**
     * Accessible label for the toggle button
     */
    'aria-label': string;
    /**
     * Custom icon size override
     */
    iconSize?: string;
}
/**
 * SegmentCollapse is a toggle button used to expand/collapse sections.
 *
 * It displays a chevron icon that rotates based on the expanded state.
 * When collapsed (value=false), the chevron points down.
 * When expanded (value=true), the chevron points up.
 *
 * Supports both controlled and uncontrolled usage patterns.
 *
 * @example
 * ```tsx
 * // Controlled
 * const [expanded, setExpanded] = useState(false)
 * <SegmentCollapse
 *   value={expanded}
 *   onChange={setExpanded}
 *   aria-label="Toggle section"
 * />
 *
 * // Uncontrolled
 * <SegmentCollapse
 *   defaultValue={false}
 *   aria-label="Toggle section"
 * />
 * ```
 */
export declare const SegmentCollapse: import('react').ForwardRefExoticComponent<SegmentCollapseProps & import('react').RefAttributes<HTMLButtonElement>>;

import { VariantProps } from 'class-variance-authority';

/**
 * CodeTag component displays inline code snippets with monospace font styling.
 * Uses component-specific design tokens for consistent styling.
 */
declare const codeTagVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CodeTagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof codeTagVariants> {
    /** Text content to display as code */
    text?: string;
}
/**
 * CodeTag displays inline code with monospace font styling.
 *
 * @example
 * ```tsx
 * <CodeTag text="const x = 1" />
 * <CodeTag>npm install</CodeTag>
 * ```
 */
export declare const CodeTag: import('react').ForwardRefExoticComponent<CodeTagProps & import('react').RefAttributes<HTMLSpanElement>>;
export {};

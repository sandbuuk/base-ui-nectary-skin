import { VariantProps } from 'class-variance-authority';

declare const progressVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>, VariantProps<typeof progressVariants> {
    /** Progress value between 0 and 100 */
    value?: number;
    /** Show percentage text */
    detailed?: boolean;
}
export declare const Progress: import('react').ForwardRefExoticComponent<ProgressProps & import('react').RefAttributes<HTMLDivElement>>;
export {};

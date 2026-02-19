import { VariantProps } from 'class-variance-authority';

declare const progressVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>, VariantProps<typeof progressVariants> {
    /** Progress value between 0 and 100 */
    value?: number;
    /** Show percentage text */
    detailed?: boolean;
}
export declare const Progress: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<ProgressProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};

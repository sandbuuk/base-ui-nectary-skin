import { VariantProps } from 'class-variance-authority';

declare const skeletonVariants: (props?: ({
    card?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
    /** Display as a card-like container with border and padding */
    card?: boolean;
}
/**
 * Skeleton container component that displays a shimmer animation over its children.
 * Use with SkeletonItem components to create loading placeholders.
 *
 * @example
 * ```tsx
 * <Skeleton>
 *   <SkeletonItem />
 *   <SkeletonItem size="sm" />
 * </Skeleton>
 * ```
 */
export declare const Skeleton: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<SkeletonProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};

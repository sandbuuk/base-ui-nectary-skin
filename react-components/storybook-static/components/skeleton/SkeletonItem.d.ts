import { VariantProps } from 'class-variance-authority';

declare const skeletonItemVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SkeletonItemSize = 'xs' | 'sm' | 'md' | 'lg';
export interface SkeletonItemProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonItemVariants> {
    /** Size of the skeleton item */
    size?: SkeletonItemSize;
    /** Custom width (CSS value) */
    width?: string | number;
}
/**
 * Individual skeleton placeholder item with shimmer animation.
 * Use inside a Skeleton container for loading states.
 *
 * @example
 * ```tsx
 * <Skeleton>
 *   <SkeletonItem />
 *   <SkeletonItem size="sm" width="50%" />
 *   <SkeletonItem size="lg" />
 * </Skeleton>
 * ```
 */
export declare const SkeletonItem: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<SkeletonItemProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};

import { VariantProps } from 'class-variance-authority';

declare const cardInnerVariants: (props?: ({
    clickable?: boolean | null | undefined;
    selected?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'title' | 'content'>, VariantProps<typeof cardInnerVariants> {
    /** Whether the card is disabled */
    disabled?: boolean;
    /** Whether the card is selected */
    selected?: boolean;
    /** Whether the card is clickable. Auto-set to true if onClick is provided */
    clickable?: boolean;
    /** Click event handler */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /** Media content (image, video, etc.) rendered at the top */
    media?: React.ReactNode;
    /** Title content (use CardTitle component) */
    title?: React.ReactNode;
    /** Main content area */
    content?: React.ReactNode;
    /** Footer content rendered at the bottom */
    footer?: React.ReactNode;
    /** Children are rendered in the content area if content prop is not provided */
    children?: React.ReactNode;
}
export declare const Card: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<CardProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export type CardTitleOrientation = 'horizontal' | 'vertical';
export interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Title text */
    text?: string;
    /** Orientation relative to the icon slot */
    orientation?: CardTitleOrientation;
    /** Truncate text with ellipsis */
    ellipsis?: boolean;
    /** Icon to display */
    icon?: React.ReactNode;
    /** Children can be used instead of text prop */
    children?: React.ReactNode;
}
export declare const CardTitle: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<CardTitleProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content to display inside the container */
    children?: React.ReactNode;
}
export declare const CardContainer: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<CardContainerProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};

import { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

declare const meta: Meta<typeof Grid>;
export default meta;
type Story = StoryObj<typeof Grid>;
/**
 * Default 12-column grid with automatic responsive behavior.
 * Resize the viewport to see the grid adapt.
 */
export declare const Default: Story;
/**
 * Two column layout that stacks on small screens.
 */
export declare const TwoColumns: Story;
/**
 * Three column layout with asymmetric widths.
 */
export declare const ThreeColumns: Story;
/**
 * Four column layout commonly used for cards/dashboards.
 */
export declare const FourColumns: Story;
/**
 * Full width item spanning all columns.
 */
export declare const FullWidth: Story;
/**
 * Mixed column widths for complex layouts.
 */
export declare const MixedWidths: Story;
/**
 * Responsive behavior: different column counts at each breakpoint.
 * Resize the viewport to see items reflow.
 */
export declare const ResponsiveLayout: Story;
/**
 * Nested grids for complex layouts.
 */
export declare const NestedGrids: Story;
/**
 * Custom grid configuration using CSS variables.
 */
export declare const CustomConfiguration: Story;
/**
 * Grid without padding/margin.
 */
export declare const NoPadding: Story;
/**
 * Dashboard-style layout with header, sidebar, and content area.
 */
export declare const DashboardLayout: Story;

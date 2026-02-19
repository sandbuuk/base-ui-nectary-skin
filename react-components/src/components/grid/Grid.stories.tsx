import type { Meta, StoryObj } from '@storybook/react'
import { Grid, type GridProps } from './Grid'
import { GridItem } from './GridItem'

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    style: {
      control: 'object',
      description: 'CSS variables for grid configuration',
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[400px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Grid>

// Demo box to visualize grid items
const DemoBox = ({
  children,
  color = 'primary',
}: {
  children: React.ReactNode,
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info',
}) => {
  const colorClasses = {
    primary: 'bg-primary/20 border-primary',
    secondary: 'bg-surface-secondary border-border',
    success: 'bg-success-subtle border-success',
    warning: 'bg-warning-subtle border-warning',
    info: 'bg-info-subtle border-info',
  }
  return (
    <div
      className={`${colorClasses[color]} border rounded-md p-4 text-center font-mono text-sm`}
    >
      {children}
    </div>
  )
}

/**
 * Default 12-column grid with automatic responsive behavior.
 * Resize the viewport to see the grid adapt.
 */
export const Default: Story = {
  render: () => (
    <Grid>
      <GridItem xl={4} l={4} m={4} s={2}>
        <DemoBox>xl=4</DemoBox>
      </GridItem>
      <GridItem xl={4} l={4} m={4} s={2}>
        <DemoBox>xl=4</DemoBox>
      </GridItem>
      <GridItem xl={4} l={4} m={8} s={4}>
        <DemoBox>xl=4</DemoBox>
      </GridItem>
    </Grid>
  ),
}

/**
 * Two column layout that stacks on small screens.
 */
export const TwoColumns: Story = {
  render: () => (
    <Grid>
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox color="primary">Left (6 cols)</DemoBox>
      </GridItem>
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox color="secondary">Right (6 cols)</DemoBox>
      </GridItem>
    </Grid>
  ),
}

/**
 * Three column layout with asymmetric widths.
 */
export const ThreeColumns: Story = {
  render: () => (
    <Grid>
      <GridItem xl={3} l={3} m={2} s={4}>
        <DemoBox color="info">Sidebar (3 cols)</DemoBox>
      </GridItem>
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox color="primary">Main Content (6 cols)</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={4}>
        <DemoBox color="info">Sidebar (3 cols)</DemoBox>
      </GridItem>
    </Grid>
  ),
}

/**
 * Four column layout commonly used for cards/dashboards.
 */
export const FourColumns: Story = {
  render: () => (
    <Grid>
      {[1, 2, 3, 4].map((i) => (
        <GridItem key={i} xl={3} l={3} m={4} s={2}>
          <DemoBox>Card {i}</DemoBox>
        </GridItem>
      ))}
    </Grid>
  ),
}

/**
 * Full width item spanning all columns.
 */
export const FullWidth: Story = {
  render: () => (
    <Grid>
      <GridItem xl={12} l={12} m={8} s={4}>
        <DemoBox color="success">Full Width (12 cols)</DemoBox>
      </GridItem>
    </Grid>
  ),
}

/**
 * Mixed column widths for complex layouts.
 */
export const MixedWidths: Story = {
  render: () => (
    <Grid>
      <GridItem xl={8} l={8} m={5} s={4}>
        <DemoBox color="primary">Large (8 cols)</DemoBox>
      </GridItem>
      <GridItem xl={4} l={4} m={3} s={4}>
        <DemoBox color="secondary">Small (4 cols)</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={2}>
        <DemoBox color="info">XS</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={2}>
        <DemoBox color="info">XS</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={2}>
        <DemoBox color="info">XS</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={2}>
        <DemoBox color="info">XS</DemoBox>
      </GridItem>
    </Grid>
  ),
}

/**
 * Responsive behavior: different column counts at each breakpoint.
 * Resize the viewport to see items reflow.
 */
export const ResponsiveLayout: Story = {
  render: () => (
    <Grid>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <GridItem key={i} xl={2} l={3} m={4} s={4}>
          <DemoBox color={i % 2 === 0 ? 'primary' : 'secondary'}>
            Item {i}
            <div className="text-xs text-foreground-muted mt-1">
              xl:2 l:3 m:4 s:4
            </div>
          </DemoBox>
        </GridItem>
      ))}
    </Grid>
  ),
}

/**
 * Nested grids for complex layouts.
 */
export const NestedGrids: Story = {
  render: () => (
    <Grid>
      <GridItem xl={6} l={6} m={8} s={4}>
        <DemoBox color="primary">
          <div className="mb-2">Parent Item</div>
          <Grid className="mt-2 p-0">
            <GridItem xl={6} l={6} m={4} s={2}>
              <DemoBox color="info">Nested 1</DemoBox>
            </GridItem>
            <GridItem xl={6} l={6} m={4} s={2}>
              <DemoBox color="info">Nested 2</DemoBox>
            </GridItem>
          </Grid>
        </DemoBox>
      </GridItem>
      <GridItem xl={6} l={6} m={8} s={4}>
        <DemoBox color="secondary">Right Column</DemoBox>
      </GridItem>
    </Grid>
  ),
}

/**
 * Custom grid configuration using CSS variables.
 */
export const CustomConfiguration: Story = {
  render: () => (
    <Grid
      style={{
        '--sinch-comp-grid-columns-xl': '6',
        '--sinch-comp-grid-gutter-xl': '2rem',
        '--sinch-comp-grid-margin-xl': '2rem',
      } as GridProps['style']}
    >
      <GridItem xl={2} l={4} m={4} s={2}>
        <DemoBox color="warning">6-col grid (xl:2)</DemoBox>
      </GridItem>
      <GridItem xl={2} l={4} m={4} s={2}>
        <DemoBox color="warning">6-col grid (xl:2)</DemoBox>
      </GridItem>
      <GridItem xl={2} l={4} m={8} s={4}>
        <DemoBox color="warning">6-col grid (xl:2)</DemoBox>
      </GridItem>
    </Grid>
  ),
}

/**
 * Grid without padding/margin.
 */
export const NoPadding: Story = {
  render: () => (
    <Grid
      style={{
        '--sinch-comp-grid-margin-xl': '0',
        '--sinch-comp-grid-margin-l': '0',
        '--sinch-comp-grid-margin-m': '0',
        '--sinch-comp-grid-margin-s': '0',
      } as GridProps['style']}
    >
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox>No margin</DemoBox>
      </GridItem>
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox>No margin</DemoBox>
      </GridItem>
    </Grid>
  ),
}

/**
 * Dashboard-style layout with header, sidebar, and content area.
 */
export const DashboardLayout: Story = {
  render: () => (
    <Grid>
      {/* Header - full width */}
      <GridItem xl={12} l={12} m={8} s={4}>
        <DemoBox color="primary">Header</DemoBox>
      </GridItem>
      {/* Sidebar */}
      <GridItem xl={3} l={3} m={8} s={4}>
        <DemoBox color="info">
          <div className="h-48 flex items-center justify-center">Sidebar</div>
        </DemoBox>
      </GridItem>
      {/* Main content */}
      <GridItem xl={9} l={9} m={8} s={4}>
        <DemoBox color="secondary">
          <div className="h-48 flex items-center justify-center">
            Main Content Area
          </div>
        </DemoBox>
      </GridItem>
      {/* Footer - full width */}
      <GridItem xl={12} l={12} m={8} s={4}>
        <DemoBox color="primary">Footer</DemoBox>
      </GridItem>
    </Grid>
  ),
}

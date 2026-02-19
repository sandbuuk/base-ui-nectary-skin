import { Spinner } from './Spinner'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Size of the spinner',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A loading indicator that displays an animated spinning circle. Use to indicate that content is loading or an action is in progress.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

/**
 * Default spinner with medium size.
 */
export const Default: Story = {
  args: {},
}

/**
 * Small spinner (16x16px) - ideal for inline usage or buttons.
 */
export const Small: Story = {
  args: {
    size: 's',
  },
}

/**
 * Medium spinner (24x24px) - the default size for general use.
 */
export const Medium: Story = {
  args: {
    size: 'm',
  },
}

/**
 * Large spinner (50x50px) - for prominent loading states.
 */
export const Large: Story = {
  args: {
    size: 'l',
  },
}

/**
 * All sizes displayed together for comparison.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="s"/>
        <span className="text-sm text-foreground-muted">Small (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="m"/>
        <span className="text-sm text-foreground-muted">Medium (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="l"/>
        <span className="text-sm text-foreground-muted">Large (50px)</span>
      </div>
    </div>
  ),
}

/**
 * Spinner with custom color using text color utilities.
 */
export const CustomColor: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="text-primary"/>
      <Spinner className="text-success"/>
      <Spinner className="text-warning"/>
      <Spinner className="text-danger"/>
      <Spinner className="text-info"/>
    </div>
  ),
}

/**
 * Spinner used inline with text content.
 */
export const InlineWithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner size="s"/>
      <span>Loading...</span>
    </div>
  ),
}

/**
 * Spinner inside a button to indicate loading state.
 */
export const InButton: Story = {
  render: () => (
    <button
      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground"
      disabled
    >
      <Spinner size="s" className="text-primary-foreground"/>
      <span>Submitting...</span>
    </button>
  ),
}

/**
 * Full page loading state with centered spinner.
 */
export const PageLoading: Story = {
  render: () => (
    <div className="flex h-64 w-full items-center justify-center rounded-lg border border-border bg-surface-primary">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="l"/>
        <span className="text-foreground-muted">Loading content...</span>
      </div>
    </div>
  ),
}

/**
 * Card with loading state overlay.
 */
export const CardLoading: Story = {
  render: () => (
    <div className="relative h-40 w-64 rounded-lg border border-border bg-surface-primary p-4">
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-surface-primary/80">
        <Spinner size="m"/>
      </div>
      <h3 className="font-semibold">Card Title</h3>
      <p className="text-sm text-foreground-muted">Some card content...</p>
    </div>
  ),
}

/**
 * On dark background showing contrast.
 */
export const OnDarkBackground: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-6 rounded-lg bg-pure-inverted p-8">
      <Spinner size="s" className="text-pure"/>
      <Spinner size="m" className="text-pure"/>
      <Spinner size="l" className="text-pure"/>
    </div>
  ),
}

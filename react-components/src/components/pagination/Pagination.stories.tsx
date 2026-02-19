import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { fn } from '@storybook/test'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 1 },
      description: 'Current page (1-indexed)',
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the page changes',
    },
    ariaLabel: {
      control: 'text',
      description: 'Aria label for the navigation element',
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

/**
 * Default pagination with 10 pages, starting at page 1.
 */
export const Default: Story = {
  args: {
    value: 1,
    max: 10,
  },
}

/**
 * Pagination at middle position showing ellipsis on both sides.
 */
export const MiddlePage: Story = {
  args: {
    value: 10,
    max: 20,
  },
}

/**
 * Pagination at the last page with left navigation disabled.
 */
export const LastPage: Story = {
  args: {
    value: 20,
    max: 20,
  },
}

/**
 * Pagination with fewer pages than button slots (no ellipsis needed).
 */
export const FewPages: Story = {
  args: {
    value: 2,
    max: 5,
  },
}

/**
 * Pagination with only a single page.
 */
export const SinglePage: Story = {
  args: {
    value: 1,
    max: 1,
  },
}

/**
 * Pagination with exactly 7 pages (no ellipsis needed).
 */
export const SevenPages: Story = {
  args: {
    value: 4,
    max: 7,
  },
}

/**
 * Pagination with many pages showing ellipsis.
 */
export const ManyPages: Story = {
  args: {
    value: 1,
    max: 100,
  },
}

/**
 * Interactive example with controlled state.
 */
export const Interactive: Story = {
  render: function InteractivePagination() {
    const [page, setPage] = useState(1)
    const maxPages = 15

    return (
      <div className="flex flex-col items-center gap-4">
        <Pagination value={page} max={maxPages} onChange={setPage} />
        <p className="text-sm text-foreground-muted">
          Page {page} of {maxPages}
        </p>
      </div>
    )
  },
}

/**
 * Example showing navigation through pages.
 */
export const NavigationDemo: Story = {
  render: function NavigationDemo() {
    const [page, setPage] = useState(1)
    const maxPages = 20

    return (
      <div className="flex flex-col items-center gap-4">
        <Pagination value={page} max={maxPages} onChange={setPage} />
        <div className="flex gap-2">
          <button
            className="px-3 py-1 text-sm border rounded hover:bg-surface-secondary"
            onClick={() => setPage(1)}
          >
            First
          </button>
          <button
            className="px-3 py-1 text-sm border rounded hover:bg-surface-secondary"
            onClick={() => setPage(10)}
          >
            Page 10
          </button>
          <button
            className="px-3 py-1 text-sm border rounded hover:bg-surface-secondary"
            onClick={() => setPage(maxPages)}
          >
            Last
          </button>
        </div>
      </div>
    )
  },
}

/**
 * All pagination states for visual comparison.
 */
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-foreground-muted mb-2">First page (left arrow disabled)</p>
        <Pagination value={1} max={20} />
      </div>
      <div>
        <p className="text-sm text-foreground-muted mb-2">Middle page (both ellipsis visible)</p>
        <Pagination value={10} max={20} />
      </div>
      <div>
        <p className="text-sm text-foreground-muted mb-2">Last page (right arrow disabled)</p>
        <Pagination value={20} max={20} />
      </div>
      <div>
        <p className="text-sm text-foreground-muted mb-2">Few pages (no ellipsis)</p>
        <Pagination value={3} max={5} />
      </div>
    </div>
  ),
}

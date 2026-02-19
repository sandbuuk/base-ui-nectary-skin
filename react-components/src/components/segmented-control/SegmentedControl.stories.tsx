import { fn } from '@storybook/test'
import { useState } from 'react'
import {
  SegmentedControl,
  SegmentedControlGroup,
  SegmentedControlOption,
} from './SegmentedControl'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled selected value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value for uncontrolled usage',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the segmented control',
    },
  },
}

export default meta
type Story = StoryObj<typeof SegmentedControl>

// Default example with 3 options
export const Default: Story = {
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list',
  },
  render: (args) => (
    <SegmentedControl {...args}>
      <SegmentedControlOption value="list" text="List" isFirst />
      <SegmentedControlOption value="grid" text="Grid" />
      <SegmentedControlOption value="table" text="Table" isLast />
    </SegmentedControl>
  ),
}

// Two options
export const TwoOptions: Story = {
  args: {
    'aria-label': 'Select mode',
    defaultValue: 'monthly',
  },
  render: (args) => (
    <SegmentedControl {...args}>
      <SegmentedControlOption value="monthly" text="Monthly" isFirst isLast={false} />
      <SegmentedControlOption value="yearly" text="Yearly" isLast isFirst={false} />
    </SegmentedControl>
  ),
}

// Many options
export const ManyOptions: Story = {
  args: {
    'aria-label': 'Select day',
    defaultValue: 'mon',
  },
  render: (args) => (
    <SegmentedControl {...args}>
      <SegmentedControlOption value="mon" text="Mon" isFirst />
      <SegmentedControlOption value="tue" text="Tue" />
      <SegmentedControlOption value="wed" text="Wed" />
      <SegmentedControlOption value="thu" text="Thu" />
      <SegmentedControlOption value="fri" text="Fri" />
      <SegmentedControlOption value="sat" text="Sat" />
      <SegmentedControlOption value="sun" text="Sun" isLast />
    </SegmentedControl>
  ),
}

// With disabled option
export const WithDisabledOption: Story = {
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list',
  },
  render: (args) => (
    <SegmentedControl {...args}>
      <SegmentedControlOption value="list" text="List" isFirst />
      <SegmentedControlOption value="grid" text="Grid (Disabled)" disabled />
      <SegmentedControlOption value="table" text="Table" isLast />
    </SegmentedControl>
  ),
}

// All disabled
export const AllDisabled: Story = {
  args: {
    'aria-label': 'Select view',
    defaultValue: 'grid',
  },
  render: (args) => (
    <SegmentedControl {...args}>
      <SegmentedControlOption value="list" text="List" isFirst disabled />
      <SegmentedControlOption value="grid" text="Grid (Selected)" disabled />
      <SegmentedControlOption value="table" text="Table" isLast disabled />
    </SegmentedControl>
  ),
}

// Controlled example
export const Controlled: Story = {
  args: {
    'aria-label': 'Select view',
  },
  render: function ControlledSegmentedControl() {
    const [value, setValue] = useState('list')

    return (
      <div className="flex flex-col gap-4">
        <SegmentedControl aria-label="Select view" value={value} onChange={setValue}>
          <SegmentedControlOption value="list" text={`List ${value === 'list' ? '(selected)' : ''}`} isFirst />
          <SegmentedControlOption value="grid" text={`Grid ${value === 'grid' ? '(selected)' : ''}`} />
          <SegmentedControlOption value="table" text={`Table ${value === 'table' ? '(selected)' : ''}`} isLast />
        </SegmentedControl>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('list')}
          >
            Select List
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('grid')}
          >
            Select Grid
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('table')}
          >
            Select Table
          </button>
        </div>
        <p className="text-sm text-foreground-muted">Current value: {value}</p>
      </div>
    )
  },
}

// Using SegmentedControlGroup compound component
export const UsingCompoundComponent: Story = {
  args: {
    'aria-label': 'Select time period',
    defaultValue: 'day',
  },
  render: (args) => (
    <SegmentedControlGroup {...args}>
      <SegmentedControlGroup.Option value="day" text="Day" isFirst />
      <SegmentedControlGroup.Option value="week" text="Week" />
      <SegmentedControlGroup.Option value="month" text="Month" />
      <SegmentedControlGroup.Option value="year" text="Year" isLast />
    </SegmentedControlGroup>
  ),
}

// With icons (using emoji as placeholder)
export const WithIcons: Story = {
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list',
  },
  render: (args) => (
    <SegmentedControl {...args}>
      <SegmentedControlOption
        value="list"
        text="List"
        icon={<span className="text-[16px]">&#9776;</span>}
        isFirst
      />
      <SegmentedControlOption
        value="grid"
        text="Grid"
        icon={<span className="text-[16px]">&#9638;</span>}
      />
      <SegmentedControlOption
        value="table"
        text="Table"
        icon={<span className="text-[16px]">&#9707;</span>}
        isLast
      />
    </SegmentedControl>
  ),
}

// Keyboard navigation demo
export const KeyboardNavigation: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground-muted mb-2">
        Use Tab to focus, Arrow keys to navigate, Space/Enter to select
      </p>
      <SegmentedControl aria-label="Keyboard navigation demo" defaultValue="option1">
        <SegmentedControlOption value="option1" text="Option 1" isFirst />
        <SegmentedControlOption value="option2" text="Option 2" />
        <SegmentedControlOption value="option3" text="Option 3" />
        <SegmentedControlOption value="option4" text="Option 4" isLast />
      </SegmentedControl>
    </div>
  ),
}

// Fixed width container
export const FixedWidth: Story = {
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list',
  },
  render: (args) => (
    <div className="w-[300px]">
      <SegmentedControl {...args}>
        <SegmentedControlOption value="list" text="List View" isFirst />
        <SegmentedControlOption value="grid" text="Grid View" />
        <SegmentedControlOption value="table" text="Table View" isLast />
      </SegmentedControl>
    </div>
  ),
}

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default</h3>
        <SegmentedControl aria-label="Default options" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Selected" isFirst />
          <SegmentedControlOption value="option2" text="Unselected" />
          <SegmentedControlOption value="option3" text="Unselected" isLast />
        </SegmentedControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Disabled</h3>
        <SegmentedControl aria-label="With disabled" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Selected" isFirst />
          <SegmentedControlOption value="option2" text="Disabled" disabled />
          <SegmentedControlOption value="option3" text="Enabled" isLast />
        </SegmentedControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">All Disabled</h3>
        <SegmentedControl aria-label="All disabled" defaultValue="option2">
          <SegmentedControlOption value="option1" text="Disabled" disabled isFirst />
          <SegmentedControlOption value="option2" text="Disabled Selected" disabled />
          <SegmentedControlOption value="option3" text="Disabled" disabled isLast />
        </SegmentedControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">No Selection</h3>
        <SegmentedControl aria-label="No selection">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" />
          <SegmentedControlOption value="option3" text="Option 3" isLast />
        </SegmentedControl>
      </div>
    </div>
  ),
}

// Practical use case: View switcher
export const ViewSwitcher: Story = {
  render: function ViewSwitcherExample() {
    const [view, setView] = useState('list')

    return (
      <div className="flex flex-col gap-4 p-4 border border-border rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-foreground">Files</h2>
          <SegmentedControl
            aria-label="Select view type"
            value={view}
            onChange={setView}
            className="w-auto"
          >
            <SegmentedControlOption value="list" text="List" isFirst />
            <SegmentedControlOption value="grid" text="Grid" isLast />
          </SegmentedControl>
        </div>
        <div className="p-4 bg-surface-secondary rounded-md min-h-[100px] flex items-center justify-center">
          <p className="text-foreground-muted">
            Showing files in <strong>{view}</strong> view
          </p>
        </div>
      </div>
    )
  },
}

// Practical use case: Billing period
export const BillingPeriod: Story = {
  render: function BillingPeriodExample() {
    const [period, setPeriod] = useState('monthly')

    const prices = {
      monthly: { price: '$29', period: '/month' },
      yearly: { price: '$290', period: '/year', savings: 'Save 17%' },
    }

    const current = prices[period as keyof typeof prices]

    return (
      <div className="flex flex-col gap-4 p-6 border border-border rounded-lg max-w-[300px]">
        <h2 className="text-lg font-semibold text-foreground text-center">Pro Plan</h2>
        <SegmentedControl
          aria-label="Select billing period"
          value={period}
          onChange={setPeriod}
        >
          <SegmentedControlOption value="monthly" text="Monthly" isFirst />
          <SegmentedControlOption value="yearly" text="Yearly" isLast />
        </SegmentedControl>
        <div className="text-center">
          <span className="text-3xl font-bold text-foreground">{current.price}</span>
          <span className="text-foreground-muted">{current.period}</span>
          {'savings' in current && (
            <p className="text-sm text-success mt-1">{current.savings}</p>
          )}
        </div>
        <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Subscribe
        </button>
      </div>
    )
  },
}

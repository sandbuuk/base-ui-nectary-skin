import { fn } from '@storybook/test'
import { useState } from 'react'
import {
  SegmentedIconControl,
  SegmentedIconControlGroup,
  SegmentedIconControlOption,
} from './SegmentedIconControl'
import type { Meta, StoryObj } from '@storybook/react'

// Simple icon components for stories
const ListIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
)

const GridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const TableIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
  </svg>
)

const BoldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
  </svg>
)

const ItalicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="4" x2="10" y2="4" />
    <line x1="14" y1="20" x2="5" y2="20" />
    <line x1="15" y1="4" x2="9" y2="20" />
  </svg>
)

const UnderlineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
    <line x1="4" y1="21" x2="20" y2="21" />
  </svg>
)

const StrikethroughIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="12" x2="20" y2="12" />
    <path d="M17.5 6.5a5 5 0 0 0-7-1 5 5 0 0 0 0 9" />
    <path d="M6.5 17.5a5 5 0 0 0 7 1 5 5 0 0 0 0-9" />
  </svg>
)

const AlignLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="15" y2="12" />
    <line x1="3" y1="18" x2="18" y2="18" />
  </svg>
)

const AlignCenterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="5" y1="18" x2="19" y2="18" />
  </svg>
)

const AlignRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="9" y1="12" x2="21" y2="12" />
    <line x1="6" y1="18" x2="21" y2="18" />
  </svg>
)

const meta: Meta<typeof SegmentedIconControl> = {
  title: 'Components/SegmentedIconControl',
  component: SegmentedIconControl,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled selected value (comma-separated for multiple)',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value for uncontrolled usage',
    },
    multiple: {
      control: 'boolean',
      description: 'Enable multiple selection mode',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the segmented icon control',
    },
  },
}

export default meta
type Story = StoryObj<typeof SegmentedIconControl>

// Default example with 3 options
export const Default: Story = {
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list',
  },
  render: (args) => (
    <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
      <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} />
      <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} isLast />
    </SegmentedIconControl>
  ),
}

// Two options
export const TwoOptions: Story = {
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list',
  },
  render: (args) => (
    <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
      <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} isLast />
    </SegmentedIconControl>
  ),
}

// With disabled option
export const WithDisabledOption: Story = {
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list',
  },
  render: (args) => (
    <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
      <SegmentedIconControlOption value="grid" aria-label="Grid view (disabled)" icon={<GridIcon />} disabled />
      <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} isLast />
    </SegmentedIconControl>
  ),
}

// All disabled
export const AllDisabled: Story = {
  args: {
    'aria-label': 'Select view',
    defaultValue: 'grid',
  },
  render: (args) => (
    <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} disabled isFirst />
      <SegmentedIconControlOption value="grid" aria-label="Grid view (selected)" icon={<GridIcon />} disabled />
      <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} disabled isLast />
    </SegmentedIconControl>
  ),
}

// Multiple selection mode
export const MultipleSelection: Story = {
  args: {
    'aria-label': 'Select formatting options',
    multiple: true,
    defaultValue: 'bold',
  },
  render: (args) => (
    <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
      <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
      <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} />
      <SegmentedIconControlOption value="strikethrough" aria-label="Strikethrough" icon={<StrikethroughIcon />} isLast />
    </SegmentedIconControl>
  ),
}

// Multiple with multiple selected
export const MultipleWithSelections: Story = {
  args: {
    'aria-label': 'Select formatting options',
    multiple: true,
    defaultValue: 'bold,italic',
  },
  render: (args) => (
    <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
      <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
      <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} isLast />
    </SegmentedIconControl>
  ),
}

// Controlled example (single)
export const Controlled: Story = {
  args: {
    'aria-label': 'Select view',
  },
  render: function ControlledSegmentedIconControl() {
    const [value, setValue] = useState('list')

    return (
      <div className="flex flex-col gap-4">
        <SegmentedIconControl aria-label="Select view" value={value} onChange={setValue}>
          <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} />
          <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} isLast />
        </SegmentedIconControl>
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

// Controlled multiple
export const ControlledMultiple: Story = {
  args: {
    'aria-label': 'Select formatting',
    multiple: true,
  },
  render: function ControlledMultipleSegmentedIconControl() {
    const [value, setValue] = useState('bold')

    return (
      <div className="flex flex-col gap-4">
        <SegmentedIconControl aria-label="Select formatting" multiple value={value} onChange={setValue}>
          <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
          <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
          <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} isLast />
        </SegmentedIconControl>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('bold,italic')}
          >
            Set Bold + Italic
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('')}
          >
            Clear All
          </button>
        </div>
        <p className="text-sm text-foreground-muted">
          Current value: {value || '(none)'}
        </p>
      </div>
    )
  },
}

// Using SegmentedIconControlGroup compound component
export const UsingCompoundComponent: Story = {
  args: {
    'aria-label': 'Select alignment',
    defaultValue: 'left',
  },
  render: (args) => (
    <SegmentedIconControlGroup {...args}>
      <SegmentedIconControlGroup.Option value="left" aria-label="Align left" icon={<AlignLeftIcon />} isFirst />
      <SegmentedIconControlGroup.Option value="center" aria-label="Align center" icon={<AlignCenterIcon />} />
      <SegmentedIconControlGroup.Option value="right" aria-label="Align right" icon={<AlignRightIcon />} isLast />
    </SegmentedIconControlGroup>
  ),
}

// Keyboard navigation demo
export const KeyboardNavigation: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground-muted mb-2">
        Use Tab to focus, Arrow keys to navigate, Space/Enter to select
      </p>
      <SegmentedIconControl aria-label="Keyboard navigation demo" defaultValue="list">
        <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
        <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} />
        <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} isLast />
      </SegmentedIconControl>
    </div>
  ),
}

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default (Single Selection)</h3>
        <SegmentedIconControl aria-label="Default options" defaultValue="list">
          <SegmentedIconControlOption value="list" aria-label="List (selected)" icon={<ListIcon />} isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid" icon={<GridIcon />} />
          <SegmentedIconControlOption value="table" aria-label="Table" icon={<TableIcon />} isLast />
        </SegmentedIconControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Multiple Selection</h3>
        <SegmentedIconControl aria-label="Multiple selection" multiple defaultValue="bold,italic">
          <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
          <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
          <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} isLast />
        </SegmentedIconControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Disabled</h3>
        <SegmentedIconControl aria-label="With disabled" defaultValue="list">
          <SegmentedIconControlOption value="list" aria-label="List" icon={<ListIcon />} isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid (disabled)" icon={<GridIcon />} disabled />
          <SegmentedIconControlOption value="table" aria-label="Table" icon={<TableIcon />} isLast />
        </SegmentedIconControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">All Disabled</h3>
        <SegmentedIconControl aria-label="All disabled" defaultValue="grid">
          <SegmentedIconControlOption value="list" aria-label="List" icon={<ListIcon />} disabled isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid (selected)" icon={<GridIcon />} disabled />
          <SegmentedIconControlOption value="table" aria-label="Table" icon={<TableIcon />} disabled isLast />
        </SegmentedIconControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">No Selection</h3>
        <SegmentedIconControl aria-label="No selection">
          <SegmentedIconControlOption value="list" aria-label="List" icon={<ListIcon />} isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid" icon={<GridIcon />} />
          <SegmentedIconControlOption value="table" aria-label="Table" icon={<TableIcon />} isLast />
        </SegmentedIconControl>
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
          <SegmentedIconControl
            aria-label="Select view type"
            value={view}
            onChange={setView}
          >
            <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
            <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} isLast />
          </SegmentedIconControl>
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

// Practical use case: Text editor toolbar
export const TextEditorToolbar: Story = {
  render: function TextEditorToolbarExample() {
    const [formatting, setFormatting] = useState('bold')
    const [alignment, setAlignment] = useState('left')

    return (
      <div className="flex flex-col gap-4 p-4 border border-border rounded-md">
        <h2 className="text-lg font-semibold text-foreground">Text Editor</h2>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground-muted">Formatting</span>
            <SegmentedIconControl
              aria-label="Text formatting"
              multiple
              value={formatting}
              onChange={setFormatting}
            >
              <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
              <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
              <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} isLast />
            </SegmentedIconControl>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground-muted">Alignment</span>
            <SegmentedIconControl
              aria-label="Text alignment"
              value={alignment}
              onChange={setAlignment}
            >
              <SegmentedIconControlOption value="left" aria-label="Align left" icon={<AlignLeftIcon />} isFirst />
              <SegmentedIconControlOption value="center" aria-label="Align center" icon={<AlignCenterIcon />} />
              <SegmentedIconControlOption value="right" aria-label="Align right" icon={<AlignRightIcon />} isLast />
            </SegmentedIconControl>
          </div>
        </div>
        <div className="p-4 bg-surface-secondary rounded-md min-h-[60px]">
          <p className="text-foreground-muted text-sm">
            Formatting: {formatting || '(none)'} | Alignment: {alignment}
          </p>
        </div>
      </div>
    )
  },
}

import { useState } from 'react'
import { Popover } from './Popover'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the popover is open',
    },
    orientation: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
      description: 'Position of the popover relative to the trigger',
    },
    tip: {
      control: 'boolean',
      description: 'Whether to show the arrow tip',
    },
    modal: {
      control: 'boolean',
      description: 'Modal mode with backdrop',
    },
    allowScroll: {
      control: 'boolean',
      description: 'Allow page scrolling when open',
    },
  },
  // Center the stories with padding for popover visibility
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-[400px] p-16">
        <Story/>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Popover>

// Demo button component for trigger
const TriggerButton = ({ children = 'Open Popover' }: { children?: React.ReactNode }) => (
  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors">
    {children}
  </button>
)

// Simple popover content
const PopoverContent = ({ title = 'Popover Title', children }: { title?: string, children?: React.ReactNode }) => (
  <div className="p-4 min-w-[200px]">
    <h3 className="font-semibold text-foreground mb-2">{title}</h3>
    {children || <p className="text-foreground-muted text-sm">This is the popover content.</p>}
  </div>
)

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        content={<PopoverContent/>}
      >
        <TriggerButton>
          <span onClick={() => setOpen(!open)}>Click to toggle</span>
        </TriggerButton>
      </Popover>
    )
  },
}

export const WithTip: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        content={<PopoverContent title="With Arrow"/>}
        tip
      >
        <TriggerButton>
          <span onClick={() => setOpen(!open)}>Popover with tip</span>
        </TriggerButton>
      </Popover>
    )
  },
}

export const ModalMode: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        content={
          <PopoverContent title="Modal Popover">
            <p className="text-foreground-muted text-sm mb-4">
              Click outside or press Escape to close.
            </p>
            <button
              className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </PopoverContent>
        }
        modal
      >
        <TriggerButton>
          <span onClick={() => setOpen(true)}>Open Modal Popover</span>
        </TriggerButton>
      </Popover>
    )
  },
}

export const Orientations: Story = {
  render: () => {
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({})

    const togglePopover = (id: string) => {
      setOpenStates((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    const closePopover = (id: string) => {
      setOpenStates((prev) => ({ ...prev, [id]: false }))
    }

    return (
      <div className="grid grid-cols-3 gap-8 p-8">
        <Popover
          open={openStates['top-left'] ?? false}
          onClose={() => closePopover('top-left')}
          orientation="top-left"
          tip
          content={<PopoverContent title="Top Left"/>}
        >
          <TriggerButton>
            <span onClick={() => togglePopover('top-left')}>Top Left</span>
          </TriggerButton>
        </Popover>

        <Popover
          open={openStates['top'] ?? false}
          onClose={() => closePopover('top')}
          orientation="top"
          tip
          content={<PopoverContent title="Top"/>}
        >
          <TriggerButton>
            <span onClick={() => togglePopover('top')}>Top</span>
          </TriggerButton>
        </Popover>

        <Popover
          open={openStates['top-right'] ?? false}
          onClose={() => closePopover('top-right')}
          orientation="top-right"
          tip
          content={<PopoverContent title="Top Right"/>}
        >
          <TriggerButton>
            <span onClick={() => togglePopover('top-right')}>Top Right</span>
          </TriggerButton>
        </Popover>

        <Popover
          open={openStates['left'] ?? false}
          onClose={() => closePopover('left')}
          orientation="left"
          tip
          content={<PopoverContent title="Left"/>}
        >
          <TriggerButton>
            <span onClick={() => togglePopover('left')}>Left</span>
          </TriggerButton>
        </Popover>

        <div/>

        <Popover
          open={openStates['right'] ?? false}
          onClose={() => closePopover('right')}
          orientation="right"
          tip
          content={<PopoverContent title="Right"/>}
        >
          <TriggerButton>
            <span onClick={() => togglePopover('right')}>Right</span>
          </TriggerButton>
        </Popover>

        <Popover
          open={openStates['bottom-left'] ?? false}
          onClose={() => closePopover('bottom-left')}
          orientation="bottom-left"
          tip
          content={<PopoverContent title="Bottom Left"/>}
        >
          <TriggerButton>
            <span onClick={() => togglePopover('bottom-left')}>Bottom Left</span>
          </TriggerButton>
        </Popover>

        <Popover
          open={openStates['bottom'] ?? false}
          onClose={() => closePopover('bottom')}
          orientation="bottom"
          tip
          content={<PopoverContent title="Bottom"/>}
        >
          <TriggerButton>
            <span onClick={() => togglePopover('bottom')}>Bottom</span>
          </TriggerButton>
        </Popover>

        <Popover
          open={openStates['bottom-right'] ?? false}
          onClose={() => closePopover('bottom-right')}
          orientation="bottom-right"
          tip
          content={<PopoverContent title="Bottom Right"/>}
        >
          <TriggerButton>
            <span onClick={() => togglePopover('bottom-right')}>Bottom Right</span>
          </TriggerButton>
        </Popover>
      </div>
    )
  },
}

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        content={
          <div className="p-4 w-[280px]">
            <h3 className="font-semibold text-foreground mb-4">Edit Details</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              setOpen(false)
            }}>
              <div className="mb-3">
                <label className="block text-sm text-foreground-muted mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-foreground-muted mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  className="px-3 py-1.5 text-sm rounded border border-border hover:bg-surface-secondary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded hover:bg-primary-hover"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        }
        modal
      >
        <TriggerButton>
          <span onClick={() => setOpen(true)}>Edit Details</span>
        </TriggerButton>
      </Popover>
    )
  },
}

export const WithMenu: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    const menuItems = [
      { label: 'Edit', icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' },
      { label: 'Duplicate', icon: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' },
      { label: 'Delete', icon: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', danger: true },
    ]

    return (
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        orientation="bottom-right"
        content={
          <div className="py-1 min-w-[160px]">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-surface-secondary flex items-center gap-2 ${
                  item.danger ? 'text-danger' : 'text-foreground'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </button>
            ))}
          </div>
        }
      >
        <TriggerButton>
          <span onClick={() => setOpen(!open)}>Actions</span>
        </TriggerButton>
      </Popover>
    )
  },
}

export const AllowScroll: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <p className="text-foreground-muted text-sm mb-4">
          With allowScroll enabled, the page can scroll while the popover is open.
        </p>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          content={<PopoverContent title="Scrollable"/>}
          allowScroll
        >
          <TriggerButton>
            <span onClick={() => setOpen(!open)}>Allow Scroll</span>
          </TriggerButton>
        </Popover>
      </div>
    )
  },
}

export const CustomStyling: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        content={
          <div className="p-4">
            <p className="text-pure">Custom styled popover content</p>
          </div>
        }
        className="bg-primary text-pure border-primary"
        tip
      >
        <TriggerButton>
          <span onClick={() => setOpen(!open)}>Custom Style</span>
        </TriggerButton>
      </Popover>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button
            className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover"
            onClick={() => setOpen(true)}
          >
            Open Popover
          </button>
          <button
            className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover"
            onClick={() => setOpen(false)}
          >
            Close Popover
          </button>
        </div>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          content={<PopoverContent title="Controlled"/>}
          tip
        >
          <div className="px-4 py-2 bg-surface-tertiary rounded-md">
            Target Element (controlled externally)
          </div>
        </Popover>
      </div>
    )
  },
}

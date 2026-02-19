import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pop } from './Pop'

const meta: Meta<typeof Pop> = {
  title: 'Components/Pop',
  component: Pop,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the pop is open',
    },
    orientation: {
      control: 'select',
      options: [
        'top-left',
        'top-right',
        'top-center',
        'top-stretch',
        'bottom-left',
        'bottom-right',
        'bottom-center',
        'bottom-stretch',
        'center-left',
        'center-right',
      ],
      description: 'Position of the pop relative to the target',
    },
    modal: {
      control: 'boolean',
      description: 'Whether to use modal mode',
    },
    allowScroll: {
      control: 'boolean',
      description: 'Allow page scrolling when open',
    },
    hideOutsideViewport: {
      control: 'boolean',
      description: 'Hide pop when target is outside viewport',
    },
    inset: {
      control: 'number',
      description: 'Inset from viewport edges',
    },
    disableBackdropClose: {
      control: 'boolean',
      description: 'Disable closing on backdrop click',
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-[400px] p-16">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Pop>

// Demo button for trigger
const TriggerButton = ({ children = 'Open Pop', onClick }: { children?: React.ReactNode, onClick?: () => void }) => (
  <button
    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors"
    onClick={onClick}
  >
    {children}
  </button>
)

// Simple content panel
const PopContent = ({ title = 'Pop Content', onClose }: { title?: string, onClose?: () => void }) => (
  <div className="p-4 min-w-[200px] bg-surface-primary border border-border rounded-md shadow-lg">
    <h3 className="font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-foreground-muted text-sm mb-4">This is floating content.</p>
    {onClose !== undefined && (
      <button
        className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover"
        onClick={onClose}
      >
        Close
      </button>
    )}
  </div>
)

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Pop
        open={open}
        onClose={() => setOpen(false)}
        content={<PopContent onClose={() => setOpen(false)} />}
      >
        <TriggerButton onClick={() => setOpen(!open)}>
          Click to toggle
        </TriggerButton>
      </Pop>
    )
  },
}

export const AllOrientations: Story = {
  render: () => {
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({})

    const togglePop = (id: string) => {
      setOpenStates((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    const closePop = (id: string) => {
      setOpenStates((prev) => ({ ...prev, [id]: false }))
    }

    const orientations = [
      { id: 'top-left', label: 'Top Left' },
      { id: 'top-center', label: 'Top Center' },
      { id: 'top-right', label: 'Top Right' },
      { id: 'center-left', label: 'Center Left' },
      { id: 'center-right', label: 'Center Right' },
      { id: 'bottom-left', label: 'Bottom Left' },
      { id: 'bottom-center', label: 'Bottom Center' },
      { id: 'bottom-right', label: 'Bottom Right' },
    ] as const

    return (
      <div className="grid grid-cols-3 gap-8 p-8">
        {orientations.slice(0, 3).map(({ id, label }) => (
          <Pop
            key={id}
            open={openStates[id] ?? false}
            onClose={() => closePop(id)}
            orientation={id}
            content={<PopContent title={label} onClose={() => closePop(id)} />}
          >
            <TriggerButton onClick={() => togglePop(id)}>
              {label}
            </TriggerButton>
          </Pop>
        ))}

        <Pop
          open={openStates['center-left'] ?? false}
          onClose={() => closePop('center-left')}
          orientation="center-left"
          content={<PopContent title="Center Left" onClose={() => closePop('center-left')} />}
        >
          <TriggerButton onClick={() => togglePop('center-left')}>
            Center Left
          </TriggerButton>
        </Pop>

        <div />

        <Pop
          open={openStates['center-right'] ?? false}
          onClose={() => closePop('center-right')}
          orientation="center-right"
          content={<PopContent title="Center Right" onClose={() => closePop('center-right')} />}
        >
          <TriggerButton onClick={() => togglePop('center-right')}>
            Center Right
          </TriggerButton>
        </Pop>

        {orientations.slice(5).map(({ id, label }) => (
          <Pop
            key={id}
            open={openStates[id] ?? false}
            onClose={() => closePop(id)}
            orientation={id}
            content={<PopContent title={label} onClose={() => closePop(id)} />}
          >
            <TriggerButton onClick={() => togglePop(id)}>
              {label}
            </TriggerButton>
          </Pop>
        ))}
      </div>
    )
  },
}

export const StretchOrientations: Story = {
  render: () => {
    const [openTop, setOpenTop] = useState(false)
    const [openBottom, setOpenBottom] = useState(false)

    return (
      <div className="flex flex-col gap-8">
        <Pop
          open={openTop}
          onClose={() => setOpenTop(false)}
          orientation="top-stretch"
          content={
            <div className="p-4 bg-surface-primary border border-border rounded-md shadow-lg">
              <p className="text-foreground">This content stretches to match the trigger width.</p>
            </div>
          }
        >
          <button
            className="w-[300px] px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
            onClick={() => setOpenTop(!openTop)}
          >
            Top Stretch (300px wide)
          </button>
        </Pop>

        <Pop
          open={openBottom}
          onClose={() => setOpenBottom(false)}
          orientation="bottom-stretch"
          content={
            <div className="p-4 bg-surface-primary border border-border rounded-md shadow-lg">
              <p className="text-foreground">This content stretches to match the trigger width.</p>
            </div>
          }
        >
          <button
            className="w-[400px] px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
            onClick={() => setOpenBottom(!openBottom)}
          >
            Bottom Stretch (400px wide)
          </button>
        </Pop>
      </div>
    )
  },
}

export const ModalMode: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Pop
        open={open}
        onClose={() => setOpen(false)}
        modal
        content={
          <div className="p-4 min-w-[250px] bg-surface-primary border border-border rounded-md shadow-lg">
            <h3 className="font-semibold text-foreground mb-2">Modal Pop</h3>
            <p className="text-foreground-muted text-sm mb-4">
              This pop is in modal mode. Click outside or press Escape to close.
            </p>
            <button
              className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        }
      >
        <TriggerButton onClick={() => setOpen(true)}>
          Open Modal Pop
        </TriggerButton>
      </Pop>
    )
  },
}

export const DisableBackdropClose: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Pop
        open={open}
        onClose={() => setOpen(false)}
        disableBackdropClose
        content={
          <div className="p-4 min-w-[250px] bg-surface-primary border border-border rounded-md shadow-lg">
            <h3 className="font-semibold text-foreground mb-2">Backdrop Close Disabled</h3>
            <p className="text-foreground-muted text-sm mb-4">
              Clicking outside won't close this pop. Use the button to close.
            </p>
            <button
              className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        }
      >
        <TriggerButton onClick={() => setOpen(true)}>
          Open Pop
        </TriggerButton>
      </Pop>
    )
  },
}

export const AllowScroll: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <p className="text-foreground-muted text-sm mb-4">
          With allowScroll enabled, the page can scroll while the pop is open and the pop follows the trigger.
        </p>
        <Pop
          open={open}
          onClose={() => setOpen(false)}
          allowScroll
          content={<PopContent title="Scrollable" onClose={() => setOpen(false)} />}
        >
          <TriggerButton onClick={() => setOpen(!open)}>
            Allow Scroll
          </TriggerButton>
        </Pop>
      </div>
    )
  },
}

export const WithInset: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <p className="text-foreground-muted text-sm mb-4">
          The pop maintains a 20px inset from viewport edges.
        </p>
        <Pop
          open={open}
          onClose={() => setOpen(false)}
          inset={20}
          content={<PopContent title="With Inset" onClose={() => setOpen(false)} />}
        >
          <TriggerButton onClick={() => setOpen(!open)}>
            Open with Inset
          </TriggerButton>
        </Pop>
      </div>
    )
  },
}

export const NestedContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Pop
        open={open}
        onClose={() => setOpen(false)}
        content={
          <div className="p-4 min-w-[300px] bg-surface-primary border border-border rounded-md shadow-lg">
            <h3 className="font-semibold text-foreground mb-4">Form in Pop</h3>
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
      >
        <TriggerButton onClick={() => setOpen(!open)}>
          Open Form
        </TriggerButton>
      </Pop>
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
            Open Pop
          </button>
          <button
            className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover"
            onClick={() => setOpen(false)}
          >
            Close Pop
          </button>
        </div>
        <Pop
          open={open}
          onClose={() => setOpen(false)}
          content={<PopContent title="Controlled" />}
        >
          <div className="px-4 py-2 bg-surface-tertiary rounded-md">
            Target Element (controlled externally)
          </div>
        </Pop>
      </div>
    )
  },
}

import { useState } from 'react'
import { Tooltip } from './Tooltip'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content to display in the tooltip',
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
      description: 'Position of the tooltip relative to the target',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment within the tooltip',
    },
    type: {
      control: 'select',
      options: ['slow', 'fast'],
      description: 'Delay before showing - slow (1000ms) or fast (250ms)',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controlled open state',
    },
  },
  // Center the stories with padding for tooltip visibility
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-[200px] p-16">
        <Story/>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

// Demo button component
const DemoButton = ({ children = 'Hover me' }: { children?: React.ReactNode }) => (
  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors">
    {children}
  </button>
)

export const Default: Story = {
  args: {
    text: 'This is a tooltip',
    children: <DemoButton/>,
  },
}

export const FastType: Story = {
  args: {
    text: 'This tooltip appears faster (250ms delay)',
    type: 'fast',
    children: <DemoButton>Hover me (fast)</DemoButton>,
  },
}

export const SlowType: Story = {
  args: {
    text: 'This tooltip appears slower (1000ms delay)',
    type: 'slow',
    children: <DemoButton>Hover me (slow)</DemoButton>,
  },
}

export const Orientations: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      <div/>
      <Tooltip text="Top" orientation="top">
        <DemoButton>Top</DemoButton>
      </Tooltip>
      <div/>

      <Tooltip text="Left" orientation="left">
        <DemoButton>Left</DemoButton>
      </Tooltip>
      <div/>
      <Tooltip text="Right" orientation="right">
        <DemoButton>Right</DemoButton>
      </Tooltip>

      <div/>
      <Tooltip text="Bottom" orientation="bottom">
        <DemoButton>Bottom</DemoButton>
      </Tooltip>
      <div/>
    </div>
  ),
}

export const CornerOrientations: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-16 p-8">
      <Tooltip text="Top-Left orientation" orientation="top-left">
        <DemoButton>Top-Left</DemoButton>
      </Tooltip>
      <Tooltip text="Top-Right orientation" orientation="top-right">
        <DemoButton>Top-Right</DemoButton>
      </Tooltip>
      <Tooltip text="Bottom-Left orientation" orientation="bottom-left">
        <DemoButton>Bottom-Left</DemoButton>
      </Tooltip>
      <Tooltip text="Bottom-Right orientation" orientation="bottom-right">
        <DemoButton>Bottom-Right</DemoButton>
      </Tooltip>
    </div>
  ),
}

export const TextAlignment: Story = {
  render: () => (
    <div className="flex gap-8">
      <Tooltip
        text="This is left-aligned text that may span multiple lines"
        textAlign="left"
        orientation="bottom"
      >
        <DemoButton>Left Align</DemoButton>
      </Tooltip>
      <Tooltip
        text="This is centered text that may span multiple lines"
        textAlign="center"
        orientation="bottom"
      >
        <DemoButton>Center Align</DemoButton>
      </Tooltip>
      <Tooltip
        text="This is right-aligned text that may span multiple lines"
        textAlign="right"
        orientation="bottom"
      >
        <DemoButton>Right Align</DemoButton>
      </Tooltip>
    </div>
  ),
}

export const LongText: Story = {
  args: {
    text: 'This is a longer tooltip text that demonstrates how the tooltip handles content that exceeds the typical length. It will wrap to multiple lines while respecting the max-width constraint.',
    orientation: 'bottom',
    children: <DemoButton>Long tooltip text</DemoButton>,
  },
}

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button
            className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover"
            onClick={() => setIsOpen(true)}
          >
            Show Tooltip
          </button>
          <button
            className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover"
            onClick={() => setIsOpen(false)}
          >
            Hide Tooltip
          </button>
        </div>
        <Tooltip text="This tooltip is controlled" isOpen={isOpen}>
          <div className="px-4 py-2 bg-surface-tertiary rounded-md">
            Target Element
          </div>
        </Tooltip>
      </div>
    )
  },
}

export const WithCallbacks: Story = {
  render: () => {
    const [log, setLog] = useState<string[]>([])

    const addLog = (message: string) => {
      setLog((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`])
    }

    return (
      <div className="flex flex-col items-center gap-4">
        <Tooltip
          text="Hover to trigger callbacks"
          type="fast"
          onShow={() => addLog('onShow called')}
          onHide={() => addLog('onHide called')}
        >
          <DemoButton>Hover for callbacks</DemoButton>
        </Tooltip>
        <div className="mt-4 p-4 bg-surface-secondary rounded text-sm font-mono w-80">
          <p className="text-foreground-muted mb-2">Event Log:</p>
          {log.length === 0 ? (
            <p className="text-foreground-caption">No events yet</p>
          ) : (
            log.map((entry, i) => (
              <p key={i} className="text-foreground">
                {entry}
              </p>
            ))
          )}
        </div>
      </div>
    )
  },
}

export const OnIconButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip text="Edit" type="fast">
        <button className="w-10 h-10 flex items-center justify-center rounded-md bg-surface-secondary hover:bg-surface-secondary-hover">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
      </Tooltip>
      <Tooltip text="Delete" type="fast">
        <button className="w-10 h-10 flex items-center justify-center rounded-md bg-surface-secondary hover:bg-surface-secondary-hover text-danger">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </Tooltip>
      <Tooltip text="Settings" type="fast">
        <button className="w-10 h-10 flex items-center justify-center rounded-md bg-surface-secondary hover:bg-surface-secondary-hover">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>
      </Tooltip>
    </div>
  ),
}

export const WithCustomContent: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip text="Click to view profile" orientation="top">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold cursor-pointer">
          JD
        </div>
      </Tooltip>
      <Tooltip text="Online - Last seen 5 minutes ago" orientation="top">
        <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center text-pure font-semibold cursor-pointer">
          AB
        </div>
      </Tooltip>
    </div>
  ),
}

export const NoText: Story = {
  args: {
    text: '',
    children: <DemoButton>No tooltip (empty text)</DemoButton>,
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { StopEvents } from './StopEvents'

const meta: Meta<typeof StopEvents> = {
  title: 'Utilities/StopEvents',
  component: StopEvents,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A utility component that prevents specified events from propagating beyond its boundary. Uses `display: contents` to avoid affecting layout.',
      },
    },
  },
  argTypes: {
    events: {
      control: 'object',
      description: 'Array of event names to stop propagation for',
    },
  },
}

export default meta
type Story = StoryObj<typeof StopEvents>

/**
 * Basic usage showing click event being stopped.
 * Click the inner button - the parent click handler won't fire.
 */
export const Default: Story = {
  args: {
    events: ['click'],
  },
  render: (args) => {
    const [parentClicks, setParentClicks] = useState(0)
    const [childClicks, setChildClicks] = useState(0)

    return (
      <div className="p-4 space-y-4">
        <div
          className="p-6 bg-surface-secondary rounded-md cursor-pointer"
          onClick={() => setParentClicks((c) => c + 1)}
        >
          <p className="mb-4 text-foreground-muted">
            Parent container (click anywhere)
          </p>
          <StopEvents {...args}>
            <button
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => setChildClicks((c) => c + 1)}
            >
              Button inside StopEvents
            </button>
          </StopEvents>
        </div>
        <div className="text-sm text-foreground-muted">
          <p>Parent clicks: {parentClicks}</p>
          <p>Child clicks: {childClicks}</p>
        </div>
      </div>
    )
  },
}

/**
 * Shows the difference between areas with and without event stopping.
 */
export const Comparison: Story = {
  args: {
    events: ['click'],
  },
  render: () => {
    const [parentClicks, setParentClicks] = useState(0)
    const [withStopClicks, setWithStopClicks] = useState(0)
    const [withoutStopClicks, setWithoutStopClicks] = useState(0)

    return (
      <div className="p-4 space-y-4">
        <div
          className="p-6 bg-surface-secondary rounded-md"
          onClick={() => setParentClicks((c) => c + 1)}
        >
          <p className="mb-4 text-foreground-muted">Parent container</p>
          <div className="flex gap-4">
            <StopEvents events={['click']}>
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                onClick={() => setWithStopClicks((c) => c + 1)}
              >
                With StopEvents
              </button>
            </StopEvents>
            <button
              className="px-4 py-2 bg-surface-tertiary text-foreground rounded-md border border-border"
              onClick={() => setWithoutStopClicks((c) => c + 1)}
            >
              Without StopEvents
            </button>
          </div>
        </div>
        <div className="text-sm text-foreground-muted space-y-1">
          <p>Parent clicks: {parentClicks}</p>
          <p>Button with StopEvents clicks: {withStopClicks}</p>
          <p>Button without StopEvents clicks: {withoutStopClicks}</p>
          <p className="text-xs mt-2">
            Note: Clicking the button without StopEvents increments both the
            button count and parent count due to event bubbling.
          </p>
        </div>
      </div>
    )
  },
}

/**
 * Stopping multiple event types at once.
 */
export const MultipleEvents: Story = {
  args: {
    events: ['click', 'mousedown', 'mouseup'],
  },
  render: (args) => {
    const [log, setLog] = useState<string[]>([])

    const addLog = (msg: string) => {
      setLog((l) => [...l.slice(-4), msg])
    }

    return (
      <div className="p-4 space-y-4">
        <div
          className="p-6 bg-surface-secondary rounded-md"
          onClick={() => addLog('Parent: click')}
          onMouseDown={() => addLog('Parent: mousedown')}
          onMouseUp={() => addLog('Parent: mouseup')}
        >
          <p className="mb-4 text-foreground-muted">
            Parent listens for: click, mousedown, mouseup
          </p>
          <StopEvents {...args}>
            <button
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={() => addLog('Child: click')}
              onMouseDown={() => addLog('Child: mousedown')}
              onMouseUp={() => addLog('Child: mouseup')}
            >
              Interact with me
            </button>
          </StopEvents>
        </div>
        <div className="text-sm font-mono bg-surface-tertiary p-2 rounded-md min-h-[100px]">
          {log.length === 0 && (
            <span className="text-foreground-muted">Event log...</span>
          )}
          {log.map((entry, i) => (
            <div key={i}>{entry}</div>
          ))}
        </div>
      </div>
    )
  },
}

/**
 * Useful for preventing keyboard events from bubbling.
 */
export const KeyboardEvents: Story = {
  args: {
    events: ['keydown', 'keyup'],
  },
  render: (args) => {
    const [parentKeys, setParentKeys] = useState<string[]>([])
    const [childKeys, setChildKeys] = useState<string[]>([])

    return (
      <div className="p-4 space-y-4">
        <div
          className="p-6 bg-surface-secondary rounded-md"
          tabIndex={0}
          onKeyDown={(e) =>
            setParentKeys((k) => [...k.slice(-2), `Parent: ${e.key}`])
          }
        >
          <p className="mb-4 text-foreground-muted">
            Parent container (also focusable - try pressing keys here)
          </p>
          <StopEvents {...args}>
            <input
              type="text"
              placeholder="Type here - keys won't bubble to parent"
              className="px-3 py-2 border border-border rounded-md w-full"
              onKeyDown={(e) =>
                setChildKeys((k) => [...k.slice(-2), `Input: ${e.key}`])
              }
            />
          </StopEvents>
        </div>
        <div className="text-sm text-foreground-muted space-y-1">
          <p>Parent key events: {parentKeys.join(', ') || 'none'}</p>
          <p>Input key events: {childKeys.join(', ') || 'none'}</p>
        </div>
      </div>
    )
  },
}

/**
 * StopEvents uses `display: contents` so it doesn't affect layout.
 */
export const LayoutNeutral: Story = {
  args: {
    events: ['click'],
  },
  render: () => (
    <div className="p-4">
      <p className="mb-4 text-foreground-muted text-sm">
        The StopEvents wrapper uses <code>display: contents</code> so it
        doesn&apos;t affect the flex layout below:
      </p>
      <div className="flex gap-2 p-4 bg-surface-secondary rounded-md">
        <button className="px-4 py-2 bg-surface-tertiary rounded-md">
          Button 1
        </button>
        <StopEvents events={['click']}>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
            Button 2 (wrapped)
          </button>
        </StopEvents>
        <button className="px-4 py-2 bg-surface-tertiary rounded-md">
          Button 3
        </button>
      </div>
    </div>
  ),
}

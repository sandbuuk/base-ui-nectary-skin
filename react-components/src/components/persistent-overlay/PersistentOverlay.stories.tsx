import { useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PersistentOverlay } from './PersistentOverlay'

const meta: Meta<typeof PersistentOverlay> = {
  title: 'Components/PersistentOverlay',
  component: PersistentOverlay,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the overlay is open',
    },
    caption: {
      control: 'text',
      description: 'Dialog caption/title',
    },
    checkInterval: {
      control: 'number',
      description: 'Interval for checking visibility manipulation (ms)',
    },
  },
}

export default meta
type Story = StoryObj<typeof PersistentOverlay>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <button
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
          onClick={() => setOpen(true)}
        >
          Show Persistent Overlay
        </button>

        <PersistentOverlay
          open={open}
          caption="Processing..."
          content={
            <div className="text-foreground-muted">
              <p>Please wait while we process your request.</p>
              <p className="mt-2 text-sm">This dialog cannot be dismissed with Escape or clicking outside.</p>
            </div>
          }
          buttons={
            <button
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm"
              onClick={() => setOpen(false)}
            >
              Complete
            </button>
          }
        />
      </div>
    )
  },
}

export const WithIcon: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <button
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
          onClick={() => setOpen(true)}
        >
          Show With Icon
        </button>

        <PersistentOverlay
          open={open}
          caption="Warning"
          icon={
            <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          }
          content={
            <p className="text-foreground-muted">
              A critical operation is in progress. Please do not close this window.
            </p>
          }
          buttons={
            <button
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm"
              onClick={() => setOpen(false)}
            >
              Acknowledge
            </button>
          }
        />
      </div>
    )
  },
}

export const LoadingState: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      if (!open) {
        setProgress(0)
        return
      }

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 10
        })
      }, 500)

      return () => clearInterval(interval)
    }, [open])

    useEffect(() => {
      if (progress >= 100) {
        setTimeout(() => setOpen(false), 500)
      }
    }, [progress])

    return (
      <div>
        <button
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
          onClick={() => setOpen(true)}
        >
          Start Process
        </button>

        <PersistentOverlay
          open={open}
          caption="Uploading Files"
          content={
            <div>
              <p className="text-foreground-muted mb-4">
                Please wait while your files are being uploaded...
              </p>
              <div className="w-full bg-surface-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-foreground-muted mt-2 text-center">{progress}%</p>
            </div>
          }
        />
      </div>
    )
  },
}

export const WithMultipleButtons: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [action, setAction] = useState<string | null>(null)

    const handleAction = (actionName: string) => {
      setAction(actionName)
      setOpen(false)
    }

    return (
      <div>
        <button
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
          onClick={() => {
            setAction(null)
            setOpen(true)
          }}
        >
          Show Overlay
        </button>

        {action !== null && (
          <p className="mt-4 text-foreground-muted">
            Last action: <span className="font-medium text-foreground">{action}</span>
          </p>
        )}

        <PersistentOverlay
          open={open}
          caption="Confirm Action"
          content={
            <p className="text-foreground-muted">
              This action requires confirmation. Please choose how to proceed.
            </p>
          }
          buttons={
            <>
              <button
                className="px-4 py-2 border border-border rounded-md hover:bg-surface-secondary text-sm"
                onClick={() => handleAction('Cancelled')}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-danger text-pure rounded-md hover:bg-danger-strong text-sm"
                onClick={() => handleAction('Declined')}
              >
                Decline
              </button>
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm"
                onClick={() => handleAction('Confirmed')}
              >
                Confirm
              </button>
            </>
          }
        />
      </div>
    )
  },
}

export const VisibilityAlteredCallback: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [alteredCount, setAlteredCount] = useState(0)

    return (
      <div>
        <button
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
          onClick={() => setOpen(true)}
        >
          Show Overlay
        </button>

        <p className="mt-4 text-foreground-muted">
          Visibility altered count: <span className="font-medium text-foreground">{alteredCount}</span>
        </p>
        <p className="text-sm text-foreground-muted mt-1">
          (Try closing by calling setOpen(false) to see the callback)
        </p>

        <PersistentOverlay
          open={open}
          caption="Monitored Overlay"
          onVisibilityAltered={() => {
            setAlteredCount((c) => c + 1)
          }}
          content={
            <p className="text-foreground-muted">
              This overlay monitors for external visibility manipulation.
            </p>
          }
          buttons={
            <button
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm"
              onClick={() => setOpen(false)}
            >
              Close Normally
            </button>
          }
        />
      </div>
    )
  },
}

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <button
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
          onClick={() => setOpen(true)}
        >
          Show Long Content
        </button>

        <PersistentOverlay
          open={open}
          caption="Terms and Conditions"
          content={
            <div className="text-foreground-muted max-h-[300px] overflow-auto">
              {Array.from({ length: 10 }).map((_, i) => (
                <p key={i} className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              ))}
            </div>
          }
          buttons={
            <>
              <button
                className="px-4 py-2 border border-border rounded-md hover:bg-surface-secondary text-sm"
                onClick={() => setOpen(false)}
              >
                Decline
              </button>
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm"
                onClick={() => setOpen(false)}
              >
                Accept
              </button>
            </>
          }
        />
      </div>
    )
  },
}

export const ContentOnly: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <button
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
          onClick={() => setOpen(true)}
        >
          Show Simple Overlay
        </button>

        <PersistentOverlay
          open={open}
          content={
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
              <p className="text-foreground-muted">Loading...</p>
              <button
                className="px-3 py-1.5 text-sm text-foreground-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          }
        />
      </div>
    )
  },
}

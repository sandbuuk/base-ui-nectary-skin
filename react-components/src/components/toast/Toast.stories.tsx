import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Toast, ToastProvider, ToastManager, useToast, toast } from './Toast'
import { Button } from '../button'
import { Icon } from '../icon'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warn', 'error'],
    },
    persistent: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

// Default toast
export const Default: Story = {
  args: {
    type: 'info',
    text: 'This is an informational message.',
  },
}

// All toast types
export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toast type="info" text="This is an info toast." />
      <Toast type="success" text="This is a success toast." />
      <Toast type="warn" text="This is a warning toast." />
      <Toast type="error" text="This is an error toast." />
    </div>
  ),
}

// Info toast
export const Info: Story = {
  args: {
    type: 'info',
    text: 'Your session will expire in 5 minutes.',
  },
}

// Success toast
export const Success: Story = {
  args: {
    type: 'success',
    text: 'Your changes have been saved successfully.',
  },
}

// Warning toast
export const Warning: Story = {
  args: {
    type: 'warn',
    text: 'Your subscription is about to expire.',
  },
}

// Error toast
export const Error: Story = {
  args: {
    type: 'error',
    text: 'Failed to save changes. Please try again.',
  },
}

// Persistent toast (won't auto-dismiss)
export const Persistent: Story = {
  args: {
    type: 'error',
    text: 'This toast will stay until you dismiss it.',
    persistent: true,
  },
}

// Toast with action button
export const WithAction: Story = {
  args: {
    type: 'info',
    text: 'New version available.',
    action: (
      <Button size="s" variant="secondary">
        Update
      </Button>
    ),
  },
}

// Toast with close button
export const WithClose: Story = {
  args: {
    type: 'success',
    text: 'File uploaded successfully.',
    close: (
      <Button size="s" variant="subtle-secondary" icon={<Icon name="xmark" size="sm" />} aria-label="Close" />
    ),
    persistent: true,
  },
}

// Toast with action and close
export const WithActionAndClose: Story = {
  args: {
    type: 'warn',
    text: 'Unsaved changes detected.',
    action: (
      <Button size="s" variant="secondary">
        Save
      </Button>
    ),
    close: (
      <Button size="s" variant="subtle-secondary" icon={<Icon name="xmark" size="sm" />} aria-label="Close" />
    ),
    persistent: true,
  },
}

// Long text toast
export const LongText: Story = {
  args: {
    type: 'info',
    text: 'This is a very long toast message that demonstrates how the component handles text wrapping when the content exceeds the available width.',
  },
}

// ============================================================================
// ToastProvider + useToast Hook Demo
// ============================================================================

function ToastDemo() {
  const { addToast, clearAll, toasts } = useToast()

  const handleAddInfo = () => {
    addToast(toast.info('This is an info message'))
  }

  const handleAddSuccess = () => {
    addToast(toast.success('Operation completed successfully!'))
  }

  const handleAddWarning = () => {
    addToast(toast.warn('Please review your input'))
  }

  const handleAddError = () => {
    addToast(toast.error('An error occurred'))
  }

  const handleAddPersistent = () => {
    addToast({
      type: 'info',
      text: 'This toast will not auto-dismiss',
      persistent: true,
      close: (
        <Button size="s" variant="subtle-secondary" icon={<Icon name="xmark" size="sm" />} aria-label="Close" />
      ),
    })
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="text-sm text-foreground-muted mb-2">
        Active toasts: {toasts.length}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleAddInfo}>Add Info</Button>
        <Button onClick={handleAddSuccess}>Add Success</Button>
        <Button onClick={handleAddWarning}>Add Warning</Button>
        <Button onClick={handleAddError}>Add Error</Button>
        <Button onClick={handleAddPersistent}>Add Persistent</Button>
        <Button variant="secondary" onClick={clearAll}>
          Clear All
        </Button>
      </div>
    </div>
  )
}

export const WithProvider: Story = {
  render: () => (
    <ToastProvider origin="bottom-right">
      <ToastDemo />
    </ToastProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using ToastProvider and useToast hook to manage toasts programmatically.',
      },
    },
  },
}

export const TopRightOrigin: Story = {
  render: () => (
    <ToastProvider origin="top-right">
      <ToastDemo />
    </ToastProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toasts can appear from the top-right corner.',
      },
    },
  },
}

// ============================================================================
// ToastManager Demo (declarative API)
// ============================================================================

function ToastManagerDemo() {
  const [toasts, setToasts] = useState<Array<{ id: number, type: 'info' | 'success' | 'warn' | 'error', text: string }>>([])
  const nextId = useState({ current: 0 })[0]

  const addToast = (type: 'info' | 'success' | 'warn' | 'error') => {
    const id = nextId.current++
    setToasts((prev) => [
      ...prev,
      { id, type, text: `${type.charAt(0).toUpperCase() + type.slice(1)} toast #${id}` },
    ])

    // Auto-remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="text-sm text-foreground-muted mb-2">
        Active toasts: {toasts.length}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => addToast('info')}>Add Info</Button>
        <Button onClick={() => addToast('success')}>Add Success</Button>
        <Button onClick={() => addToast('warn')}>Add Warning</Button>
        <Button onClick={() => addToast('error')}>Add Error</Button>
        <Button variant="secondary" onClick={() => setToasts([])}>
          Clear All
        </Button>
      </div>
      <ToastManager origin="bottom-right">
        {toasts.map((t) => (
          <Toast key={t.id} type={t.type} text={t.text} />
        ))}
      </ToastManager>
    </div>
  )
}

export const DeclarativeManager: Story = {
  render: () => <ToastManagerDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Using ToastManager with declarative children (mirrors web component API).',
      },
    },
  },
}

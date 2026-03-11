import { Alert } from './Alert'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'warn', 'error'],
      description: 'Alert type determines the background color and icon',
    },
    text: {
      control: 'text',
      description: 'Text content to display in the alert',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A message display component for informational, warning, and error notifications with icon, text content, and optional action/close buttons.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    type: 'info',
    text: 'This is an informational alert message.',
  },
}

export const Info: Story = {
  args: {
    type: 'info',
    text: 'This is an informational message to help guide the user.',
  },
}

export const Warning: Story = {
  args: {
    type: 'warn',
    text: 'Warning: Please review your input before continuing.',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    text: 'Error: Something went wrong. Please try again.',
  },
}

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert type="info" text="This is an informational message."/>
      <Alert type="warn" text="This is a warning message."/>
      <Alert type="error" text="This is an error message."/>
    </div>
  ),
}

export const LongText: Story = {
  args: {
    type: 'info',
    text: 'This is a longer alert message that demonstrates how the component handles text that spans multiple lines. The alert should grow vertically to accommodate the content while maintaining proper alignment of the icon.',
  },
}

export const WithAction: Story = {
  args: {
    type: 'warn',
    text: 'Your session is about to expire.',
    action: (
      <button className="px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border">
        Extend Session
      </button>
    ),
  },
}

export const WithClose: Story = {
  args: {
    type: 'info',
    text: 'This alert can be dismissed.',
    close: (
      <button
        className="p-1 rounded hover:bg-surface-transparent-hover"
        aria-label="Close alert"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 4l8 8M12 4l-8 8"/>
        </svg>
      </button>
    ),
  },
}

export const WithActionAndClose: Story = {
  args: {
    type: 'error',
    text: 'Failed to save changes.',
    action: (
      <button className="px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border">
        Retry
      </button>
    ),
    close: (
      <button
        className="p-1 rounded hover:bg-surface-transparent-hover"
        aria-label="Close alert"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 4l8 8M12 4l-8 8"/>
        </svg>
      </button>
    ),
  },
}

export const WithChildren: Story = {
  render: () => (
    <Alert type="info">
      <span>
        You can also use <strong>children</strong> instead of the text prop for rich content.
      </span>
    </Alert>
  ),
}

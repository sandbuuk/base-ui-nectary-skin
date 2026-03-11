import type { Meta, StoryObj } from '@storybook/react'
import { InlineAlert } from './InlineAlert'

const meta: Meta<typeof InlineAlert> = {
  title: 'Components/InlineAlert',
  component: InlineAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warn', 'error'],
      description: 'Alert type determines the background color, icon, and text color',
    },
    text: {
      control: 'text',
      description: 'Main text content to display',
    },
    caption: {
      control: 'text',
      description: 'Optional caption/title displayed above the text',
    },
    icon: {
      control: 'text',
      description: 'Custom icon name (overrides default type icon)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A prominent inline message component supporting info, success, warning, and error types with icons, optional caption, and action slots.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof InlineAlert>

export const Default: Story = {
  args: {
    type: 'info',
    text: 'This is an informational inline alert message.',
  },
}

export const Info: Story = {
  args: {
    type: 'info',
    caption: 'Information',
    text: 'This is an informational message to help guide the user.',
  },
}

export const Success: Story = {
  args: {
    type: 'success',
    caption: 'Success',
    text: 'Your changes have been saved successfully.',
  },
}

export const Warning: Story = {
  args: {
    type: 'warn',
    caption: 'Warning',
    text: 'Please review your input before continuing.',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    caption: 'Error',
    text: 'Something went wrong. Please try again.',
  },
}

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InlineAlert type="info" caption="Information" text="This is an informational message."/>
      <InlineAlert type="success" caption="Success" text="Operation completed successfully."/>
      <InlineAlert type="warn" caption="Warning" text="This is a warning message."/>
      <InlineAlert type="error" caption="Error" text="This is an error message."/>
    </div>
  ),
}

export const WithoutCaption: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InlineAlert type="info" text="Info alert without caption."/>
      <InlineAlert type="success" text="Success alert without caption."/>
      <InlineAlert type="warn" text="Warning alert without caption."/>
      <InlineAlert type="error" text="Error alert without caption."/>
    </div>
  ),
}

export const LongText: Story = {
  args: {
    type: 'info',
    caption: 'Important Notice',
    text: 'This is a longer alert message that demonstrates how the component handles text that spans multiple lines. The alert should grow vertically to accommodate the content while maintaining proper alignment of the icon and maintaining readability.',
  },
}

export const WithCustomIcon: Story = {
  args: {
    type: 'info',
    caption: 'Custom Icon',
    text: 'This alert uses a custom icon instead of the default.',
    icon: 'bell',
  },
}

export const WithAction: Story = {
  args: {
    type: 'warn',
    caption: 'Session Expiring',
    text: 'Your session is about to expire. Would you like to extend it?',
    action: (
      <button className="px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border">
        Extend Session
      </button>
    ),
  },
}

export const WithMultipleActions: Story = {
  args: {
    type: 'error',
    caption: 'Connection Lost',
    text: 'The connection to the server was lost. Please try again.',
    action: (
      <>
        <button className="px-3 py-1 text-sm font-medium rounded bg-primary text-primary-foreground hover:bg-primary-hover">
          Retry
        </button>
        <button className="px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border">
          Cancel
        </button>
      </>
    ),
  },
}

export const WithClose: Story = {
  args: {
    type: 'success',
    caption: 'Changes Saved',
    text: 'Your changes have been saved successfully.',
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
    caption: 'Failed to Save',
    text: 'Your changes could not be saved. Please try again.',
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
    <InlineAlert type="info" caption="Rich Content">
      <span>
        You can also use <strong>children</strong> instead of the text prop for rich content.
        This allows for <em>formatted text</em> and even <a href="#" className="underline">links</a>.
      </span>
    </InlineAlert>
  ),
}

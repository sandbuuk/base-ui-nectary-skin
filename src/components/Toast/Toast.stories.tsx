import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToastProvider, useToast } from './Toast'

function ToastDemo({ variant, title, description }: { variant: string; title: string; description: string }) {
  const toastManager = useToast()
  return (
    <button
      type="button"
      onClick={() =>
        toastManager.add({
          title,
          description,
          data: { variant },
        })
      }
    >
      Show {variant} toast
    </button>
  )
}

function AllToastsDemo() {
  const toastManager = useToast()
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <button
        type="button"
        onClick={() =>
          toastManager.add({
            title: 'Success',
            description: 'Your changes have been saved.',
            data: { variant: 'success' },
          })
        }
      >
        Success
      </button>
      <button
        type="button"
        onClick={() =>
          toastManager.add({
            title: 'Error',
            description: 'Something went wrong. Please try again.',
            data: { variant: 'error' },
          })
        }
      >
        Error
      </button>
      <button
        type="button"
        onClick={() =>
          toastManager.add({
            title: 'Warning',
            description: 'Your session will expire in 5 minutes.',
            data: { variant: 'warning' },
          })
        }
      >
        Warning
      </button>
      <button
        type="button"
        onClick={() =>
          toastManager.add({
            title: 'Info',
            description: 'A new version is available.',
            data: { variant: 'info' },
          })
        }
      >
        Info
      </button>
    </div>
  )
}

const meta = {
  title: 'Components/Toast',
  component: ToastProvider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastProvider>

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  render: () => <AllToastsDemo />,
}

export const Success: Story = {
  render: () => (
    <ToastDemo variant="success" title="Saved" description="Your changes have been saved successfully." />
  ),
}

export const Error: Story = {
  render: () => (
    <ToastDemo variant="error" title="Error" description="Failed to save changes. Please try again." />
  ),
}

export const Warning: Story = {
  render: () => (
    <ToastDemo variant="warning" title="Warning" description="You are running low on storage space." />
  ),
}

export const Info: Story = {
  render: () => (
    <ToastDemo variant="info" title="Update Available" description="A new version has been released." />
  ),
}

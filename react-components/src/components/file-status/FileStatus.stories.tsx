import type { Meta, StoryObj } from '@storybook/react'
import { FileStatus } from './FileStatus'

const meta: Meta<typeof FileStatus> = {
  title: 'Components/FileStatus',
  component: FileStatus,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['pending', 'loading', 'progress', 'success', 'error'],
      description: 'File status type determines the background color and icon',
    },
    filename: {
      control: 'text',
      description: 'File name to display',
    },
    content: {
      control: 'text',
      description: 'Optional content slot (additional info below filename)',
    },
  },
  args: {
    filename: 'document.pdf',
    type: 'pending',
  },
}

export default meta
type Story = StoryObj<typeof FileStatus>

// Default
export const Default: Story = {
  args: {
    filename: 'document.pdf',
    type: 'pending',
  },
}

// All status types
export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <FileStatus type="pending" filename="waiting.pdf" />
      <FileStatus type="loading" filename="uploading.jpg" />
      <FileStatus type="progress" filename="processing.doc" />
      <FileStatus type="success" filename="complete.png" />
      <FileStatus type="error" filename="failed.txt" />
    </div>
  ),
}

// Pending
export const Pending: Story = {
  args: {
    type: 'pending',
    filename: 'waiting_for_review.pdf',
  },
}

// Loading
export const Loading: Story = {
  args: {
    type: 'loading',
    filename: 'uploading_file.jpg',
  },
}

// Progress
export const Progress: Story = {
  args: {
    type: 'progress',
    filename: 'processing_document.doc',
  },
}

// Success
export const Success: Story = {
  args: {
    type: 'success',
    filename: 'upload_complete.png',
  },
}

// Error
export const Error: Story = {
  args: {
    type: 'error',
    filename: 'upload_failed.txt',
  },
}

// With content
export const WithContent: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <FileStatus
        type="success"
        filename="report.pdf"
        content={<span className="text-sm text-foreground-muted">2.4 MB - Uploaded 2 minutes ago</span>}
      />
      <FileStatus
        type="error"
        filename="image.jpg"
        content={<span className="text-sm text-danger">File size exceeds limit</span>}
      />
      <FileStatus
        type="progress"
        filename="video.mp4"
        content={<span className="text-sm text-foreground-muted">Processing: 45%</span>}
      />
    </div>
  ),
}

// With action buttons
export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <FileStatus
        type="loading"
        filename="uploading.pdf"
        action={
          <button className="px-3 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
            Cancel
          </button>
        }
      />
      <FileStatus
        type="success"
        filename="complete.pdf"
        action={
          <button className="px-3 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
            Download
          </button>
        }
      />
      <FileStatus
        type="error"
        filename="failed.pdf"
        action={
          <button className="px-3 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
            Retry
          </button>
        }
      />
    </div>
  ),
}

// With content and action
export const WithContentAndAction: Story = {
  args: {
    type: 'success',
    filename: 'annual_report_2024.pdf',
    content: <span className="text-sm text-foreground-muted">5.2 MB - Uploaded just now</span>,
    action: (
      <div className="flex gap-1">
        <button className="px-2 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
          View
        </button>
        <button className="px-2 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
          Delete
        </button>
      </div>
    ),
  },
}

// Long filename with ellipsis
export const LongFilename: Story = {
  args: {
    type: 'success',
    filename: 'this_is_a_very_long_filename_that_should_be_truncated_with_ellipsis_when_it_overflows.pdf',
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
}

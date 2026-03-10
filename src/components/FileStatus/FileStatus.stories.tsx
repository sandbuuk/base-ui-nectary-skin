import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileStatus } from './FileStatus'

const meta = {
  title: 'Components/FileStatus',
  component: FileStatus,
  tags: ['autodocs'],
} satisfies Meta<typeof FileStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Pending: Story = {
  args: {
    type: 'pending',
    filename: 'document.pdf',
  },
}

export const Loading: Story = {
  args: {
    type: 'loading',
    filename: 'report.xlsx',
  },
}

export const InProgress: Story = {
  args: {
    type: 'progress',
    filename: 'video-export.mp4',
    progress: 65,
  },
}

export const Success: Story = {
  args: {
    type: 'success',
    filename: 'backup-2024.zip',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    filename: 'corrupted-file.dat',
  },
}

export const WithActions: Story = {
  render: () => (
    <FileStatus type="success" filename="photo.png">
      <button type="button" style={{ fontSize: 12 }}>Remove</button>
    </FileStatus>
  ),
}

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
      <FileStatus type="pending" filename="queued-file.pdf" />
      <FileStatus type="loading" filename="uploading.docx" />
      <FileStatus type="progress" filename="large-video.mp4" progress={42} />
      <FileStatus type="success" filename="completed.zip" />
      <FileStatus type="error" filename="failed-upload.png" />
    </div>
  ),
}

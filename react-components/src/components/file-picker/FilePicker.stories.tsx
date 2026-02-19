import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { FilePicker } from './FilePicker'

const meta: Meta<typeof FilePicker> = {
  title: 'Components/FilePicker',
  component: FilePicker,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    onInvalid: fn(),
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow selecting multiple files',
    },
    accept: {
      control: 'text',
      description: 'File types to accept (e.g., ".jpg,.png", "image/*")',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilePicker>

// Simple button trigger
const SimpleButton = () => (
  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
    Choose File
  </button>
)

export const Default: Story = {
  render: (args) => (
    <FilePicker {...args}>
      <SimpleButton />
    </FilePicker>
  ),
}

export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (args) => (
    <FilePicker {...args}>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
        Choose Multiple Files
      </button>
    </FilePicker>
  ),
}

export const AcceptImages: Story = {
  args: {
    accept: 'image/*',
  },
  render: (args) => (
    <FilePicker {...args}>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
        Choose Images
      </button>
    </FilePicker>
  ),
}

export const AcceptPDF: Story = {
  args: {
    accept: '.pdf',
  },
  render: (args) => (
    <FilePicker {...args}>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
        Choose PDF
      </button>
    </FilePicker>
  ),
}

export const WithMaxSize: Story = {
  args: {
    maxSize: 1024 * 1024, // 1MB
  },
  render: (args) => (
    <FilePicker {...args}>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
        Choose File (Max 1MB)
      </button>
    </FilePicker>
  ),
}

// Interactive example with file list display
const InteractiveExample = () => {
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <FilePicker
        multiple
        maxSize={5 * 1024 * 1024} // 5MB
        onChange={(newFiles) => {
          setFiles(newFiles)
          setError(null)
        }}
        onInvalid={(type) => {
          if (type === 'size') {
            setError('File exceeds maximum size of 5MB')
          }
        }}
      >
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
          Select Files
        </button>
      </FilePicker>

      {error !== null && (
        <div className="text-danger text-sm">{error}</div>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          <div className="text-sm text-foreground-muted">Selected files:</div>
          <ul className="list-disc list-inside text-sm">
            {files.map((file, index) => (
              <li key={index}>
                {file.name} ({(file.size / 1024).toFixed(1)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveExample />,
}

// Custom trigger content
export const CustomTrigger: Story = {
  render: (args) => (
    <FilePicker {...args} accept="image/*">
      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
        <div className="text-foreground-muted">
          Click to upload an image
        </div>
      </div>
    </FilePicker>
  ),
}

// Icon button trigger
export const IconTrigger: Story = {
  render: (args) => (
    <FilePicker {...args}>
      <button
        className="w-10 h-10 rounded-full bg-surface-secondary flex items-center justify-center hover:bg-surface-secondary-hover"
        aria-label="Upload file"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      </button>
    </FilePicker>
  ),
}

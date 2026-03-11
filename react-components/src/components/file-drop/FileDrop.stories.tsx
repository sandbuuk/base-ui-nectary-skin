import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { FileDrop, type FileDropInvalidType } from './FileDrop'

const meta: Meta<typeof FileDrop> = {
  title: 'Components/FileDrop',
  component: FileDrop,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    onInvalid: fn(),
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    accept: {
      control: 'text',
      description: 'File type specifier (e.g., "image/*", ".pdf")',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid/error state',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    buttonText: {
      control: 'text',
      description: 'Button text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A drag-and-drop file upload zone with validation for file type, size, and quantity, plus a fallback button for file selection.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FileDrop>

/**
 * Default file drop zone with placeholder text
 */
export const Default: Story = {
  args: {
    placeholder: 'Drag and drop files here',
    buttonText: 'Choose file',
  },
}

/**
 * File drop that accepts only images
 */
export const ImagesOnly: Story = {
  args: {
    placeholder: 'Drop images here',
    buttonText: 'Select images',
    accept: 'image/*',
  },
}

/**
 * File drop that accepts multiple files
 */
export const MultipleFiles: Story = {
  args: {
    placeholder: 'Drop multiple files here',
    buttonText: 'Select files',
    multiple: true,
  },
}

/**
 * File drop with size limit (1MB)
 */
export const WithSizeLimit: Story = {
  args: {
    placeholder: 'Max file size: 1MB',
    buttonText: 'Choose file',
    maxSize: 1024 * 1024, // 1MB
  },
}

/**
 * File drop in disabled state
 */
export const Disabled: Story = {
  args: {
    placeholder: 'File upload disabled',
    buttonText: 'Choose file',
    disabled: true,
  },
}

/**
 * File drop in invalid/error state
 */
export const Invalid: Story = {
  args: {
    placeholder: 'Please upload a valid file',
    buttonText: 'Choose file',
    invalid: true,
  },
}

/**
 * File drop accepting specific file types
 */
export const SpecificFileTypes: Story = {
  args: {
    placeholder: 'PDF and Word documents only',
    buttonText: 'Select document',
    accept: '.pdf,.doc,.docx,application/pdf,application/msword',
  },
}

/**
 * File drop with custom children instead of default button
 */
export const WithCustomButton: Story = {
  args: {
    placeholder: 'Or drag files here',
  },
  render: (args) => (
    <FileDrop {...args}>
      <button
        style={{
          padding: '12px 24px',
          backgroundColor: '#4F46E5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        Upload Files
      </button>
    </FileDrop>
  ),
}

/**
 * Interactive example showing file selection feedback
 */
export const Interactive: Story = {
  args: {
    placeholder: 'Drag files here or click to browse',
    buttonText: 'Browse files',
    multiple: true,
  },
  render: function InteractiveStory(args) {
    const [files, setFiles] = useState<File[]>([])
    const [error, setError] = useState<string | null>(null)

    const handleChange = (newFiles: File[]) => {
      setFiles(newFiles)
      setError(null)
      args.onChange?.(newFiles)
    }

    const handleInvalid = (type: FileDropInvalidType) => {
      const messages: Record<FileDropInvalidType, string> = {
        accept: 'File type not accepted',
        multiple: 'Only one file allowed',
        size: 'File too large',
      }
      setError(messages[type])
      args.onInvalid?.(type)
    }

    return (
      <div className="space-y-4">
        <FileDrop
          {...args}
          onChange={handleChange}
          onInvalid={handleInvalid}
          invalid={error !== null}
        />

        {error !== null && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        {files.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Selected files:</p>
            <ul className="text-sm space-y-1">
              {files.map((file, index) => (
                <li key={index} className="text-foreground-muted">
                  {file.name} ({(file.size / 1024).toFixed(1)} KB)
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  },
}

/**
 * All states side by side for comparison
 */
export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm font-medium mb-2">Default</p>
        <FileDrop
          placeholder="Default state"
          buttonText="Choose file"
        />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Invalid</p>
        <FileDrop
          placeholder="Invalid state"
          buttonText="Choose file"
          invalid
        />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Disabled</p>
        <FileDrop
          placeholder="Disabled state"
          buttonText="Choose file"
          disabled
        />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Images Only</p>
        <FileDrop
          placeholder="Images only"
          buttonText="Select image"
          accept="image/*"
        />
      </div>
    </div>
  ),
}

import { fn } from '@storybook/test'
import { useState } from 'react'
import { Textarea } from './Textarea'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  argTypes: {
    invalid: {
      control: 'boolean',
      description: 'Invalid/error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    readOnly: {
      control: 'boolean',
      description: 'Read-only state',
    },
    required: {
      control: 'boolean',
      description: 'Required field',
    },
    resizable: {
      control: 'boolean',
      description: 'Whether the textarea can be resized by dragging',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Controlled value',
    },
    rows: {
      control: 'number',
      description: 'Number of visible rows',
    },
    minRows: {
      control: 'number',
      description: 'Minimum number of rows (auto-resize mode)',
    },
    maxRows: {
      control: 'number',
      description: 'Maximum number of rows (auto-resize mode)',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A multi-line text input component supporting controlled and uncontrolled patterns, auto-resize behavior, error states, and a resizable drag handle.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

/**
 * Default textarea with placeholder.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
}

/**
 * Textarea with a value.
 */
export const WithValue: Story = {
  args: {
    value: 'Hello World\nThis is a multi-line message.',
  },
}

/**
 * Textarea with placeholder text.
 */
export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your feedback here...',
  },
}

/**
 * Textarea with specific number of rows.
 */
export const WithRows: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">2 rows</span>
        <Textarea rows={2} placeholder="2 rows"/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">4 rows</span>
        <Textarea rows={4} placeholder="4 rows"/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">6 rows</span>
        <Textarea rows={6} placeholder="6 rows"/>
      </div>
    </div>
  ),
}

/**
 * Textarea with minRows - auto-resizes but has a minimum height.
 */
export const WithMinRows: Story = {
  args: {
    minRows: 3,
    placeholder: 'This textarea has a minimum of 3 rows and will auto-resize',
  },
}

/**
 * Textarea with maxRows - auto-resizes up to a maximum height.
 */
export const WithMaxRows: Story = {
  args: {
    maxRows: 5,
    placeholder: 'This textarea will auto-resize up to 5 rows, then scroll',
  },
}

/**
 * Textarea with both minRows and maxRows constraints.
 */
export const WithMinAndMaxRows: Story = {
  args: {
    minRows: 2,
    maxRows: 6,
    placeholder: 'Auto-resize between 2 and 6 rows',
  },
}

/**
 * Textarea in error/invalid state.
 */
export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: 'Invalid textarea',
    value: 'This content has an error',
  },
}

/**
 * Disabled textarea.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
    value: 'Cannot edit this content',
  },
}

/**
 * Read-only textarea.
 */
export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be modified.',
  },
}

/**
 * Resizable textarea with drag handle.
 */
export const Resizable: Story = {
  args: {
    resizable: true,
    placeholder: 'Drag the bottom-right corner to resize...',
    rows: 4,
  },
}

/**
 * Textarea with bottom content slot.
 */
export const WithBottomContent: Story = {
  args: {
    placeholder: 'Enter your message...',
    bottomContent: (
      <div className="flex items-center gap-2 text-sm text-foreground-muted">
        <span>0/500 characters</span>
      </div>
    ),
  },
}

/**
 * Resizable textarea with bottom content.
 */
export const ResizableWithBottomContent: Story = {
  args: {
    resizable: true,
    placeholder: 'Enter your message...',
    rows: 3,
    bottomContent: (
      <div className="flex items-center gap-2">
        <button type="button" className="px-2 py-1 text-xs bg-surface-secondary rounded hover:bg-surface-secondary-hover">
          Attach
        </button>
      </div>
    ),
  },
}

/**
 * Controlled textarea example showing state management.
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <div className="flex flex-col gap-4">
        <Textarea
          value={value}
          onChange={setValue}
          placeholder="Type something..."
          rows={4}
        />
        <p className="text-sm text-foreground-muted">
          Current value: {value || '(empty)'}
        </p>
        <p className="text-sm text-foreground-muted">
          Character count: {value.length}
        </p>
      </div>
    )
  },
}

/**
 * Uncontrolled textarea with default value.
 */
export const Uncontrolled: Story = {
  args: {
    defaultValue: 'Default value that can be edited',
    placeholder: 'Type something...',
  },
}

/**
 * Textarea with aria-label for accessibility.
 */
export const WithAriaLabel: Story = {
  args: {
    'aria-label': 'Message content',
    placeholder: 'Enter your message...',
  },
}

/**
 * Required textarea field.
 */
export const Required: Story = {
  args: {
    required: true,
    placeholder: 'Required field *',
  },
}

/**
 * All states comparison.
 */
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Default</span>
        <Textarea placeholder="Default state" rows={2}/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">With value</span>
        <Textarea value="Some text content" rows={2}/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Invalid</span>
        <Textarea invalid value="Invalid content" rows={2}/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Disabled</span>
        <Textarea disabled value="Disabled content" rows={2}/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Read-only</span>
        <Textarea readOnly value="Read-only content" rows={2}/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Resizable</span>
        <Textarea resizable placeholder="Resizable textarea" rows={2}/>
      </div>
    </div>
  ),
}

/**
 * Auto-resize demonstration.
 */
export const AutoResize: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-foreground-muted">
          Type or paste multi-line content to see the textarea grow automatically.
        </p>
        <Textarea
          value={value}
          onChange={setValue}
          minRows={2}
          maxRows={10}
          placeholder="Start typing... the textarea will grow as you type"
        />
      </div>
    )
  },
}

/**
 * Form example with textarea.
 */
export const FormExample: Story = {
  render: () => (
    <form className="flex flex-col gap-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Subject</label>
        <input
          type="text"
          className="px-3 py-2 border border-border rounded-md"
          placeholder="Enter subject"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Message</label>
        <Textarea
          placeholder="Enter your message..."
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
      >
        Send Message
      </button>
    </form>
  ),
}

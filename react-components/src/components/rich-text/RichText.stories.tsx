import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RichText } from './RichText'
import { RichTextarea } from './RichTextarea'
import { RichTextareaChip } from './RichTextareaChip'

const meta: Meta<typeof RichText> = {
  title: 'Components/RichText',
  component: RichText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A lightweight markdown-like text renderer supporting bold, italic, strikethrough, inline links, chips, lists, and code blocks.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['m', 's', 'xs', 'xxs'],
    },
    chipColor: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'info', 'blue', 'green', 'red', 'yellow'],
    },
  },
}

export default meta
type Story = StoryObj<typeof RichText>

// RichText Stories
export const Default: Story = {
  args: {
    text: 'Hello, this is some **bold** text and *italic* text.',
  },
}

export const WithFormatting: Story = {
  args: {
    text: 'This text has **bold**, *italic*, ~~strikethrough~~, and `code` formatting.',
  },
}

export const WithLinks: Story = {
  args: {
    text: 'Visit [our website](https://example.com) for more information.',
  },
}

export const WithChips: Story = {
  args: {
    text: 'Status: {{pending}} assigned to {{john-doe}}',
    chipColor: 'info',
  },
}

export const WithChipResolver: Story = {
  args: {
    text: 'Priority: {{high}} Status: {{completed}} User: {{admin}}',
    chipResolver: (tagName: string) => {
      const resolvers: Record<string, { color: string, icon?: string }> = {
        high: { color: 'danger' },
        completed: { color: 'success' },
        admin: { color: 'violet' },
      }

      return resolvers[tagName]
    },
  },
}

export const WithLists: Story = {
  args: {
    text: `Here is a list:
- First item
- Second item
- Third item

And numbered:
1. One
2. Two
3. Three`,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RichText text="Size M (default): **Bold** and *italic* text" size="m" />
      <RichText text="Size S: **Bold** and *italic* text" size="s" />
      <RichText text="Size XS: **Bold** and *italic* text" size="xs" />
      <RichText text="Size XXS: **Bold** and *italic* text" size="xxs" />
    </div>
  ),
}

export const ComplexContent: Story = {
  args: {
    text: `# Welcome to RichText

This component supports **bold**, *italic*, and ~~strikethrough~~ text.

You can also use \`inline code\` and [links](https://example.com).

Tags like {{status}} and {{user}} are rendered as chips.

Lists work too:
- Item one
- Item two
  - Nested item

1. Numbered
2. Lists
3. Also work`,
  },
}

// RichTextarea Stories
export const TextareaDefault: StoryObj<typeof RichTextarea> = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <div className="w-96">
        <RichTextarea
          value={value}
          onChange={setValue}
          placeholder="Type some rich text..."
          aria-label="Rich text input"
        />
        <p className="mt-4 text-sm text-foreground-muted">
          Output: {value}
        </p>
      </div>
    )
  },
}

export const TextareaWithValue: StoryObj<typeof RichTextarea> = {
  render: () => {
    const [value, setValue] = useState('Hello **world**! This is *rich* text.')

    return (
      <div className="w-96">
        <RichTextarea
          value={value}
          onChange={setValue}
          aria-label="Rich text input"
        />
      </div>
    )
  },
}

export const TextareaWithPlaceholder: StoryObj<typeof RichTextarea> = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <div className="w-96">
        <RichTextarea
          value={value}
          onChange={setValue}
          placeholder="Use **bold**, *italic*, or {{tags}}..."
          aria-label="Rich text input"
        />
      </div>
    )
  },
}

export const TextareaDisabled: StoryObj<typeof RichTextarea> = {
  render: () => (
    <div className="w-96">
      <RichTextarea
        value="This textarea is disabled"
        disabled
        aria-label="Disabled rich text input"
      />
    </div>
  ),
}

export const TextareaInvalid: StoryObj<typeof RichTextarea> = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <div className="w-96">
        <RichTextarea
          value={value}
          onChange={setValue}
          invalid
          placeholder="This field has an error"
          aria-label="Invalid rich text input"
        />
      </div>
    )
  },
}

export const TextareaWithSlots: StoryObj<typeof RichTextarea> = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <div className="w-96">
        <RichTextarea
          value={value}
          onChange={setValue}
          placeholder="Type a message..."
          aria-label="Rich text input"
          topContent={
            <div className="text-xs text-foreground-muted">Formatting: Bold (Ctrl+B), Italic (Ctrl+I)</div>
          }
          bottomContent={
            <div className="flex gap-2">
              <button className="text-xs px-2 py-1 bg-surface-secondary rounded">B</button>
              <button className="text-xs px-2 py-1 bg-surface-secondary rounded">I</button>
            </div>
          }
        />
      </div>
    )
  },
}

// RichTextareaChip Stories
export const ChipDefault: StoryObj<typeof RichTextareaChip> = {
  render: () => (
    <div className="flex gap-2">
      <RichTextareaChip text="username" />
      <RichTextareaChip text="tag" />
      <RichTextareaChip text="mention" />
    </div>
  ),
}

export const ChipReadonly: StoryObj<typeof RichTextareaChip> = {
  render: () => (
    <div className="flex gap-2">
      <RichTextareaChip text="readonly" readonly />
      <RichTextareaChip text="editable" />
    </div>
  ),
}

export const ChipColors: StoryObj<typeof RichTextareaChip> = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <RichTextareaChip text="default" readonly />
      <RichTextareaChip text="success" color="success" readonly />
      <RichTextareaChip text="warning" color="warning" readonly />
      <RichTextareaChip text="danger" color="danger" readonly />
      <RichTextareaChip text="info" color="info" readonly />
      <RichTextareaChip text="blue" color="blue" readonly />
      <RichTextareaChip text="green" color="green" readonly />
      <RichTextareaChip text="red" color="red" readonly />
      <RichTextareaChip text="yellow" color="yellow" readonly />
      <RichTextareaChip text="violet" color="violet" readonly />
    </div>
  ),
}

export const ChipWithRemove: StoryObj<typeof RichTextareaChip> = {
  render: () => {
    const [chips, setChips] = useState(['React', 'TypeScript', 'Tailwind'])

    return (
      <div className="flex gap-2">
        {chips.map((chip) => (
          <RichTextareaChip
            key={chip}
            text={chip}
            onRemove={() => setChips(chips.filter(c => c !== chip))}
          />
        ))}
      </div>
    )
  },
}

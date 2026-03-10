import type { Meta, StoryObj } from '@storybook/react-vite'
import { RichTextarea } from './RichTextarea'

const meta = {
  title: 'Components/RichTextarea',
  component: RichTextarea,
  tags: ['autodocs'],
} satisfies Meta<typeof RichTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Start typing...',
  },
}

export const WithDefaultValue: Story = {
  args: {
    value: '<p>This is <strong>bold</strong> and this is <em>italic</em> text.</p>',
  },
}

export const Disabled: Story = {
  args: {
    value: '<p>This editor is disabled and cannot be edited.</p>',
    disabled: true,
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Write your message here...',
  },
}

export const WithListContent: Story = {
  args: {
    value: '<ul><li>First item</li><li>Second item</li><li>Third item</li></ul>',
  },
}

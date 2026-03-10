import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'Default textarea',
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'This textarea has a default value that was set on mount.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This textarea is disabled',
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: 'This value is invalid',
  },
}

export const ResizeNone: Story = {
  args: {
    resize: 'none',
    placeholder: 'Cannot be resized',
  },
}

export const ResizeVertical: Story = {
  args: {
    resize: 'vertical',
    placeholder: 'Resize vertically',
  },
}

export const ResizeHorizontal: Story = {
  args: {
    resize: 'horizontal',
    placeholder: 'Resize horizontally',
  },
}

export const ResizeBoth: Story = {
  args: {
    resize: 'both',
    placeholder: 'Resize in any direction',
  },
}

export const CustomRows: Story = {
  args: {
    rows: 6,
    placeholder: 'Taller textarea with 6 rows',
  },
}

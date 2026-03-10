import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './Tag'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Tag',
  },
}

export const SizeMedium: Story = {
  args: {
    text: 'Medium',
    size: 'm',
  },
}

export const SizeSmall: Story = {
  args: {
    text: 'Small',
    size: 's',
  },
}

export const CustomColor: Story = {
  args: {
    text: 'Custom',
    color: '#6366f1',
  },
}

export const MultipleColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag text="Default" />
      <Tag text="Purple" color="#6366f1" />
      <Tag text="Red" color="#ef4444" />
      <Tag text="Green" color="#22c55e" />
      <Tag text="Blue" color="#3b82f6" />
      <Tag text="Orange" color="#f97316" />
    </div>
  ),
}

export const WithChildren: Story = {
  args: {
    children: 'Using children prop',
  },
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from './Chip'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Chip',
  },
}

export const Small: Story = {
  args: {
    text: 'Small chip',
    small: true,
  },
}

export const WithDelete: Story = {
  args: {
    text: 'Removable',
    onDelete: () => {},
  },
}

export const CustomColor: Story = {
  args: {
    text: 'Colored',
    color: '#6366f1',
  },
}

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    disabled: true,
  },
}

export const ChipGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip text="React" onDelete={() => {}} />
      <Chip text="TypeScript" onDelete={() => {}} />
      <Chip text="Storybook" onDelete={() => {}} />
      <Chip text="Vite" />
    </div>
  ),
}

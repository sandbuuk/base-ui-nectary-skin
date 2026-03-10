import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from './Spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SizeSmall: Story = {
  args: {
    size: 's',
  },
}

export const SizeMedium: Story = {
  args: {
    size: 'm',
  },
}

export const SizeLarge: Story = {
  args: {
    size: 'l',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Spinner size="s" />
      <Spinner size="m" />
      <Spinner size="l" />
    </div>
  ),
}

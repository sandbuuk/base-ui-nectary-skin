import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Rectangle: Story = {
  args: {
    width: 200,
    height: 20,
  },
}

export const Circle: Story = {
  args: {
    circle: true,
    height: 48,
  },
}

export const FullWidth: Story = {
  args: {
    width: '100%',
    height: 16,
  },
}

export const CardPlaceholder: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Skeleton circle height={40} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <Skeleton width="60%" height={14} />
        <Skeleton width="80%" height={14} />
      </div>
    </div>
  ),
}

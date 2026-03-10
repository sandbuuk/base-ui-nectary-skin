import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=a',
    alt: 'User avatar',
  },
}

export const WithInitials: Story = {
  args: {
    name: 'Jane Doe',
    color: '#6366f1',
  },
}

export const Fallback: Story = {
  args: {
    alt: 'Unknown user',
  },
}

export const SizeSmall: Story = {
  args: {
    name: 'Alice',
    size: 's',
    color: '#0ea5e9',
  },
}

export const SizeMedium: Story = {
  args: {
    name: 'Bob Chen',
    size: 'm',
    color: '#8b5cf6',
  },
}

export const SizeLarge: Story = {
  args: {
    name: 'Charlie Davis',
    size: 'l',
    color: '#f59e0b',
  },
}

export const StatusOnline: Story = {
  args: {
    name: 'Jane Doe',
    color: '#6366f1',
    status: 'online',
  },
}

export const StatusBusy: Story = {
  args: {
    name: 'Jane Doe',
    color: '#6366f1',
    status: 'busy',
  },
}

export const StatusAway: Story = {
  args: {
    name: 'Jane Doe',
    color: '#6366f1',
    status: 'away',
  },
}

export const StatusOffline: Story = {
  args: {
    name: 'Jane Doe',
    color: '#6366f1',
    status: 'offline',
  },
}

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Avatar name="Online" color="#22c55e" status="online" />
      <Avatar name="Busy" color="#ef4444" status="busy" />
      <Avatar name="Away" color="#f59e0b" status="away" />
      <Avatar name="Offline" color="#6b7280" status="offline" />
    </div>
  ),
}

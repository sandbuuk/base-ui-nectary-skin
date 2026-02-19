import { Avatar } from './Avatar'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Avatar size',
    },
    status: {
      control: 'select',
      options: [undefined, 'online', 'away', 'busy', 'offline'],
      description: 'Online presence status',
    },
    color: {
      control: 'select',
      options: [
        undefined,
        'default',
        'blue',
        'dark-blue',
        'light-blue',
        'green',
        'dark-green',
        'light-green',
        'red',
        'dark-red',
        'light-red',
        'orange',
        'dark-orange',
        'light-orange',
        'yellow',
        'dark-yellow',
        'light-yellow',
        'pink',
        'dark-pink',
        'light-pink',
        'violet',
        'dark-violet',
        'light-violet',
        'gray',
        'dark-gray',
        'light-gray',
      ],
      description: 'Background color preset',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text / initials',
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

/**
 * Default avatar with person icon
 */
export const Default: Story = {
  args: {},
}

/**
 * Avatar with initials
 */
export const WithInitials: Story = {
  args: {
    alt: 'JD',
  },
}

/**
 * Avatar with image
 */
export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
  },
}

/**
 * Avatar with image that fails to load (shows fallback)
 */
export const WithBrokenImage: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.jpg',
    alt: 'FB',
  },
}

/**
 * All sizes comparison
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="s" alt="S"/>
      <Avatar size="m" alt="M"/>
      <Avatar size="l" alt="L"/>
    </div>
  ),
}

/**
 * All status indicators
 */
export const StatusIndicators: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar status="online" alt="ON"/>
        <span className="text-sm text-foreground-muted">Online</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar status="away" alt="AW"/>
        <span className="text-sm text-foreground-muted">Away</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar status="busy" alt="BY"/>
        <span className="text-sm text-foreground-muted">Busy</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar status="offline" alt="OF"/>
        <span className="text-sm text-foreground-muted">Offline</span>
      </div>
    </div>
  ),
}

/**
 * Color presets showcase
 */
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Avatar color="blue" alt="BL"/>
      <Avatar color="dark-blue" alt="DB"/>
      <Avatar color="light-blue" alt="LB"/>
      <Avatar color="green" alt="GR"/>
      <Avatar color="dark-green" alt="DG"/>
      <Avatar color="light-green" alt="LG"/>
      <Avatar color="red" alt="RD"/>
      <Avatar color="dark-red" alt="DR"/>
      <Avatar color="light-red" alt="LR"/>
      <Avatar color="orange" alt="OR"/>
      <Avatar color="yellow" alt="YL"/>
      <Avatar color="pink" alt="PK"/>
      <Avatar color="violet" alt="VI"/>
      <Avatar color="gray" alt="GY"/>
    </div>
  ),
}

/**
 * Avatar with status and image
 */
export const ImageWithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://i.pravatar.cc/150?img=1"
        alt="User 1"
        status="online"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=2"
        alt="User 2"
        status="away"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=3"
        alt="User 3"
        status="busy"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=4"
        alt="User 4"
        status="offline"
      />
    </div>
  ),
}

/**
 * Different sizes with images
 */
export const SizesWithImages: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="s"
        src="https://i.pravatar.cc/150?img=5"
        alt="Small"
      />
      <Avatar
        size="m"
        src="https://i.pravatar.cc/150?img=6"
        alt="Medium"
      />
      <Avatar
        size="l"
        src="https://i.pravatar.cc/150?img=7"
        alt="Large"
      />
    </div>
  ),
}

/**
 * Avatar group example
 */
export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar
        src="https://i.pravatar.cc/150?img=8"
        alt="User 1"
        className="ring-2 ring-white"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=9"
        alt="User 2"
        className="ring-2 ring-white"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=10"
        alt="User 3"
        className="ring-2 ring-white"
      />
      <Avatar
        alt="+5"
        color="gray"
        className="ring-2 ring-white"
      />
    </div>
  ),
}

/**
 * Person icon fallback (no src, no alt)
 */
export const PersonIconFallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="s"/>
      <Avatar size="m"/>
      <Avatar size="l"/>
    </div>
  ),
}

/**
 * Interactive playground
 */
export const Playground: Story = {
  args: {
    size: 'm',
    alt: 'AB',
    color: 'blue',
    status: 'online',
  },
}

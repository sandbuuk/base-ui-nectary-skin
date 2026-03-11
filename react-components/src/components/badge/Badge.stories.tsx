import { Badge } from './Badge'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to display in the badge (e.g., notification count)',
    },
    size: {
      control: 'select',
      options: ['l', 'm', 's'],
      description: 'Size of the badge indicator',
    },
    mode: {
      control: 'select',
      options: ['square', 'circle'],
      description: 'Mode affects positioning for rectangular or circular content',
    },
    hidden: {
      control: 'boolean',
      description: 'Whether to hide the badge indicator',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A notification indicator displaying a numeric or text badge positioned on content like avatars or icons, with multiple sizes and positioning modes.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

// Placeholder content to demonstrate badge positioning
const SquareContent = ({ size = 48 }: { size?: number }) => (
  <div
    className="rounded-md bg-surface-secondary flex items-center justify-center text-foreground-muted"
    style={{ width: size, height: size }}
  >
    Box
  </div>
)

const CircleContent = ({ size = 48 }: { size?: number }) => (
  <div
    className="rounded-full bg-surface-secondary flex items-center justify-center text-foreground-muted"
    style={{ width: size, height: size }}
  >
    Img
  </div>
)

export const Default: Story = {
  args: {
    text: '3',
    size: 'm',
    mode: 'square',
    children: <SquareContent/>,
  },
}

export const WithText: Story = {
  args: {
    text: '99+',
    children: <SquareContent/>,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Badge text="5" size="l">
          <SquareContent size={56}/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Large</p>
      </div>
      <div className="text-center">
        <Badge text="5" size="m">
          <SquareContent/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Medium</p>
      </div>
      <div className="text-center">
        <Badge text="5" size="s">
          <SquareContent size={40}/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Small (dot only)</p>
      </div>
    </div>
  ),
}

export const Modes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Badge text="3" mode="square">
          <SquareContent/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Square mode</p>
      </div>
      <div className="text-center">
        <Badge text="3" mode="circle">
          <CircleContent/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Circle mode</p>
      </div>
    </div>
  ),
}

export const CircleModeAllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Badge text="5" size="l" mode="circle">
          <CircleContent size={56}/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Large</p>
      </div>
      <div className="text-center">
        <Badge text="5" size="m" mode="circle">
          <CircleContent/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Medium</p>
      </div>
      <div className="text-center">
        <Badge text="5" size="s" mode="circle">
          <CircleContent size={40}/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Small</p>
      </div>
    </div>
  ),
}

export const LongText: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Badge text="99+" size="l">
          <SquareContent size={56}/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Large</p>
      </div>
      <div className="text-center">
        <Badge text="99+" size="m">
          <SquareContent/>
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Medium</p>
      </div>
    </div>
  ),
}

export const Hidden: Story = {
  args: {
    text: '5',
    hidden: true,
    children: <SquareContent/>,
  },
}

export const DotIndicator: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Badge size="s" mode="square">
        <SquareContent/>
      </Badge>
      <Badge size="s" mode="circle">
        <CircleContent/>
      </Badge>
    </div>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Badge text="3" mode="circle">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
        JD
      </div>
    </Badge>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Badge text="5" size="m">
      <div className="w-10 h-10 rounded-md bg-surface-secondary flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      </div>
    </Badge>
  ),
}

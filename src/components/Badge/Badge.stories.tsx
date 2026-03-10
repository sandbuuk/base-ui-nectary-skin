import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['s', 'm'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Badge',
  },
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    label: 'Neutral',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Error',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    label: 'Info',
  },
}

export const SizeSmall: Story = {
  args: {
    size: 's',
    label: 'Small',
  },
}

export const SizeMedium: Story = {
  args: {
    size: 'm',
    label: 'Medium',
  },
}

export const Dot: Story = {
  args: {
    dot: true,
    variant: 'error',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="neutral" label="Neutral" />
      <Badge variant="primary" label="Primary" />
      <Badge variant="success" label="Success" />
      <Badge variant="warning" label="Warning" />
      <Badge variant="error" label="Error" />
      <Badge variant="info" label="Info" />
    </div>
  ),
}

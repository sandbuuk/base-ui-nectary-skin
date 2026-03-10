import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link } from './Link'

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    href: 'https://example.com',
    children: 'Click here',
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const External: Story = {
  args: {
    external: true,
    children: 'External link',
  },
}

export const Standalone: Story = {
  args: {
    standalone: true,
    children: 'Learn more',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled link',
  },
}

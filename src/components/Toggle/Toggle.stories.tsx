import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toggle } from './Toggle'
import { Icon } from '../Icon/Icon'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'B',
    'aria-label': 'Bold',
  },
}

export const DefaultPressed: Story = {
  args: {
    defaultPressed: true,
    children: 'B',
    'aria-label': 'Bold',
  },
}

export const WithIcon: Story = {
  args: {
    children: <Icon name="format_bold" size="s" />,
    'aria-label': 'Bold',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'B',
    'aria-label': 'Bold',
  },
}

export const DisabledPressed: Story = {
  args: {
    disabled: true,
    defaultPressed: true,
    children: 'B',
    'aria-label': 'Bold',
  },
}

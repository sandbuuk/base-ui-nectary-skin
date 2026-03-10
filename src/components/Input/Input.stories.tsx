import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'
import { Icon } from '../Icon/Icon'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SizeSmall: Story = {
  args: {
    size: 's',
    placeholder: 'Small input',
  },
}

export const SizeMedium: Story = {
  args: {
    size: 'm',
    placeholder: 'Medium input',
  },
}

export const SizeLarge: Story = {
  args: {
    size: 'l',
    placeholder: 'Large input',
  },
}

export const WithStartIcon: Story = {
  args: {
    startIcon: <Icon name="search" size="s" />,
    placeholder: 'Search...',
  },
}

export const WithEndIcon: Story = {
  args: {
    endIcon: <Icon name="visibility" size="s" />,
    placeholder: 'Password',
    type: 'password',
  },
}

export const WithBothIcons: Story = {
  args: {
    startIcon: <Icon name="mail" size="s" />,
    endIcon: <Icon name="check_circle" size="s" />,
    placeholder: 'Email address',
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: 'Invalid value',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Disabled input',
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: 'Read-only value',
  },
}

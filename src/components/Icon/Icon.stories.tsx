import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './Icon'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'home',
    'aria-label': 'Home',
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SizeExtraSmall: Story = {
  args: {
    name: 'settings',
    size: 'xs',
    'aria-label': 'Settings',
  },
}

export const SizeSmall: Story = {
  args: {
    name: 'settings',
    size: 's',
    'aria-label': 'Settings',
  },
}

export const SizeMedium: Story = {
  args: {
    name: 'settings',
    size: 'm',
    'aria-label': 'Settings',
  },
}

export const SizeLarge: Story = {
  args: {
    name: 'settings',
    size: 'l',
    'aria-label': 'Settings',
  },
}

export const CustomColor: Story = {
  args: {
    name: 'favorite',
    color: '#e53935',
    'aria-label': 'Favorite',
  },
}

export const DifferentIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Icon name="home" aria-label="Home" />
      <Icon name="search" aria-label="Search" />
      <Icon name="settings" aria-label="Settings" />
      <Icon name="delete" aria-label="Delete" />
      <Icon name="edit" aria-label="Edit" />
      <Icon name="mail" aria-label="Mail" />
      <Icon name="notifications" aria-label="Notifications" />
      <Icon name="check_circle" aria-label="Check" />
    </div>
  ),
}

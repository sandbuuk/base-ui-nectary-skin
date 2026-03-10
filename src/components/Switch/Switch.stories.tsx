import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './Switch'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm'],
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'Toggle setting',
  },
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
    'aria-label': 'Toggle setting',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'Toggle setting',
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    'aria-label': 'Toggle setting',
  },
}

export const SizeSmall: Story = {
  args: {
    size: 's',
    'aria-label': 'Small switch',
  },
}

export const SizeMedium: Story = {
  args: {
    size: 'm',
    'aria-label': 'Medium switch',
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Switch aria-label="Unchecked" />
      <Switch defaultChecked aria-label="Checked" />
      <Switch disabled aria-label="Disabled" />
      <Switch disabled defaultChecked aria-label="Disabled checked" />
    </div>
  ),
}

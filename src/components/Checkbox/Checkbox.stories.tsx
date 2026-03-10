import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm'],
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: 'Checked',
  },
}

export const Unchecked: Story = {
  args: {
    label: 'Unchecked',
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Indeterminate',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled Checked',
  },
}

export const SizeSmall: Story = {
  args: {
    size: 's',
    label: 'Small checkbox',
  },
}

export const SizeMedium: Story = {
  args: {
    size: 'm',
    label: 'Medium checkbox',
  },
}

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Standalone checkbox',
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Unchecked" />
      <Checkbox defaultChecked label="Checked" />
      <Checkbox indeterminate label="Indeterminate" />
      <Checkbox disabled label="Disabled" />
      <Checkbox disabled defaultChecked label="Disabled Checked" />
    </div>
  ),
}

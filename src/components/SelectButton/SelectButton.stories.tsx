import type { Meta, StoryObj } from '@storybook/react-vite'
import { SelectButton } from './SelectButton'

const meta = {
  title: 'Components/SelectButton',
  component: SelectButton,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Select an option...',
  },
}

export const WithValue: Story = {
  args: {
    children: 'Option A',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Cannot change',
    disabled: true,
  },
}

export const Invalid: Story = {
  args: {
    placeholder: 'Required field',
    invalid: true,
  },
}

export const Small: Story = {
  args: {
    children: 'Small size',
    size: 's',
  },
}

export const Medium: Story = {
  args: {
    children: 'Medium size',
    size: 'm',
  },
}

export const Large: Story = {
  args: {
    children: 'Large size',
    size: 'l',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 300 }}>
      <SelectButton size="s">Small</SelectButton>
      <SelectButton size="m">Medium</SelectButton>
      <SelectButton size="l">Large</SelectButton>
    </div>
  ),
}

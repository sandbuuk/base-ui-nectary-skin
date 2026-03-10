import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from './Radio'

const meta = {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" aria-label="Options">
      <Radio value="option-1" label="Option 1" />
      <Radio value="option-2" label="Option 2" />
      <Radio value="option-3" label="Option 3" />
    </RadioGroup>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <RadioGroup defaultValue="banana" aria-label="Favorite fruit">
      <Radio value="apple" label="Apple" />
      <Radio value="banana" label="Banana" />
      <Radio value="cherry" label="Cherry" />
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" disabled aria-label="Disabled options">
      <Radio value="option-1" label="Option 1" />
      <Radio value="option-2" label="Option 2" />
      <Radio value="option-3" label="Option 3" />
    </RadioGroup>
  ),
}

export const SingleDisabledOption: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" aria-label="Options">
      <Radio value="option-1" label="Option 1" />
      <Radio value="option-2" label="Option 2 (disabled)" disabled />
      <Radio value="option-3" label="Option 3" />
    </RadioGroup>
  ),
}

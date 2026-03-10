import type { Meta, StoryObj } from '@storybook/react-vite'
import { DatePicker } from './DatePicker'

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: new Date(2025, 5, 15),
  },
}

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Pick a date...',
  },
}

export const WithMinMax: Story = {
  args: {
    min: new Date(2025, 0, 1),
    max: new Date(2025, 11, 31),
    placeholder: 'Select a date in 2025',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Date picker disabled',
  },
}

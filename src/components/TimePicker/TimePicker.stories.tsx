import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimePicker } from './TimePicker'

const meta = {
  title: 'Components/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof TimePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: '14:30',
  },
}

export const FifteenMinuteSteps: Story = {
  args: {
    step: 15,
    placeholder: 'Select time (15 min intervals)',
  },
}

export const HourlySteps: Story = {
  args: {
    step: 60,
    placeholder: 'Select hour',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '09:00',
  },
}

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Choose a time slot...',
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { TimePicker } from './TimePicker'

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Time value in HH:mm:ss or HH:mm format',
    },
    defaultValue: {
      control: 'text',
      description: 'Default time value for uncontrolled usage',
    },
    ampm: {
      control: 'boolean',
      description: 'Use 12-hour format with AM/PM toggle',
    },
    submitAriaLabel: {
      control: 'text',
      description: 'Accessible label for submit button',
    },
    onChange: {
      action: 'changed',
      description: 'Called when submit button is clicked with time in HH:mm:ss format',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof TimePicker>

/**
 * Default 24-hour time picker starting at 00:00
 */
export const Default: Story = {
  args: {
    'aria-label': 'Select time',
  },
}

/**
 * Time picker with a preset value
 */
export const WithValue: Story = {
  args: {
    value: '14:30:00',
    'aria-label': 'Select time',
  },
}

/**
 * Time picker with default value (uncontrolled)
 */
export const WithDefaultValue: Story = {
  args: {
    defaultValue: '09:15:00',
    'aria-label': 'Select time',
  },
}

/**
 * 12-hour format with AM/PM toggle
 */
export const AMPM: Story = {
  args: {
    ampm: true,
    defaultValue: '09:30:00',
    'aria-label': 'Select time',
  },
}

/**
 * 12-hour format showing PM time
 */
export const AMPM_PM: Story = {
  args: {
    ampm: true,
    defaultValue: '15:45:00',
    'aria-label': 'Select time',
  },
  name: 'AM/PM (PM selected)',
}

/**
 * 24-hour format showing evening time
 */
export const Evening24Hour: Story = {
  args: {
    defaultValue: '20:00:00',
    'aria-label': 'Select time',
  },
  name: '24-hour Evening',
}

/**
 * Controlled component example
 */
export const Controlled: Story = {
  render: function ControlledTimePicker(args) {
    const [time, setTime] = useState('12:00:00')

    return (
      <div className="flex flex-col items-center gap-4">
        <TimePicker
          {...args}
          value={time}
          onChange={(newTime) => {
            setTime(newTime)
            args.onChange?.(newTime)
          }}
        />
        <div className="text-foreground font-mono">
          Selected time: {time}
        </div>
      </div>
    )
  },
  args: {
    'aria-label': 'Select time',
  },
}

/**
 * Controlled AM/PM example
 */
export const ControlledAMPM: Story = {
  render: function ControlledAMPMPicker(args) {
    const [time, setTime] = useState('09:30:00')

    return (
      <div className="flex flex-col items-center gap-4">
        <TimePicker
          {...args}
          value={time}
          ampm
          onChange={(newTime) => {
            setTime(newTime)
            args.onChange?.(newTime)
          }}
        />
        <div className="text-foreground font-mono">
          Selected time: {time}
        </div>
      </div>
    )
  },
  args: {
    'aria-label': 'Select time',
  },
  name: 'Controlled AM/PM',
}

/**
 * Custom submit button label
 */
export const CustomSubmitLabel: Story = {
  args: {
    defaultValue: '10:00:00',
    submitAriaLabel: 'Confirm time selection',
    'aria-label': 'Select time',
  },
}

/**
 * Midnight (00:00) in 24-hour format
 */
export const Midnight24Hour: Story = {
  args: {
    defaultValue: '00:00:00',
    'aria-label': 'Select time',
  },
  name: 'Midnight (24-hour)',
}

/**
 * Noon (12:00) in 24-hour format
 */
export const Noon24Hour: Story = {
  args: {
    defaultValue: '12:00:00',
    'aria-label': 'Select time',
  },
  name: 'Noon (24-hour)',
}

/**
 * Midnight in 12-hour format (12:00 AM)
 */
export const MidnightAMPM: Story = {
  args: {
    ampm: true,
    defaultValue: '00:00:00',
    'aria-label': 'Select time',
  },
  name: 'Midnight (AM/PM)',
}

/**
 * Noon in 12-hour format (12:00 PM)
 */
export const NoonAMPM: Story = {
  args: {
    ampm: true,
    defaultValue: '12:00:00',
    'aria-label': 'Select time',
  },
  name: 'Noon (AM/PM)',
}

/**
 * Time with non-5-minute interval (shows dot on minute needle)
 */
export const NonStandardMinute: Story = {
  args: {
    defaultValue: '14:23:00',
    'aria-label': 'Select time',
  },
  name: 'Non-standard Minute',
}

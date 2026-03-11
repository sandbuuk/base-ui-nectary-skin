import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Date value in ISO 8601 format (YYYY-MM-DD)',
    },
    min: {
      control: 'text',
      description: 'Minimum date in ISO 8601 format',
    },
    max: {
      control: 'text',
      description: 'Maximum date in ISO 8601 format',
    },
    locale: {
      control: 'select',
      options: ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'es-ES', 'ja-JP', 'zh-CN'],
      description: 'BCP 47 language tag for localized names',
    },
    range: {
      control: 'boolean',
      description: 'Enable date range selection mode',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'An interactive calendar for selecting single dates or date ranges with locale-aware formatting, month/year navigation, and min/max date constraints.\n\nKeyboard: Arrow keys to navigate dates. Enter to select. Tab to move between month/year controls.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

/**
 * Default DatePicker with no pre-selected date.
 * Opens to the current month.
 */
export const Default: Story = {
  args: {},
}

/**
 * DatePicker with a pre-selected date.
 */
export const WithSelectedDate: Story = {
  args: {
    value: '2024-06-15',
  },
}

/**
 * DatePicker with minimum and maximum date constraints.
 * Dates outside the range are disabled.
 */
export const WithMinMax: Story = {
  args: {
    value: '2024-06-15',
    min: '2024-01-01',
    max: '2024-12-31',
  },
}

/**
 * DatePicker in range selection mode.
 * Click two dates to select a range.
 */
export const RangeSelection: Story = {
  args: {
    range: true,
    value: '2024-06-10,2024-06-20',
  },
}

/**
 * DatePicker with French locale.
 */
export const FrenchLocale: Story = {
  args: {
    locale: 'fr-FR',
    value: '2024-06-15',
  },
}

/**
 * DatePicker with German locale.
 */
export const GermanLocale: Story = {
  args: {
    locale: 'de-DE',
    value: '2024-06-15',
  },
}

/**
 * DatePicker with Japanese locale.
 */
export const JapaneseLocale: Story = {
  args: {
    locale: 'ja-JP',
    value: '2024-06-15',
  },
}

/**
 * Multiple locales side by side for comparison.
 */
export const LocaleComparison: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div>
        <h3 className="text-sm font-medium mb-2">English (US)</h3>
        <DatePicker locale="en-US" value="2024-06-15" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">French</h3>
        <DatePicker locale="fr-FR" value="2024-06-15" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">German</h3>
        <DatePicker locale="de-DE" value="2024-06-15" />
      </div>
    </div>
  ),
}

/**
 * DatePicker constrained to a single month.
 */
export const SingleMonth: Story = {
  args: {
    min: '2024-06-01',
    max: '2024-06-30',
    value: '2024-06-15',
  },
}

/**
 * Controlled DatePicker that updates state on selection.
 */
export const Controlled: Story = {
  render: function ControlledDatePicker() {
    const [value, setValue] = useState('2024-06-15')

    return (
      <div>
        <p className="mb-4 text-sm">
          Selected date: <strong>{value || 'None'}</strong>
        </p>
        <DatePicker value={value} onChange={setValue} />
      </div>
    )
  },
}

/**
 * Controlled range DatePicker.
 */
export const ControlledRange: Story = {
  render: function ControlledRangeDatePicker() {
    const [value, setValue] = useState('2024-06-10,2024-06-20')

    return (
      <div>
        <p className="mb-4 text-sm">
          Selected range: <strong>{value || 'None'}</strong>
        </p>
        <DatePicker range value={value} onChange={setValue} />
      </div>
    )
  },
}

/**
 * Uncontrolled DatePicker with defaultValue.
 */
export const Uncontrolled: Story = {
  args: {
    defaultValue: '2024-06-15',
  },
}

/**
 * DatePicker with custom aria labels for accessibility.
 */
export const WithCustomAriaLabels: Story = {
  args: {
    value: '2024-06-15',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
  },
}

/**
 * DatePicker at different navigation states - showing disabled buttons.
 */
export const NavigationStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div>
        <h3 className="text-sm font-medium mb-2">At Min Date (Jan 2024)</h3>
        <DatePicker min="2024-01-01" max="2024-12-31" value="2024-01-15" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">At Max Date (Dec 2024)</h3>
        <DatePicker min="2024-01-01" max="2024-12-31" value="2024-12-15" />
      </div>
    </div>
  ),
}

/**
 * Clearable DatePicker with a button to reset the selection.
 */
export const Clearable: Story = {
  render: function ClearableDatePicker() {
    const [value, setValue] = useState('2024-06-15')

    return (
      <div>
        <p className="mb-4 text-sm">
          Selected date: <strong>{value || 'None'}</strong>
        </p>
        <DatePicker
          value={value}
          onChange={setValue}
          clearable
          onClear={() => setValue('')}
        />
      </div>
    )
  },
}

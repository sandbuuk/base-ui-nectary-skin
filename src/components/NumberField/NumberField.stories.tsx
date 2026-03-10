import type { Meta, StoryObj } from '@storybook/react-vite'
import { NumberField } from './NumberField'

const meta = {
  title: 'Components/NumberField',
  component: NumberField,
  tags: ['autodocs'],
} satisfies Meta<typeof NumberField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 0,
    'aria-label': 'Number',
  },
}

export const WithMinMax: Story = {
  args: {
    defaultValue: 5,
    min: 0,
    max: 10,
    'aria-label': 'Quantity',
  },
}

export const WithStep: Story = {
  args: {
    defaultValue: 0,
    step: 5,
    min: 0,
    max: 100,
    'aria-label': 'Step by 5',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 42,
    disabled: true,
    'aria-label': 'Disabled number field',
  },
}

export const ReadOnly: Story = {
  args: {
    defaultValue: 99,
    readOnly: true,
    'aria-label': 'Read-only number field',
  },
}

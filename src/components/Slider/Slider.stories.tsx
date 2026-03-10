import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from './Slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 50,
    'aria-label': 'Volume',
  },
}

export const WithMinMax: Story = {
  args: {
    defaultValue: 25,
    min: 0,
    max: 100,
    'aria-label': 'Percentage',
  },
}

export const WithStep: Story = {
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 10,
    'aria-label': 'Step slider',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 40,
    disabled: true,
    'aria-label': 'Disabled slider',
  },
}

export const CustomRange: Story = {
  args: {
    defaultValue: 5,
    min: 1,
    max: 10,
    step: 1,
    'aria-label': 'Rating',
  },
}

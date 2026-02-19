import { Progress } from './Progress'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value between 0 and 100',
    },
    detailed: {
      control: 'boolean',
      description: 'Show percentage text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

// Default
export const Default: Story = {
  args: {
    value: 50,
    'aria-label': 'Loading progress',
  },
}

// With percentage text
export const Detailed: Story = {
  args: {
    value: 75,
    detailed: true,
    'aria-label': 'Upload progress',
  },
}

// Various values
export const Values: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div>
        <span className="text-sm text-foreground-muted">0%</span>
        <Progress value={0} aria-label="Empty progress"/>
      </div>
      <div>
        <span className="text-sm text-foreground-muted">25%</span>
        <Progress value={25} aria-label="Quarter progress"/>
      </div>
      <div>
        <span className="text-sm text-foreground-muted">50%</span>
        <Progress value={50} aria-label="Half progress"/>
      </div>
      <div>
        <span className="text-sm text-foreground-muted">75%</span>
        <Progress value={75} aria-label="Three quarters progress"/>
      </div>
      <div>
        <span className="text-sm text-foreground-muted">100%</span>
        <Progress value={100} aria-label="Complete progress"/>
      </div>
    </div>
  ),
}

// With detailed text at various values
export const DetailedValues: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Progress value={0} detailed aria-label="Empty progress"/>
      <Progress value={25} detailed aria-label="Quarter progress"/>
      <Progress value={50} detailed aria-label="Half progress"/>
      <Progress value={75} detailed aria-label="Three quarters progress"/>
      <Progress value={100} detailed aria-label="Complete progress"/>
    </div>
  ),
}

// Edge cases
export const EdgeCases: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div>
        <span className="text-sm text-foreground-muted">Negative value (clamped to 0)</span>
        <Progress value={-10} detailed aria-label="Negative value"/>
      </div>
      <div>
        <span className="text-sm text-foreground-muted">Over 100 (clamped to 100)</span>
        <Progress value={150} detailed aria-label="Over 100 value"/>
      </div>
      <div>
        <span className="text-sm text-foreground-muted">Decimal value (33.33)</span>
        <Progress value={33.33} detailed aria-label="Decimal value"/>
      </div>
    </div>
  ),
}

// In a narrow container
export const NarrowContainer: Story = {
  render: () => (
    <div className="w-32">
      <Progress value={60} detailed aria-label="Progress in narrow container"/>
    </div>
  ),
}

// In a wide container
export const WideContainer: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Progress value={45} detailed aria-label="Progress in wide container"/>
    </div>
  ),
}

// Custom styling with className
export const CustomStyling: Story = {
  args: {
    value: 65,
    className: 'w-48',
    'aria-label': 'Custom styled progress',
  },
}

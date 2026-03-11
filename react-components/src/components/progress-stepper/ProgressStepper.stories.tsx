import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ProgressStepper, ProgressStepperItem } from './ProgressStepper'

const meta: Meta<typeof ProgressStepper> = {
  title: 'Components/ProgressStepper',
  component: ProgressStepper,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A multi-step progress indicator displaying completion status for each step with connecting lines and optional descriptions. Compose with `ProgressStepperItem` children, or use the `ProgressStepperGroup` compound export (`ProgressStepperGroup.Item`).',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled selected value',
    },
    progressValue: {
      control: 'select',
      options: ['step-1', 'step-2', 'step-3', 'step-4'],
      description: 'Current progress value',
    },
    onChange: {
      action: 'changed',
      description: 'Change handler',
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressStepper>

// Default story with all steps
export const Default: Story = {
  render: (args) => (
    <ProgressStepper {...args} progressValue="step-2" defaultValue="step-2" aria-label="Progress stepper">
      <ProgressStepperItem value="step-1" text="Step 1" />
      <ProgressStepperItem value="step-2" text="Step 2" />
      <ProgressStepperItem value="step-3" text="Step 3" />
      <ProgressStepperItem value="step-4" text="Step 4" />
    </ProgressStepper>
  ),
}

// All states demonstration
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-foreground-muted mb-2">Progress at Step 1 (incomplete)</p>
        <ProgressStepper progressValue="step-1" defaultValue="step-1" aria-label="Progress at step 1">
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">Progress at Step 2</p>
        <ProgressStepper progressValue="step-2" defaultValue="step-2" aria-label="Progress at step 2">
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">Progress at Step 3</p>
        <ProgressStepper progressValue="step-3" defaultValue="step-3" aria-label="Progress at step 3">
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">All Steps Complete</p>
        <ProgressStepper progressValue="step-4" defaultValue="step-4" aria-label="All steps complete">
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>
      </div>
    </div>
  ),
}

// With invalid step
export const WithInvalidStep: Story = {
  render: () => (
    <ProgressStepper progressValue="step-2" defaultValue="step-2" aria-label="Progress with invalid step">
      <ProgressStepperItem value="step-1" text="Account" />
      <ProgressStepperItem value="step-2" text="Profile" invalid />
      <ProgressStepperItem value="step-3" text="Settings" />
      <ProgressStepperItem value="step-4" text="Review" />
    </ProgressStepper>
  ),
}

// Multiple invalid steps
export const MultipleInvalidSteps: Story = {
  render: () => (
    <ProgressStepper progressValue="step-3" defaultValue="step-1" aria-label="Progress with multiple invalid steps">
      <ProgressStepperItem value="step-1" text="Account" invalid />
      <ProgressStepperItem value="step-2" text="Profile" invalid />
      <ProgressStepperItem value="step-3" text="Settings" />
      <ProgressStepperItem value="step-4" text="Review" />
    </ProgressStepper>
  ),
}

// Interactive/Controlled example
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('step-1')
    const [progressValue, setProgressValue] = useState('step-2')

    const handleNext = () => {
      const steps = ['step-1', 'step-2', 'step-3', 'step-4']
      const currentIndex = steps.indexOf(progressValue)

      if (currentIndex < steps.length - 1) {
        const nextStep = steps[currentIndex + 1]
        setProgressValue(nextStep)
        setValue(nextStep)
      }
    }

    const handlePrev = () => {
      const steps = ['step-1', 'step-2', 'step-3', 'step-4']
      const currentIndex = steps.indexOf(value)

      if (currentIndex > 0) {
        setValue(steps[currentIndex - 1])
      }
    }

    return (
      <div className="flex flex-col gap-4">
        <ProgressStepper
          value={value}
          progressValue={progressValue}
          onChange={setValue}
          aria-label="Interactive progress stepper"
        >
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-surface-secondary rounded-md hover:bg-surface-secondary-hover"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover"
          >
            Next
          </button>
        </div>

        <div className="text-sm text-foreground-muted">
          Selected: {value} | Progress: {progressValue}
        </div>
      </div>
    )
  },
}

// Three steps example
export const ThreeSteps: Story = {
  render: () => (
    <ProgressStepper progressValue="step-2" defaultValue="step-2" aria-label="Three step progress">
      <ProgressStepperItem value="step-1" text="Start" />
      <ProgressStepperItem value="step-2" text="Middle" />
      <ProgressStepperItem value="step-3" text="End" />
    </ProgressStepper>
  ),
}

// Five steps example
export const FiveSteps: Story = {
  render: () => (
    <ProgressStepper progressValue="step-3" defaultValue="step-3" aria-label="Five step progress">
      <ProgressStepperItem value="step-1" text="Step 1" />
      <ProgressStepperItem value="step-2" text="Step 2" />
      <ProgressStepperItem value="step-3" text="Step 3" />
      <ProgressStepperItem value="step-4" text="Step 4" />
      <ProgressStepperItem value="step-5" text="Step 5" />
    </ProgressStepper>
  ),
}

// Long labels
export const LongLabels: Story = {
  render: () => (
    <ProgressStepper progressValue="payment" defaultValue="payment" aria-label="Progress with long labels">
      <ProgressStepperItem value="personal" text="Personal Information" />
      <ProgressStepperItem value="address" text="Shipping Address" />
      <ProgressStepperItem value="payment" text="Payment Details" />
      <ProgressStepperItem value="confirmation" text="Order Confirmation" />
    </ProgressStepper>
  ),
}

// Item Component standalone documentation
export const ItemStates: Story = {
  name: 'Item States',
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-foreground-muted mb-2">Complete (can be clicked)</p>
        <ProgressStepper progressValue="step-3" defaultValue="step-1" aria-label="Complete state">
          <ProgressStepperItem value="step-1" text="Complete Step" />
          <ProgressStepperItem value="step-2" text="Another Complete" />
          <ProgressStepperItem value="step-3" text="Current Step" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">Incomplete (current progress)</p>
        <ProgressStepper progressValue="step-1" defaultValue="step-1" aria-label="Incomplete state">
          <ProgressStepperItem value="step-1" text="Current Step" />
          <ProgressStepperItem value="step-2" text="Inactive" />
          <ProgressStepperItem value="step-3" text="Inactive" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">Invalid state</p>
        <ProgressStepper progressValue="step-2" defaultValue="step-1" aria-label="Invalid state">
          <ProgressStepperItem value="step-1" text="Invalid Step" invalid />
          <ProgressStepperItem value="step-2" text="Current Step" />
          <ProgressStepperItem value="step-3" text="Inactive" />
        </ProgressStepper>
      </div>
    </div>
  ),
}

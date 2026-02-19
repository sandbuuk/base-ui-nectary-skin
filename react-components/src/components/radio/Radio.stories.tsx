import { fn } from '@storybook/test'
import { useState } from 'react'
import { Radio, RadioOption, RadioGroup } from './Radio'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled selected value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value for uncontrolled usage',
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid/error state',
    },
    direction: {
      control: 'select',
      options: ['column', 'row'],
      description: 'Layout direction',
    },
    name: {
      control: 'text',
      description: 'Form name attribute',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the radio group',
    },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

// Default vertical layout
export const Default: Story = {
  args: {
    'aria-label': 'Select an option',
    defaultValue: 'option1',
  },
  render: (args) => (
    <Radio {...args}>
      <RadioOption value="option1" text="Option 1" />
      <RadioOption value="option2" text="Option 2" />
      <RadioOption value="option3" text="Option 3" />
    </Radio>
  ),
}

// Horizontal layout
export const Horizontal: Story = {
  args: {
    'aria-label': 'Select an option',
    direction: 'row',
    defaultValue: 'option1',
  },
  render: (args) => (
    <Radio {...args}>
      <RadioOption value="option1" text="Option 1" />
      <RadioOption value="option2" text="Option 2" />
      <RadioOption value="option3" text="Option 3" />
    </Radio>
  ),
}

// With disabled option
export const WithDisabledOption: Story = {
  args: {
    'aria-label': 'Select an option',
    defaultValue: 'option1',
  },
  render: (args) => (
    <Radio {...args}>
      <RadioOption value="option1" text="Option 1" />
      <RadioOption value="option2" text="Option 2 (Disabled)" disabled />
      <RadioOption value="option3" text="Option 3" />
    </Radio>
  ),
}

// All disabled
export const AllDisabled: Story = {
  args: {
    'aria-label': 'Select an option',
    defaultValue: 'option2',
  },
  render: (args) => (
    <Radio {...args}>
      <RadioOption value="option1" text="Option 1" disabled />
      <RadioOption value="option2" text="Option 2 (Selected)" disabled />
      <RadioOption value="option3" text="Option 3" disabled />
    </Radio>
  ),
}

// Invalid state
export const Invalid: Story = {
  args: {
    'aria-label': 'Select an option',
    invalid: true,
  },
  render: (args) => (
    <Radio {...args}>
      <RadioOption value="option1" text="Option 1" />
      <RadioOption value="option2" text="Option 2" />
      <RadioOption value="option3" text="Option 3" />
    </Radio>
  ),
}

// Without labels (icon-only or aria-label)
export const WithoutLabels: Story = {
  args: {
    'aria-label': 'Select an option',
    direction: 'row',
    defaultValue: 'option1',
  },
  render: (args) => (
    <Radio {...args}>
      <RadioOption value="option1" aria-label="Option 1" />
      <RadioOption value="option2" aria-label="Option 2" />
      <RadioOption value="option3" aria-label="Option 3" />
    </Radio>
  ),
}

// Controlled example
export const Controlled: Story = {
  args: {
    'aria-label': 'Select an option',
  },
  render: function ControlledRadio() {
    const [value, setValue] = useState('option1')

    return (
      <div className="flex flex-col gap-4">
        <Radio aria-label="Select an option" value={value} onChange={setValue}>
          <RadioOption value="option1" text={`Option 1 ${value === 'option1' ? '(selected)' : ''}`} />
          <RadioOption value="option2" text={`Option 2 ${value === 'option2' ? '(selected)' : ''}`} />
          <RadioOption value="option3" text={`Option 3 ${value === 'option3' ? '(selected)' : ''}`} />
        </Radio>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('option1')}
          >
            Select Option 1
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('option2')}
          >
            Select Option 2
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('option3')}
          >
            Select Option 3
          </button>
        </div>
      </div>
    )
  },
}

// Using RadioGroup compound component
export const UsingRadioGroup: Story = {
  args: {
    'aria-label': 'Select a plan',
    defaultValue: 'basic',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroup.Option value="basic" text="Basic Plan - $9/month" />
      <RadioGroup.Option value="pro" text="Pro Plan - $19/month" />
      <RadioGroup.Option value="enterprise" text="Enterprise Plan - $49/month" />
    </RadioGroup>
  ),
}

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default (Vertical)</h3>
        <Radio aria-label="Default options" defaultValue="option1">
          <RadioOption value="option1" text="Selected option" />
          <RadioOption value="option2" text="Unselected option" />
        </Radio>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Horizontal</h3>
        <Radio aria-label="Horizontal options" direction="row" defaultValue="option1">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
          <RadioOption value="option3" text="Option 3" />
        </Radio>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Invalid</h3>
        <Radio aria-label="Invalid options" invalid>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Disabled</h3>
        <Radio aria-label="Disabled options" defaultValue="option1">
          <RadioOption value="option1" text="Selected disabled" disabled />
          <RadioOption value="option2" text="Unselected disabled" disabled />
        </Radio>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Mixed (Some Disabled)</h3>
        <Radio aria-label="Mixed options" defaultValue="option1">
          <RadioOption value="option1" text="Enabled option" />
          <RadioOption value="option2" text="Disabled option" disabled />
          <RadioOption value="option3" text="Enabled option" />
        </Radio>
      </div>
    </div>
  ),
}

// Form integration
export const FormIntegration: Story = {
  render: function FormExample() {
    const [selectedPlan, setSelectedPlan] = useState('')

    return (
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          alert(`Selected plan: ${selectedPlan}`)
        }}
      >
        <Radio
          name="plan"
          aria-label="Select a subscription plan"
          value={selectedPlan}
          onChange={setSelectedPlan}
        >
          <RadioOption value="free" text="Free - $0/month" />
          <RadioOption value="starter" text="Starter - $9/month" />
          <RadioOption value="pro" text="Pro - $29/month" />
          <RadioOption value="enterprise" text="Enterprise - Contact us" />
        </Radio>
        <button
          type="submit"
          className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md w-fit disabled:opacity-50"
          disabled={selectedPlan.length === 0}
        >
          Continue with {selectedPlan || '...'}
        </button>
      </form>
    )
  },
}

// Keyboard navigation demo
export const KeyboardNavigation: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground-muted mb-2">
        Use Tab to focus, Arrow keys to navigate, Space to select
      </p>
      <Radio aria-label="Keyboard navigation demo" defaultValue="option1">
        <RadioOption value="option1" text="Option 1" />
        <RadioOption value="option2" text="Option 2" />
        <RadioOption value="option3" text="Option 3" />
        <RadioOption value="option4" text="Option 4" />
      </Radio>
    </div>
  ),
}

// Long text labels
export const LongTextLabels: Story = {
  args: {
    'aria-label': 'Select an option',
    defaultValue: 'option1',
  },
  render: (args) => (
    <div className="max-w-[300px]">
      <Radio {...args}>
        <RadioOption
          value="option1"
          text="This is a very long option label that might wrap to multiple lines in a narrow container"
        />
        <RadioOption
          value="option2"
          text="Another long option with detailed description explaining what this choice means"
        />
        <RadioOption value="option3" text="Short option" />
      </Radio>
    </div>
  ),
}

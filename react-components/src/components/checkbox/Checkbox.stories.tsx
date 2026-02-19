import { fn } from '@storybook/test'
import { useState } from 'react'
import { Checkbox } from './Checkbox'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state for uncontrolled usage',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Shows indeterminate state (dash icon)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid/error state',
    },
    text: {
      control: 'text',
      description: 'Label text',
    },
    name: {
      control: 'text',
      description: 'Form name attribute',
    },
    value: {
      control: 'text',
      description: 'Form value attribute',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

// Default unchecked
export const Default: Story = {
  args: {
    text: 'Checkbox label',
  },
}

// Checked
export const Checked: Story = {
  args: {
    text: 'Checked checkbox',
    defaultChecked: true,
  },
}

// Indeterminate (checked with indeterminate state)
export const Indeterminate: Story = {
  args: {
    text: 'Indeterminate checkbox',
    defaultChecked: true,
    indeterminate: true,
  },
}

// Disabled unchecked
export const Disabled: Story = {
  args: {
    text: 'Disabled checkbox',
    disabled: true,
  },
}

// Disabled checked
export const DisabledChecked: Story = {
  args: {
    text: 'Disabled checked checkbox',
    defaultChecked: true,
    disabled: true,
  },
}

// Invalid
export const Invalid: Story = {
  args: {
    text: 'Invalid checkbox',
    invalid: true,
  },
}

// Without label
export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Checkbox without visible label',
  },
}

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default</h3>
        <div className="flex gap-4">
          <Checkbox text="Unchecked"/>
          <Checkbox text="Checked" defaultChecked/>
          <Checkbox text="Indeterminate" defaultChecked indeterminate/>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Invalid</h3>
        <div className="flex gap-4">
          <Checkbox text="Unchecked" invalid/>
          <Checkbox text="Checked" defaultChecked invalid/>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Disabled</h3>
        <div className="flex gap-4">
          <Checkbox text="Unchecked" disabled/>
          <Checkbox text="Checked" defaultChecked disabled/>
        </div>
      </div>
    </div>
  ),
}

// Controlled example
export const Controlled: Story = {
  render: function ControlledCheckbox() {
    const [checked, setChecked] = useState(false)

    return (
      <div className="flex flex-col gap-4">
        <Checkbox
          text={`Controlled checkbox (${checked ? 'checked' : 'unchecked'})`}
          checked={checked}
          onChange={setChecked}
        />
        <button
          className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md w-fit"
          onClick={() => setChecked(!checked)}
        >
          Toggle from outside
        </button>
      </div>
    )
  },
}

// With long text
export const LongText: Story = {
  args: {
    text: 'This is a checkbox with a very long label that might wrap to multiple lines in a narrow container',
  },
  decorators: [
    (Story) => (
      <div className="max-w-[200px]">
        <Story/>
      </div>
    ),
  ],
}

// Form integration
export const FormIntegration: Story = {
  render: function FormExample() {
    const [formData, setFormData] = useState<Record<string, boolean>>({
      terms: false,
      newsletter: false,
      notifications: true,
    })

    return (
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          alert(JSON.stringify(formData, null, 2))
        }}
      >
        <Checkbox
          name="terms"
          text="I agree to the terms and conditions"
          checked={formData.terms}
          onChange={(checked) =>
            setFormData((prev) => ({ ...prev, terms: checked }))
          }
        />
        <Checkbox
          name="newsletter"
          text="Subscribe to newsletter"
          checked={formData.newsletter}
          onChange={(checked) =>
            setFormData((prev) => ({ ...prev, newsletter: checked }))
          }
        />
        <Checkbox
          name="notifications"
          text="Enable notifications"
          checked={formData.notifications}
          onChange={(checked) =>
            setFormData((prev) => ({ ...prev, notifications: checked }))
          }
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md w-fit"
        >
          Submit
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
        Use Tab to navigate and Space to toggle
      </p>
      <Checkbox text="Option 1"/>
      <Checkbox text="Option 2"/>
      <Checkbox text="Option 3"/>
    </div>
  ),
}

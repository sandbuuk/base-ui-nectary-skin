import { fn } from '@storybook/test'
import { useState } from 'react'
import { Toggle } from './Toggle'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
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
    small: {
      control: 'boolean',
      description: 'Small size variant',
    },
    labeled: {
      control: 'boolean',
      description: 'Show on/off labels inside the toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    text: {
      control: 'text',
      description: 'Label text displayed next to the toggle',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

// Default unchecked toggle
export const Default: Story = {
  args: {
    'aria-label': 'Toggle setting',
  },
}

// Checked toggle
export const Checked: Story = {
  args: {
    defaultChecked: true,
    'aria-label': 'Toggle setting',
  },
}

// With text label
export const WithLabel: Story = {
  args: {
    text: 'Enable notifications',
  },
}

// With text label and checked
export const WithLabelChecked: Story = {
  args: {
    text: 'Enable notifications',
    defaultChecked: true,
  },
}

// Small size
export const Small: Story = {
  args: {
    small: true,
    'aria-label': 'Toggle setting',
  },
}

// Small size with label
export const SmallWithLabel: Story = {
  args: {
    small: true,
    text: 'Compact toggle',
  },
}

// With on/off labels
export const Labeled: Story = {
  args: {
    labeled: true,
    'aria-label': 'Toggle with labels',
  },
}

// With on/off labels checked
export const LabeledChecked: Story = {
  args: {
    labeled: true,
    defaultChecked: true,
    'aria-label': 'Toggle with labels',
  },
}

// Disabled unchecked
export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Disabled toggle',
  },
}

// Disabled checked
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    text: 'Disabled toggle (on)',
  },
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Default Size</h3>
        <div className="flex flex-col gap-3">
          <Toggle aria-label="Unchecked"/>
          <Toggle defaultChecked aria-label="Checked"/>
          <Toggle text="With label"/>
          <Toggle text="Checked with label" defaultChecked/>
          <Toggle labeled aria-label="With on/off labels"/>
          <Toggle labeled defaultChecked aria-label="Checked with on/off labels"/>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Small Size</h3>
        <div className="flex flex-col gap-3">
          <Toggle small aria-label="Small unchecked"/>
          <Toggle small defaultChecked aria-label="Small checked"/>
          <Toggle small text="Small with label"/>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Disabled States</h3>
        <div className="flex flex-col gap-3">
          <Toggle disabled text="Disabled unchecked"/>
          <Toggle disabled defaultChecked text="Disabled checked"/>
          <Toggle disabled small text="Small disabled"/>
        </div>
      </div>
    </div>
  ),
}

// Controlled example
export const Controlled: Story = {
  render: function ControlledToggle() {
    const [isChecked, setIsChecked] = useState(false)

    return (
      <div className="flex flex-col gap-4">
        <Toggle
          checked={isChecked}
          onChange={setIsChecked}
          text={isChecked ? 'Feature enabled' : 'Feature disabled'}
        />
        <p className="text-sm text-foreground-muted">
          Current state: <strong>{isChecked ? 'ON' : 'OFF'}</strong>
        </p>
      </div>
    )
  },
}

// Form integration example
export const FormExample: Story = {
  render: function FormToggle() {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
    })

    return (
      <div className="flex flex-col gap-4 p-4 rounded-md border border-border">
        <h3 className="font-medium">Settings</h3>
        <Toggle
          checked={settings.notifications}
          onChange={(checked) => setSettings({ ...settings, notifications: checked })}
          text="Push notifications"
        />
        <Toggle
          checked={settings.darkMode}
          onChange={(checked) => setSettings({ ...settings, darkMode: checked })}
          text="Dark mode"
        />
        <Toggle
          checked={settings.autoSave}
          onChange={(checked) => setSettings({ ...settings, autoSave: checked })}
          text="Auto-save drafts"
        />
        <pre className="text-xs bg-surface-secondary p-2 rounded">
          {JSON.stringify(settings, null, 2)}
        </pre>
      </div>
    )
  },
}

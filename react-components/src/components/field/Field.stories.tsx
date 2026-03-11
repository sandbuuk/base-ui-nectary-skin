import type { Meta, StoryObj } from '@storybook/react'
import { Field } from './Field'
import { Input } from '../input'

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    optionalText: {
      control: 'text',
      description: 'Optional text displayed in the top row (right-aligned)',
    },
    additionalText: {
      control: 'text',
      description: 'Additional helper text displayed below the input',
    },
    invalidText: {
      control: 'text',
      description: 'Error/validation message displayed below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state for the field',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A form field wrapper providing label, optional indicator, tooltip slot, helper text, and error message display for form inputs.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Field>

// Mock input for stories that don't need the full Input component
const MockInput = ({ disabled, invalid }: { disabled?: boolean, invalid?: boolean }) => (
  <input
    type="text"
    disabled={disabled}
    aria-invalid={invalid}
    placeholder="Enter value..."
    className="w-full h-10 px-3 border border-border rounded-md bg-surface-primary text-foreground placeholder:text-foreground-muted disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-focus"
  />
)

/**
 * Default field with a label and input
 */
export const Default: Story = {
  args: {
    label: 'Email',
    children: <MockInput />,
  },
}

/**
 * Field with label and optional text indicator
 */
export const WithOptionalText: Story = {
  args: {
    label: 'Phone Number',
    optionalText: 'Optional',
    children: <MockInput />,
  },
}

/**
 * Field with additional helper text below the input
 */
export const WithAdditionalText: Story = {
  args: {
    label: 'Username',
    additionalText: 'Must be 3-20 characters',
    children: <MockInput />,
  },
}

/**
 * Field showing an error/invalid state with error message
 */
export const WithInvalidText: Story = {
  args: {
    label: 'Password',
    invalidText: 'Password must be at least 8 characters',
    children: <MockInput invalid />,
  },
}

/**
 * Field with both invalid and additional text
 */
export const WithInvalidAndAdditionalText: Story = {
  args: {
    label: 'Email',
    invalidText: 'Invalid email format',
    additionalText: 'Required',
    children: <MockInput invalid />,
  },
}

/**
 * Disabled field state
 */
export const Disabled: Story = {
  args: {
    label: 'Company Name',
    optionalText: 'Optional',
    additionalText: 'This field is disabled',
    disabled: true,
    children: <MockInput disabled />,
  },
}

/**
 * Field without a label (just input wrapper)
 */
export const WithoutLabel: Story = {
  args: {
    additionalText: 'Additional information',
    children: <MockInput />,
  },
}

/**
 * Field with only optional text
 */
export const WithOnlyOptionalText: Story = {
  args: {
    optionalText: 'Optional field',
    children: <MockInput />,
  },
}

/**
 * Field with tooltip (using a placeholder element)
 */
export const WithTooltip: Story = {
  args: {
    label: 'API Key',
    tooltip: (
      <span
        title="Your API key can be found in settings"
        className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-secondary text-foreground-muted text-xs cursor-help"
      >
        ?
      </span>
    ),
    children: <MockInput />,
  },
}

/**
 * Field with tooltip and optional text
 */
export const WithTooltipAndOptionalText: Story = {
  args: {
    label: 'Secret Key',
    tooltip: (
      <span
        title="Keep this secret!"
        className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-secondary text-foreground-muted text-xs cursor-help"
      >
        ?
      </span>
    ),
    optionalText: 'Optional',
    children: <MockInput />,
  },
}

/**
 * Complete field with all features
 */
export const Complete: Story = {
  args: {
    label: 'Full Name',
    optionalText: 'Required',
    tooltip: (
      <span
        title="Enter your full legal name"
        className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-secondary text-foreground-muted text-xs cursor-help"
      >
        ?
      </span>
    ),
    additionalText: 'As it appears on your ID',
    children: <MockInput />,
  },
}

/**
 * Multiple fields in a form layout
 */
export const FormLayout: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <Field label="First Name">
        <MockInput />
      </Field>
      <Field label="Last Name">
        <MockInput />
      </Field>
      <Field
        label="Email"
        invalidText="Please enter a valid email address"
      >
        <MockInput invalid />
      </Field>
      <Field
        label="Phone"
        optionalText="Optional"
        additionalText="Include country code"
      >
        <MockInput />
      </Field>
    </div>
  ),
}

/**
 * Field with real Input component (integration example)
 */
export const WithInputComponent: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <Field label="Email Address" additionalText="We'll never share your email">
        <Input placeholder="you@example.com" />
      </Field>
      <Field label="Password" invalidText="Password is required">
        <Input type="password" invalid placeholder="Enter password" />
      </Field>
    </div>
  ),
}

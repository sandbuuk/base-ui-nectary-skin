import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field } from './Field'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const WithLabelAndInput: Story = {
  args: {
    label: 'Email',
    helperText: 'We will never share your email.',
  },
  render: (args) => (
    <Field {...args}>
      <Input placeholder="you@example.com" />
    </Field>
  ),
}

export const WithOptionalIndicator: Story = {
  args: {
    label: 'Phone number',
    optionalText: '(optional)',
    helperText: 'Include country code.',
  },
  render: (args) => (
    <Field {...args}>
      <Input placeholder="+1 (555) 000-0000" type="tel" />
    </Field>
  ),
}

export const WithError: Story = {
  args: {
    label: 'Username',
    errorText: 'Username is already taken.',
  },
  render: (args) => (
    <Field {...args}>
      <Input defaultValue="admin" invalid />
    </Field>
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    helperText: 'This field is not editable.',
    disabled: true,
  },
  render: (args) => (
    <Field {...args}>
      <Input defaultValue="Cannot edit" disabled />
    </Field>
  ),
}

export const WithTextarea: Story = {
  args: {
    label: 'Description',
    helperText: 'Max 500 characters.',
  },
  render: (args) => (
    <Field {...args}>
      <Textarea placeholder="Write a description..." rows={4} />
    </Field>
  ),
}

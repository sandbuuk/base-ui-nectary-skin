import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextField } from './TextField'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    status: {
      control: 'select',
      options: ['default', 'invalid', 'disabled'],
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Name',
    value: 'John Doe',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email.',
  },
}

export const Invalid: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    status: 'invalid',
    helperText: 'Please enter a valid email address.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'Cannot edit',
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'Read Only',
    value: 'Read only value',
    readOnly: true,
  },
}

export const SizeSmall: Story = {
  args: {
    label: 'Small',
    placeholder: 'Small field',
    size: 's',
  },
}

export const SizeMedium: Story = {
  args: {
    label: 'Medium',
    placeholder: 'Medium field',
    size: 'm',
  },
}

export const SizeLarge: Story = {
  args: {
    label: 'Large',
    placeholder: 'Large field',
    size: 'l',
  },
}

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
}

export const PasswordType: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
  },
}
